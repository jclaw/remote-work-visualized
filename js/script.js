$(document).ready(function() {
    var categories = ['age', 'sex of workers', 'class of worker', 'industry', 'occupation']

    cleanStateData(StateData)

    function tooltipHtml(n, d) {	/* function to create html content string in tooltip div. */
        return "<h4>"+n+"</h4><table>"+
            "<tr><td>Low</td><td>"+(d.low)+"</td></tr>"+
            "<tr><td>Average</td><td>"+(d.avg)+"</td></tr>"+
            "<tr><td>High</td><td>"+(d.high)+"</td></tr>"+
            "</table>";
    }

    $('#variables').html('');

    categories.forEach(function(category) {
        var optgroup = $('<optgroup>');
        optgroup.attr('label', category);
        partition[category].variables.forEach(function(item) {
            var option = $('<option>');
            var text = item.normalized_label;
            option.val(text).text(text);
            optgroup.append(option);
        })
        $('#variables').append(optgroup);
    })

    $('#variables').change(function() {
        var selected = $(':selected', this);
        var category = selected.closest('optgroup').attr('label');
        var variable = selected.val();
        applyData(category, variable);
    })


    // applyData('','');

    function applyData(category, variable) {
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
                console.log(state, ': ', category, ': ', variable);
                sampleData[state] = StateData[state][category]
                var datapoint = StateData[state][category][variable]
                sampleData[state].color = d3.interpolate("#ffffcc", "#800026")(StateData[state][category][variable]/100);
            });

        /* draw states on id #statesvg */
        uStates.draw("#statesvg", StateData, tooltipHtml);

        d3.select(self.frameElement).style("height", "600px");
    }

    function cleanStateData(data) {
        for (var state in data) {
            for (var category in data[state]) {
                delete data[state][category]['NAME']
                for (key in data[state][category]) {
                    if (key.includes('_001E')) {
                        var val = data[state][category][key]
                        data[state][category]['total'] = val
                        delete data[state][category][key]
                    }
                }
            }
        }
    }
})
