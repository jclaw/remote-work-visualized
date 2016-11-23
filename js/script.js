$(document).ready(function() {
    var categories = ['age', 'sex of workers', 'class of worker', 'industry', 'occupation']

    cleanStateData(StateData);
    console.log(StateData);

    function tooltipHtml(n, d) {	/* function to create html content string in tooltip div. */
        console.log(d);
        var str = '<h4>' + n + '</h4><table>';
        for (var i = 0; i < d.length; i++) {
            str += '<tr><td>' + d[i].code + '</td><td>' + d[i].value + '</td/></tr>'
        }
        str += '</table';
        return str;
    }

    $('#variables').html('');

    categories.forEach(function(category) {
        var optgroup = $('<optgroup>');
        optgroup.attr('label', category);
        partition[category].variables.forEach(function(item) {
            var option = $('<option>');
            option.val(item.code).text(item.normalized_label);
            optgroup.append(option);
        })
        $('#variables').append(optgroup);
    })

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
                for (key in StateData[state][category]) {
                    sampleData[state].variables.push({'code': key, 'value': StateData[state][category][key]})
                }

                var datapoint = StateData[state][category][code];
                var wtotal = StateData[state][category]['wtotal'];
                console.log(datapoint, wtotal);
                sampleData[state].color = d3.interpolate("#ffffcc", "#800026")(datapoint / wtotal);
            });

        /* draw states on id #statesvg */
        uStates.draw("#statesvg", sampleData, tooltipHtml);

        d3.select(self.frameElement).style("height", "600px");
    }

    function cleanStateData(data) {
        for (var state in data) {
            for (var category in data[state]) {
                delete data[state][category]['NAME']
                for (key in data[state][category]) {
                    data[state][category][key] = parseInt(data[state][category][key])
                    if (key.includes('_001E')) {
                        data[state][category]['total'] = data[state][category][key]
                        delete data[state][category][key]
                    } else if (c_to_v(key).normalized_label == 'Worked at home') {
                        data[state][category]['wtotal'] = data[state][category][key]
                        delete data[state][category][key]
                    }
                }
            }
        }
    }
})
