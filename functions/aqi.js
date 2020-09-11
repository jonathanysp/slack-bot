const fetch = require('node-fetch');

exports.handler = function(event, context, callback) {
	fetch('https://www.purpleair.com/json?show=62233')
  		.then(response => response.json())
  		.then(data => JSON.parse(data.results[0].Stats).v1)
		.then(aqi =>
			callback(null, {
				statusCode: 200,
				body: "AQI is: " + aqi
			}));
}
