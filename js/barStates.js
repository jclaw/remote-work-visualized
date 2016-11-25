(function(){

	var barStates = {};

	barStates.draw = function(id, data) {
        $(id).empty();

        var svg = d3.select(id),
        margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var divTooltip = d3.select("body").append("div").attr("class", "toolTip");

        var x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.1)
        .align(0.1);

        var y = d3.scaleLinear()
        .rangeRound([height, 0]);

        var z = d3.scaleOrdinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var stack = d3.stack();

        data.rows.sort(function(a, b) { return b.total - a.total; });

        x.domain(data.rows.map(function(d) { return d.state; }));
        y.domain([0, d3.max(data.rows, function(d) { return d.total; })]).nice();
        z.domain(data.columns.slice(1, data.columns.length - 1));

        g.selectAll(".serie")
        .data(stack.keys(data.columns.slice(1, data.columns.length - 1))(data.rows))
        .enter().append("g")
        .attr("class", "serie")
        .attr("fill", function(d) { return z(d.key); })
        .on("mouseover", function(d) {
            var $el = $(id).find('rect:hover'),
                el = d3.select($el[0]);

            var originalFill = el.style('fill');
            el.style('fill', d3.rgb(originalFill).darker(1));
            // console.log();

            var x = parseInt($el.attr('x')),
                y = parseInt($el.attr('y')),
                height = parseInt($el.attr('height')),
                width = parseInt($el.attr('width')),
                tipDOM = divTooltip._groups[0][0],
                tipHeight = $(tipDOM).outerHeight();

            divTooltip.style("left", (x + width + 54) + 'px');
            divTooltip.style("top", (y + 48 + ((height - tipHeight) / 2)) + 'px');

            divTooltip.style("display", "inline-block");
            var sdata = data.rows[$el.index()];
            var state = id_to_state(sdata.state);
            var value = sdata[d.key].toFixed(2);

            divTooltip.html((state)+" - "+d.key+": "+value+"%");

            el.on('mouseout', function(d) {
                d3.select(this).style('fill', originalFill);
                divTooltip.style("display", "none");
            })
        })
        .selectAll("rect")
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("x", function(d) { console.log(d);return x(d.data.state); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width", x.bandwidth());

        g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

        g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, "s"))
        .append("text")
        .attr("x", 2)
        .attr("y", y(y.ticks(10).pop()))
        .attr("dy", "0.35em")
        .attr("text-anchor", "start")
        .attr("fill", "#000")
        .text("Population");

        var legend = g.selectAll(".legend")
        .data(data.columns.slice(1, data.columns.length - 1).reverse())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; })
        .style("font", "10px sans-serif");

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
	this.barStates=barStates;
})();
