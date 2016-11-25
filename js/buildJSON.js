$(document).ready(function() {
    var stateNames = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
    var categories = ['age', 'sex of workers', 'class of worker', 'industry', 'occupation']

    $('#state').html('');

    $.each(stateNames, function(index, state) {
        var option = $('<option>');
        option.val(state).text(state);
        $('#state').append(option);
    })


    $('#submit').click(function(e) {

        var year = parseInt($('#year').val());
        console.log(year);

        var startingState = $('select#state option:selected').val();
        var states = stateNames.slice().splice(stateNames.indexOf(startingState), stateNames.length)


        // var request = {
        //     // "zip": "94133",
        //     "year": year,
        //     "state": 'CA',
        //     "level":"state",
        //     // "sublevel":"true",
        //     "variables": ['B01001_001E', 'B08006_001E', 'B08101_001E'],
        //     apikey: 'fa683cbda30267875fcabadbe17b52422daeadac'
        //     // "container": "state"
        // };
        //
        // CitySdk.request(request).then(function(data) {
        //     console.log(data.features[0].properties)
        //     // console.log(data)
        //
        // });



        getStateData(states, function(data) {
            console.log(JSON.stringify(data));
            console.log(data);
        })

        function getStateData(states, cb) {
            getStateDataRec(states, {}, cb)
        }

        function getStateDataRec(states, acc_data, cb) {
            if (states.length == 0) {
                cb(acc_data);
            } else {
                var state = states[0];

                requestCategories(categories, state, function(data) {
                    acc_data[state] = data;
                    console.log(JSON.stringify(acc_data));
                    getStateDataRec(states.slice(1, states.length), acc_data, cb);
                });
            }
        }



        //
        // requestCategories(categories, startingState, function(data) {
        //     console.log(data);
        // });


        function requestCategories(categories, state, cb) {
            requestCategoriesRec(categories, state, {}, cb);
        }

        function requestCategoriesRec(categories, state, acc_data, cb) {
            if (categories.length == 0) {
                cb(acc_data);
            } else {
                var category = categories[0]
                var variables = []
                var length = PARTITION[category].variables.length
                for (var i = 0; i < length; i++) {
                    variables.push(PARTITION[category].variables[i].code);
                }
                var request = {
                    "state": state,
                    "level":"state",
                    "variables": variables,
                    apikey: 'fa683cbda30267875fcabadbe17b52422daeadac'
                };

                CitySdk.request(request).then(function(data) {
                    console.log('state: ' + state + '  category: ' + category);
                    var data_to_use = {};
                    var properties = data.features[0].properties;
                    for (var i = 0; i < variables.length; i++) {
                        data_to_use[variables[i]] = properties[variables[i]];
                    }
                    acc_data[category] = data_to_use;
                    requestCategoriesRec(categories.slice(1, categories.length), state, acc_data, cb);
                });
            }

        }

        return false;

    })



})
