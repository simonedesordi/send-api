'use strict';

var VERSION = "1.0.0";

var express = require('express');
var app = express();
var configurator = require('./config/ApiConfig');

configurator.config(app, VERSION);

configurator.addRoutes(app, VERSION);

var port = configurator.port();

// START THE SERVER
app.listen(port);

console.log('Starting API v ' + VERSION + ' server on port ' + port);