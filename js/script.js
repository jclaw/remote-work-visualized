(function() {
    $(function() {
        console.log(StateData);

        var categories = ['age', 'sex of workers', 'industry', 'occupation'];
        var states =
            ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID',
             'IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO',
             'MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA',
             'PR','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
        var variableData = [];
        categories.forEach(function(category) {
            variableData.push({category: category, variables: PARTITION[category].variables});
        })

        var visualizations = [
            // { vm: new MapVM(StateData, categories, variableData, states),
            //   dom: $('#map')[0] },
            { vm: new StackedBarVM(StateData, categories, states),
              dom: $('#stackedBar')[0] }
        ]

        for (var i = 0; i < visualizations.length; i++) {
            ko.applyBindings(visualizations[i].vm, visualizations[i].dom);
        }

        var $container = $("#map");
        var viewModel = new MapVM(StateData, states);


        ko.applyBindings(viewModel, $container[0]);

    })


    function MapVM(StateData, states) {
        var self = this;
        self.years = [2010, 2011, 2012, 2013, 2014, 2015]
        self.selectedYear = ko.observable(self.years[self.years.length - 1]);

        self.modes = ['per capita', 'total'];
        self.selectedMode = ko.observable(self.modes[0]);

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
                console.log('selectedYear');
                applyData();
            }
        }

        self.selectedMode.subscribe(function() {
            applyData();
        })



        var category = 'age';

        var US = new uStates("#statemap", tooltipHtml);


        applyData();



        function tooltipHtml(n, d) {	/* function to create html content string in tooltip div. */
            // console.log(d);
            var str = '<h4>' + n + '</h4><table>';
            str += '<tr><td>' + d + '</td/></tr>';

            str += '</table';
            return str;
        }



        function applyData() {
            var yearData = StateData[self.selectedYear()];
            var maxWorkedAtHome = Math.max(...states.map(function(state) { return yearData[state][category]['Worked at home'] }));

            var sampleData = {};

            var modeMap = {
                'per capita': 'percent',
                'total': 'numeral'
            }

            var mode = modeMap[self.selectedMode()];

            states.forEach(function(state) {
                var total = yearData[state][category]['total'];
                sampleData[state] = {}
                // for (key in StateData[state][category]) {
                //     if (key != 'total') {
                //         var value = StateData[state][category][key]
                //         sampleData[state].variables.push({'code': key, 'value': (value * 100 / total).toFixed(0) + '%' })
                //     }
                // }
                // // sort and remove total
                // sampleData[state].variables.sort().shift();


                var interpolation = d3.interpolate("#ffffcc", "#800026");
                var workedAtHome = yearData[state][category]['Worked at home'];

                if (mode == 'percent') {
                    sampleData[state].value = workedAtHome / total;
                    sampleData[state].color = interpolation(workedAtHome / (total / 10));

                } else {
                    sampleData[state].value = workedAtHome;
                    if (state == 'CA') console.log(workedAtHome, maxWorkedAtHome);
                    sampleData[state].color = interpolation(workedAtHome / maxWorkedAtHome);
                }


                // var datapoint = yearData[state][category][code];
            });


            US.draw(sampleData, mode);

            d3.select(self.frameElement).style("height", "600px");
        }

    }

    function StackedBarVM(StateData, categories, states) {
        var self = this;
        self.categories = categories;
        self.modes = ['per capita', 'total'];
        self.years = [2010, 2011, 2012, 2013, 2014, 2015]
        self.selectedCategory = ko.observable();
        self.selectedMode = ko.observable();
        self.selectedYear = ko.observable(2015);

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
                console.log('selectedYear');
                self.drawBars();
            }
        }

        var SB = new StackedBarOfStates('#statebar');

        var previousCategory = '';

        self.dropdownChanged = function() {
            console.log('dropdown changed');
            self.drawBars();
        }


        var subscription = self.selectedMode.subscribe(function() {
            console.log('selectedMode');
            self.drawBars();
            subscription.dispose();
        });


        self.drawBars = function() {
            var yearData = StateData[self.selectedYear()]
            var category = self.selectedCategory();

            var data = {
                'rows': [],
                'columns': []
            };

            for (var i = 0; i < states.length; i++) {
                var state = states[i];
                // console.log(yearData[state][category]);

                var obj_to_push = $.extend({}, yearData[state][category]);
                var population_total = obj_to_push.total;

                obj_to_push.total = obj_to_push['Worked at home'];
                delete obj_to_push['Worked at home'];

                for (key in obj_to_push) {
                    if (self.selectedMode() == 'per capita') {
                        obj_to_push[key] = (obj_to_push[key] / population_total);
                    } else {
                        // obj_to_push[key] = obj_to_push[key];
                    }
                }

                data.rows.push($.extend(obj_to_push, {state: state}));
            }

            for (var i = 0; i < PARTITION[category].variables.length; i++) {
                var variable = PARTITION[category].variables[i];
                data.columns.push(variable.normalized_label);
            }


            var formatMap = {
                'per capita': 'percent',
                'total': 'numeral'
            }

            data.format = formatMap[self.selectedMode()];

            // console.log(data);


            if (category == previousCategory && category != '') {
                // StackedBarOfStates.update("#statebar", data);
                console.log('updating');
                SB.update(data);
            } else {
                previousCategory = category;
                // StackedBarOfStates.draw("#statebar", data);
                console.log('drawing');
                SB.draw(data);
            }
        }
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
