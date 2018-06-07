const request = require('request');

var userCmd = (argv, callback) => {
    var encodeCmd = encodeURIComponent(argv);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeCmd}&key=yourkey`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("unable to connect to googele servers")
        }
        if (body.status === "ZERO_RESULTS") {
            callback(`Address ${argv} is invalid`)
        } else if (body.status === "OK") {
            callback(undefined, {
                address: body.results["0"].formatted_address,
                latitude: body.results["0"].geometry.location.lat,
                longitude: body.results["0"].geometry.location.lng
            })

        } else {
            Console.log(`NOT WORKING: ${error}`)
        }
    });
}

module.exports.userCmd = userCmd;