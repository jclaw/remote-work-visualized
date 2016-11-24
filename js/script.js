(function() {
    $(function() {
        cleanStateData(StateData);
        console.log(StateData);

        var categories = ['age', 'sex of workers', 'class of worker', 'industry', 'occupation'];
        var variableData = [];
        categories.forEach(function(category) {
            variableData.push({category: category, variables: partition[category].variables});
        })

        var $container = $("#viz");
        var viewModel = new VizViewModel(StateData, categories, variableData);
        ko.applyBindings(viewModel, $container[0]);

        function cleanStateData(data) {
            for (var state in data) {
                for (var category in data[state]) {
                    delete data[state][category]['NAME']
                    for (key in data[state][category]) {
                        data[state][category][key] = parseInt(data[state][category][key])
                        if (key.includes('_001E')) {
                            data[state][category]['total'] = data[state][category][key]
                            delete data[state][category][key]
                        }
                        // else if (c_to_v(key).normalized_label == 'Worked at home') {
                        //     data[state][category]['wtotal'] = data[state][category][key]
                        //     delete data[state][category][key]
                        // }
                    }
                }
            }
        }
    })


    function VizViewModel(StateData, categories, variableData) {
        this.categories = categories;
        this.variableData = variableData;
        this.selectedCategory = ko.observable();

        this.selectedCategory.subscribe(function(data) {
            console.log(data);
        })

        function tooltipHtml(n, d) {	/* function to create html content string in tooltip div. */
            console.log(d);
            var str = '<h4>' + n + '</h4><table>';
            for (var i = 0; i < d.length; i++) {
                str += '<tr><td>' + d[i].code + '</td><td>' + d[i].value + '</td/></tr>'
            }
            str += '</table';
            return str;
        }

        // $('#variables').html('');
        //
        // categories.forEach(function(category) {
        //     var optgroup = $('<optgroup>');
        //     optgroup.attr('label', category);
        //     partition[category].variables.forEach(function(item) {
        //         var option = $('<option>');
        //         option.val(item.code).text(item.normalized_label);
        //         optgroup.append(option);
        //     })
        //     $('#variables').append(optgroup);
        // })

        $('#variables').change(function() {
            var selected = $(':selected', this);
            var category = selected.closest('optgroup').attr('label');
            var code = selected.val();
            applyData(category, code);
        })


        // applyData('','');

        function applyData(category, code) {
            var sampleData ={};	/* Sample random data. */
            ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL',
             'GA','HI','ID','IL','IN','IA','KS','KY','LA','ME',
             'MD','MA','MI','MN','MS','MO','MT','NE','NV','NH',
             'NJ','NM','NY','NC','ND','OH','OK','OR','PA','PR',
             'RI','SC','SD','TN','TX','UT','VT','VA','WA','WV',
             'WI','WY']
            //  ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
            //  "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
            //  "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
            //  "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
            //  "WI", "MO", "AR", "OK", "KS", "LS", "VA"]
                .forEach(function(state) {
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

            /* draw states on id #statesvg */
            uStates.draw("#statesvg", sampleData, tooltipHtml);

            d3.select(self.frameElement).style("height", "600px");
        }

    }
})();
