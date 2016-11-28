(function(){
function StackedBarOfStates(id) {
    var self = this;
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

    var xOffset = 24;

    var formatComma = d3.format(","),
        formatPercent = d3.format(".1%");

    var updateDuration = 1000,
        sortDuration = 1000

    var serie, rect, divTooltip, legend, xAxis, yAxis;

    self.draw = function(data) {
        $(g._groups[0][0]).empty();

        $(container._groups[0][0]).width(svg.attr('width'));

        divTooltip = d3.select(id).append('div').attr('class', 'toolTip');
        divTooltip.append('span').attr('class', 'state-name');
        divTooltip.append('span').text(' - ');
        divTooltip.append('span').attr('class', 'category');
        divTooltip.append('span').text(': ');
        divTooltip.append('span').attr('class', 'value');

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
                .attr("class", function(d) { return "state-bar " + d.data.state})
                .attr("y", height)
                .attr("height", 1)
                .attr("width", x.bandwidth())
                .attr("x", function(d) { return x(d.data.state) + xOffset; })
                .transition()
                    .duration(updateDuration)
                    // .delay(100)
                    .attr("y", function(d) { return y(d[1]); })
                    .attr("height", function(d) { return y(d[0]) - y(d[1]); })


        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(" + xOffset + "," + height + ")")
            .call(d3.axisBottom(x));

        yAxis = g.append("g")
            .attr("class", "axis axis--y");


        yAxis.append("text")
            .attr("transform", "rotate(-90)")
            .attr("class", "axis-label")
            .attr("x", 2)
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")


        if (data.format == 'percent') {
            yAxis.call(d3.axisLeft(y).ticks(10).tickFormat(formatPercent))
            .select('text.axis-label')
                .text("% working at home");
        } else {
            yAxis.call(d3.axisLeft(y).ticks(10, 's'))
            .select('text.axis-label')
                .text("total working at home");
        }


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

    self.update = function(data) {

        // sort based on previous sorting order so that states stay in same order
        var sorting = stateOrder(prevData);
        console.log('updating');
        console.log(sorting);
        data.rows = data.rows.map(function(stateData) {
            var n = sorting.indexOf(stateData.state);
            return [n, stateData];
        }).sort(function(a, b) {return a[0] - b[0]}).map(function(s) { return s[1] });

        console.log('organized based on previous');
        console.log(stateOrder(data));

        prevData = $.extend({}, data);



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
            .attr("x", function(d) { return x(d.data.state) + xOffset; })
            .transition()
                .duration(updateDuration)
                // .delay(100)
                .attr("y", function(d) { return y(d[1]); })
                .attr("height", function(d) { return y(d[0]) - y(d[1]); })

        rect.exit().remove();

        xAxis = g.select('.axis--x')
            .attr("transform", "translate(" + xOffset + "," + height + ")")
            .call(d3.axisBottom(x));

        yAxis = g.select('.axis--y');

        if (data.format == 'percent') {
            yAxis.call(d3.axisLeft(y).ticks(10).tickFormat(formatPercent))
            .select('text.axis-label')
                .text("% working at home");
        } else {
            yAxis.call(d3.axisLeft(y).ticks(10, 's'))
            .select('text.axis-label')
                .text("total working at home");
        }

        window.setTimeout(function() {
            self.sort(data);
        }, updateDuration)
    }

    self.sort = function(data) {

        data.rows.sort(function(a, b) { return b.total - a.total; });

        prevData = data;
        console.log('sorted');
        console.log(stateOrder(data));
        // Copy-on-write since tweens are evaluated after a delay.
        x.domain(data.rows.map(function(d) { return d.state; }));
        y.domain([0, d3.max(data.rows, function(d) { return d.total; })]).nice();
        z.domain(data.columns.slice(1, data.columns.length - 1));

        rect = serie.selectAll("rect")
            .sort(function(a, b) {return x(a.data.state) - x(b.data.state) })
            .transition()
                .duration(sortDuration)
                .attr("x", function(d) { return x(d.data.state) + xOffset; });

        xAxis.transition().duration(sortDuration)
            .call(d3.axisBottom(x))

    }

    function toolTipMouseover(d, data) {
        var $el = $(id + " svg").find('rect:hover'),
            el = d3.select($el[0]);

        var originalFill = el.style('fill');
        el.style('fill', d3.rgb(originalFill).darker(1));

        divTooltip.style("display", "inline-block");

        setToolTip(data.rows[$el.index()], d.key, {
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

    function setToolTip(sdata, category, eldata, data) {
        var tipDOM = divTooltip._groups[0][0],
            tipHeight = $(tipDOM).outerHeight();

        var state = id_to_state(sdata.state);
        var value = sdata[category];

        divTooltip.select('.state-name').text(state);
        divTooltip.select('.category').text(category);
        var valueEl = divTooltip.select('.value');

        if (data.format == 'percent') {
            valueEl.text(function() { return formatPercent(value); })
        } else {
            valueEl.text(function() { return formatComma(value); })
        }

        divTooltip.style("left", (eldata.x + eldata.width + 47) + 'px');
        divTooltip.style("top", (eldata.y + 21 + ((eldata.height - tipHeight) / 2)) + 'px');

    }

    function stateOrder(data) {
        return data.rows.map(function(s) { return s.state });
    }

    function isInt(n) {
        return n % 1 === 0;
    }
}

this.StackedBarOfStates = StackedBarOfStates;
})();
