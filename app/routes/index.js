'use strict';

var path = process.cwd();

module.exports = function (app) {

	app.route('/')
		.get (function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/api/whoami')
		.get(function (req, res) {
			var obj = {};
			obj.ipaddress = req.headers["x-forwarded-for"];
			obj.language = req.headers["accept-language"].split(",")[0];
			obj.software = req.headers["user-agent"].split(") ")[0].split(" (")[1];
			
			res.end(JSON.stringify(obj));
		});

};
