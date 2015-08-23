"use strict";

var restify = require('restify');

var portParameter = process.argv[2];
console.log("portParameter = " + portParameter);

var portGlobal = process.env.PORT;
console.log("portGlobal = " + portGlobal);

var port = portParameter || portGlobal;
console.log("port = " + port);

function respond(req, res, next) {
	res.send('Hello ' + req.params.name);
	next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(port, function () {
	console.log('%s listening at %s', server.name, server.url);
});