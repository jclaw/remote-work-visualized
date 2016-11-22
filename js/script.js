$(document).ready(function() {
    //
    // var sdk = new CitySDK();
    //         var censusModule = sdk.modules.census;
    //
    //         censusModule.enable("fa683cbda30267875fcabadbe17b52422daeadac");
    //
    // var request = {
    //     state : "CA",
    //     level: "state",
    //
    //     variables: [
    //         "income",
    //         "C24010_008E"
    //     ]
    // }
    //
    // censusModule.APIRequest(request, function(data) {
    //     console.log(data);
    // });

    $('#submit').click(function(e) {

        var year = $('#year').val();
        console.log(year);
        // let request = {
        //     "variables": ["B19013_001E", "B08006_017E"],
        //     "state": "CA",
        //     // "year": year,
        //     "level": "state",
        //     "container": "state",
        //     "apikey": "fa683cbda30267875fcabadbe17b52422daeadac"
        // };

        // var map = {
        //     "Worked at home": "B08006_017E",
        //     "Male:":
        // }

        var request = {
            // "zip": "94133",

            "state":"CA",
            "level":"state",
            // "sublevel":"true",
            "variables": [
                "B08006_017E", "B08101_049E", "B08119_055E", "B08124_043E", "B08126_091E", "B08128_061E", "B08137_019E", "B08301_021E", "B08528_061E"
            ],
            apikey: 'fa683cbda30267875fcabadbe17b52422daeadac'
            // "container": "state"
        };

        // let request = {
        //     "zip": "21701",
        //     "variables": ["income", "population"],
        //     "level": "county",
        //     "sublevel": true,
        //     "state": "MD",
        //     "container": "state",
        //     "apikey": "fa683cbda30267875fcabadbe17b52422daeadac"
        //
        // };

        // let data;

        //
        CitySdk.request(request).then((response) => doSomethingWithData(response));

        function doSomethingWithData(data) {
            console.log(data.features[0].properties)
            console.log(data.totals)
        }

        //
        // $.ajax('http://citysdk.commerce.gov', {
        //     beforeSend: function (xhr) {
        //         xhr.setRequestHeader ("Authorization", "Basic " + btoa('fa683cbda30267875fcabadbe17b52422daeadac' + ":"));
        //     },
        //     data: JSON.stringify(request),
        //     // data: JSON.stringify({"state": "CA", "variables": ["B08006_017E", "B08101_049E", "B08119_055E", "B08124_043E", "B08126_091E", "B08128_061E", "B08137_019E", "B08301_021E", "B08528_061E"]}),
        //     type: 'POST',
        //     processData: false,
        //     contentType: 'application/json'
        //
        // }).done(function(data) {
        //     console.log(data);
        //     return false;
        // })

        return false;

    })



})
