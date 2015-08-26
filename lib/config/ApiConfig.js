/**
Config API routing, URL etc...
*/
'use strict';

var config = function config(app, version) {

	console.log("config! " + version);

	var bodyParser = require('body-parser');

	// configure app to use bodyParser()
	// this will let us get the data from a POST
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	// set all the routes
	var router = require('../routing/routing-' + version);
	app.use('/api/v' + version, router);
};

/**
Return web server port
*/
var port = function port() {
	var portGlobal = process.env.PORT;
	console.log("portGlobal = " + portGlobal);

	var port = portGlobal /*|| portParameter*/ || 9090;
	console.log("port = " + port);

	return port;
};

module.exports = {
	config: config, port: port
};