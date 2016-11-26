(function(){
function StackedBarOfStates(id) {
    var container = d3.select(id);
    var svg = container.select("svg");

    var prevData = {};

    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleBand()
    .rangeRound([0, width])
    .padding(0.1)
    .align(0.1);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    var z = d3.scaleOrdinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var stack = d3.stack();

    var serie, rect, divTooltip, legend, xAxis, yAxis;

    this.draw = function(data) {
        $(g._groups[0][0]).empty();

        $(container._groups[0][0]).width(svg.attr('width'));

        divTooltip = d3.select(id).append("div").attr("class", "toolTip");

        data.rows.sort(function(a, b) { return b.total - a.total; });
        prevData = data;

        x.domain(data.rows.map(function(d) { return d.state; }));
        y.domain([0, d3.max(data.rows, function(d) { return d.total; })]).nice();
        z.domain(data.columns.slice(1, data.columns.length - 1));

        serie = g.selectAll(".serie")
            .data(stack.keys(data.columns.slice(1, data.columns.length - 1))(data.rows))
            .enter().append("g")
                .attr("class", "serie")
                .attr("fill", function(d) { return z(d.key); })
                .on("mouseover", function(d) {
                    toolTipMouseover(d, data);
                })

        rect = serie.selectAll("rect")
            .data(function(d) { return d; })
            .enter().append("rect")
                .attr("class", function(d) { return "state-" + d.data.state })
                .attr("y", height)
                .attr("height", 1)
                .attr("width", x.bandwidth())
                .attr("x", function(d) { return x(d.data.state); })
                .transition()
                    .duration(1000)
                    // .delay(100)
                    .attr("y", function(d) { return y(d[1]); })
                    .attr("height", function(d) { return y(d[0]) - y(d[1]); })


        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y).ticks(10, "s"))
            .append("text")
                .attr("class", "axis-label")
                .attr("x", 2)
                .attr("y", y(y.ticks(10).pop()))
                .attr("dy", "0.35em")
                .attr("text-anchor", "start")
                .attr("fill", "#000")
                .text("% working at home");

        legend = g.selectAll(".legend")
            .data(data.columns.slice(1, data.columns.length - 1).reverse())
            .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; })
                .style("font-size", "12px");

        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .attr("fill", z);

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .attr("text-anchor", "end")
            .text(function(d) { return d; });
    }

    this.update = function(data) {
        // data.rows.sort(function(a, b) { return b.total - a.total; });

        var sorting = stateOrder(prevData.rows);

        data.rows = data.rows.map(function(stateData) {
            var n = sorting.indexOf(stateData.state);
            return [n, stateData];
        }).sort(function(a, b) {return a[0] - b[0]}).map(function(s) { return s[1] });


        x.domain(data.rows.map(function(d) { return d.state; }));
        y.domain([0, d3.max(data.rows, function(d) { return d.total; })]).nice();
        z.domain(data.columns.slice(1, data.columns.length - 1));

        serie = g.selectAll(".serie")
            .data(stack.keys(data.columns.slice(1, data.columns.length - 1))(data.rows));

        serie.enter().append("g")
            .attr("class", "serie")
            .merge(serie)
            .on("mouseover", function(d) {
                toolTipMouseover(d, data);
            })
        serie.exit().remove();

        rect = serie.selectAll("rect")
            .data(function(d) { return d; });
        rect.enter().append("rect")
            .merge(rect)
            .attr("x", function(d) { return x(d.data.state); })
            .transition()
                .duration(1000)
                // .delay(100)
                .attr("y", function(d) { return y(d[1]); })
                .attr("height", function(d) { return y(d[0]) - y(d[1]); })

        rect.exit().remove();

        xAxis = g.select('.axis--x')
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        yAxis = g.select('.axis--y')
            .call(d3.axisLeft(y).ticks(10, "s"))
            .select("text.axis-label")
                .text("total working at home");
    }

    function toolTipMouseover(d, data) {
        var $el = $(id + " svg").find('rect:hover'),
            el = d3.select($el[0]);

        var originalFill = el.style('fill');
        el.style('fill', d3.rgb(originalFill).darker(1));

        divTooltip.style("display", "inline-block");

        buildToolTip(data.rows[$el.index()], d.key, {
            x: parseInt($el.attr('x')),
            y: parseInt($el.attr('y')),
            height: parseInt($el.attr('height')),
            width: parseInt($el.attr('width'))
        }, data);

        el.on('mouseout', function(d) {
            d3.select(this).style('fill', originalFill);
            divTooltip.style("display", "none");
        })
    }

    function buildToolTip(sdata, category, eldata, data) {
        var tipDOM = divTooltip._groups[0][0],
            tipHeight = $(tipDOM).outerHeight();

        var state = id_to_state(sdata.state);
        var value = sdata[category];
        var valuestr = ''
        // TODO: check this some other way
        if (!(isInt(value))) {
            valuestr = value.toFixed(2) + '%';
        } else {
            valuestr = numberWithCommas(value);
        }

        divTooltip.style("left", (eldata.x + eldata.width + 47) + 'px');
        divTooltip.style("top", (eldata.y + 21 + ((eldata.height - tipHeight) / 2)) + 'px');

        divTooltip.html((state)+" - "+category+": "+valuestr);

    }

    function stateOrder(data) {
        console.log(data);
        return data.map(function(s) { return s.state })
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function isInt(n) {
        return n % 1 === 0;
    }
}



    // StackedBarOfStates.sort = function(id, data) {
    //     var svg = d3.select(id + " > svg");
    //
    //
    //
    //     data.rows.sort(function(a, b) { return b.total - a.total; });
    //
    //
    //     var svg = d3.select(id + " > svg"),
    //         margin = {top: 20, right: 20, bottom: 30, left: 40},
    //         width = +svg.attr("width") - margin.left - margin.right,
    //         height = +svg.attr("height") - margin.top - margin.bottom,
    //         g = d3.select($(id + ' svg > g')[0]),
    //         divTooltip = d3.select(id + ' .toolTip');
    //
    //     var stack = d3.stack();
    //
    //     var x = d3.scaleBand()
    //         .rangeRound([0, width])
    //         .padding(0.1)
    //         .align(0.1)
    //
    //     var x0 = x.domain(data.rows.map(function(d) { return d.state; })).copy();
    //
    //
    //     var serie = g.selectAll(".serie")
    //         .data(stack.keys(data.columns.slice(1, data.columns.length - 1))(data.rows));
    //
    //     serie.enter().append("g")
    //         .attr("class", "serie")
    //         .merge(serie)
    //         .on("mouseover", function(d) {
    //             var $el = $(id + " svg").find('rect:hover'),
    //                 el = d3.select($el[0]);
    //
    //             var originalFill = el.style('fill');
    //             el.style('fill', d3.rgb(originalFill).darker(1));
    //
    //             divTooltip.style("display", "inline-block");
    //
    //             buildToolTip(divTooltip, data.rows[$el.index()], d.key, {
    //                 x: parseInt($el.attr('x')),
    //                 y: parseInt($el.attr('y')),
    //                 height: parseInt($el.attr('height')),
    //                 width: parseInt($el.attr('width'))
    //             }, data);
    //
    //             el.on('mouseout', function(d) {
    //                 d3.select(this).style('fill', originalFill);
    //                 divTooltip.style("display", "none");
    //             })
    //         })
    //     serie.exit().remove();

        // var rect = serie.selectAll("rect")
        //     .data(function(d) { return d; })
        //     .enter().append("rect")
        //     .transition()
        //         .duration(1000)
        //         .delay(100)
        //         .attr("x", function(d) { return x(d.data.state); })

        // var rect = serie.selectAll("rect")
        //     .data(function(d) { return d; });
        // rect.enter().append("rect")
        //     .merge(rect)
        //     .transition()
        //         .duration(1000)
        //         // .delay(100)
        //     .attr("x", function(d) { return x(d.data.state); })
        //
        // rect.exit().remove();

            // .attr("y", function(d) { return y(d[1]); })
            // .attr("height", function(d) { return y(d[0]) - y(d[1]); })

        // var xAxis = d3.svg.axis()
        //     .scale(x)
        //     .orient("bottom");


        // var transition = svg.transition().duration(750);
        // var delay = function(d, i) { return i * 50; };
        //
        // transition.selectAll("rect")
        // .delay(delay)
        // .attr("x", function(d) { return x0(d.total); });
        //
        // transition.select("axis--x")
        // .call(xAxis)
        // .selectAll("g")
        // .delay(delay);
    // }



	this.StackedBarOfStates = StackedBarOfStates;
})();