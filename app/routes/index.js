'use strict';

var path = process.cwd();

module.exports = function (app) {

	app.route('/')
		.get (function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	// app.route('/login')
	// 	.get(function (req, res) {
	// 		res.sendFile(path + '/public/login.html');
	// 	});

};
