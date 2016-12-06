(function() {
    $(function() {

        var categories = ['age', 'sex of workers', 'industry', 'occupation'];
        var states =
            ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID',
             'IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO',
             'MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA',
            //  'PR',
             'RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
        var variableData = [];
        categories.forEach(function(category) {
            variableData.push({category: category, variables: PARTITION[category].variables});
        })

        var $container = $("#viz");
        var viewModel = new VizVM(StateData, categories, states, {
            map: '#map',
            stackedBar: '#stackedBar'
        });

        ko.applyBindings(viewModel, $container[0]);

    })

    function VizVM(StateData, categories, states, ids) {
        var self = this;
        self.categories = categories;
        self.selectedCategory = ko.observable(self.categories[0]);

        self.modes = ['per capita', 'total'];
        self.selectedMode = ko.observable(self.modes[0]);

        self.years = [2010, 2011, 2012, 2013, 2014, 2015];
        self.selectedYear = ko.observable(self.years[self.years.length - 1]);

        self.lowestYear = ko.computed(function() {
            return self.selectedYear() == self.years[0];
        }, self);

        self.highestYear = ko.computed(function() {
            return self.selectedYear() == self.years[self.years.length - 1];
        }, self);

        self.yearChange = function(n, e) {
            if (e.type != "DOMContentLoaded") {
                var i = self.years.indexOf(self.selectedYear());
                self.selectedYear(self.years[i + n]);
                drawBars();
                drawMap();
            }
        }

        var onClick = new OnClick(ids);

        var SB = new StackedBarOfStates(ids.stackedBar, onClick);
        var US = new uStates(ids.map, tooltipHtml, onClick);


        var previousCategory = '';
        var formatMap = {
            'per capita': 'percent',
            'total': 'numeral'
        }

        self.dropdownChanged = function() {
            drawGraphs();
        }

        drawGraphs();

        function drawGraphs() {
            drawMap();
            drawBars();
        }

        function drawBars() {
            var yearData = StateData[self.selectedYear()];
            var category = self.selectedCategory();

            var data = {
                'rows': [],
                'columns': []
            };

            for (var i = 0; i < states.length; i++) {
                var state = states[i];

                var obj_to_push = $.extend({}, yearData[state][category]);
                var population_total = obj_to_push.total;

                obj_to_push.total = obj_to_push['Worked at home'];
                delete obj_to_push['Worked at home'];

                for (key in obj_to_push) {
                    if (self.selectedMode() == 'per capita') {
                        obj_to_push[key] = (obj_to_push[key] / population_total);
                    }
                }

                data.rows.push($.extend(obj_to_push, {state: state}));
            }

            for (var i = 0; i < PARTITION[category].variables.length; i++) {
                var variable = PARTITION[category].variables[i];
                data.columns.push(variable.normalized_label);
            }

            data.format = formatMap[self.selectedMode()];
            data.maximums = Maximums;

            if (category == previousCategory && category != '') {
                SB.update(data);
            } else {
                previousCategory = category;
                SB.draw(data);
            }
        }

        function drawMap() {
            var yearData = StateData[self.selectedYear()];
            var category = self.selectedCategory();
            var maxWorkedAtHome = Math.max(...states.map(function(state) { return yearData[state][category]['Worked at home'] }));

            var sampleData = {};

            var mode = formatMap[self.selectedMode()];

            states.forEach(function(state) {
                var total = yearData[state][category]['total'];
                sampleData[state] = {}

                var interpolation = d3.interpolate("#fff", "#000");
                var workedAtHome = yearData[state][category]['Worked at home'];

                if (mode == 'percent') {
                    sampleData[state].value = workedAtHome / total;
                    sampleData[state].color = interpolation(workedAtHome / (total / 10));

                } else {
                    sampleData[state].value = workedAtHome;
                    sampleData[state].color = interpolation(workedAtHome / maxWorkedAtHome);
                }
            });

            US.draw(sampleData, mode);

            d3.select(self.frameElement).style("height", "600px");
        }

    }

    function tooltipHtml(n, d) {	/* function to create html content string in tooltip div. */
        var str = '<h4>' + n + '</h4><table>';
        str += '<tr><td>' + d + '</td/></tr>';

        str += '</table';
        return str;
    }



    function wrap(text, width) {
        text.each(function() {
            var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
    }
})();
