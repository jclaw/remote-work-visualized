(function() {
    $(function() {
        cleanStateData(StateData);
        console.log(StateData);

        var categories = ['age', 'sex of workers', 'class of worker', 'industry', 'occupation'];
        var states =
            ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID',
             'IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO',
             'MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA',
             'PR','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
        var variableData = [];
        categories.forEach(function(category) {
            variableData.push({category: category, variables: PARTITION[category].variables});
        })

        ko.bindingHandlers.option = {
            update: function(element, valueAccessor) {
                var value = ko.utils.unwrapObservable(valueAccessor());
                ko.selectExtensions.writeValue(element, value);
            }
        };

        var visualizations = [
            // { vm: new MapVM(StateData, categories, variableData, states),
            //   dom: $('#map')[0] },
            { vm: new StackedBarVM(StateData, categories, variableData, states),
              dom: $('#stackedBar')[0] }
        ]

        for (var i = 0; i < visualizations.length; i++) {
            ko.applyBindings(visualizations[i].vm, visualizations[i].dom);
        }

        // var $container = $("#map");
        // var viewModel = new MapVM(StateData, categories, variableData);


        // ko.applyBindings(viewModel, $container[0]);

        function cleanStateData(data) {
            for (var state in data) {
                for (var category in data[state]) {
                    data[state][category] = data[state][category].map(function (x) { return parseInt(x) })
                }
            }
        }
    })


    function MapVM(StateData, categories, variableData, states) {
        var self = this;
        self.categories = categories;
        self.variableData = variableData;
        self.selectedVariable = ko.observable();

        self.selectedVariable.subscribe(function(obj) {
            applyData(obj.category, obj.code);
        })

        function tooltipHtml(n, d) {	/* function to create html content string in tooltip div. */
            // console.log(d);
            var str = '<h4>' + n + '</h4><table>';
            for (var i = 0; i < d.length; i++) {
                str += '<tr><td>' + d[i].code + '</td><td>' + d[i].value + '</td/></tr>'
            }
            str += '</table';
            return str;
        }

        function applyData(category, code) {
            var sampleData ={};
            states.forEach(function(state) {
                console.log(state, ': ', category, ': ', code);
                sampleData[state] = {};
                sampleData[state].variables = []
                var total = StateData[state][category]['total'];

                // for (key in StateData[state][category]) {
                //     if (key != 'total') {
                //         var value = StateData[state][category][key]
                //         sampleData[state].variables.push({'code': key, 'value': (value * 100 / total).toFixed(0) + '%' })
                //     }
                // }
                // // sort and remove total
                // sampleData[state].variables.sort().shift();
                var arr = [];
                for (key in StateData[state][category]) {
                    arr.push(key);
                }

                var key = arr.shift();
                var value = StateData[state][category][key];
                sampleData[state].variables.push({'code': key, 'value': (value * 100 / total).toFixed(0) + '%' });

                var datapoint = StateData[state][category][code];
                console.log(datapoint, total);
                sampleData[state].color = d3.interpolate("#ffffcc", "#800026")(datapoint / (total / 4));
            });

            uStates.draw("#statemap", sampleData, tooltipHtml);

            d3.select(self.frameElement).style("height", "600px");
        }

    }

    function StackedBarVM(StateData, categories, variableData, states) {
        var self = this;
        self.categories = categories;
        self.modes = ['per capita', 'total'];
        self.variableData = variableData;
        self.selectedCategory = ko.observable();
        self.selectedMode = ko.observable();

        var SB = new StackedBarOfStates('#statebar');

        var previousCategory = '';

        //
        // self.selectedCategory.subscribe(function() {
        //     self.drawBars();
        // });
        // self.selectedMode.subscribe(function() {
        //     self.drawBars();
        // });



        self.drawBars = function() {
            var category = self.selectedCategory();
            console.log(category);


            var data = {
                'rows': [],
                'columns': []
            };

            for (var i = 0; i < states.length; i++) {
                var state = states[i];
                // console.log(StateData[state][category]);

                var obj_to_push = $.extend({}, StateData[state][category]);
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

            console.log(data);

            var formatMap = {
                'per capita': 'percent',
                'total': 'numeral'
            }

            data.format = formatMap[self.selectedMode()]

            if (category == previousCategory && category != '') {
                console.log('updating');
                // StackedBarOfStates.update("#statebar", data);
                SB.update(data);
            } else {
                previousCategory = category;
                // StackedBarOfStates.draw("#statebar", data);
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
