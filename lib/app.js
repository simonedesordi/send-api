"use strict";

var restify = require('restify');
console.log("process.argv[2] = " + process.argv[2]);
console.log("process.argv[3] = " + process.argv[3]);
console.log("process.argv[4] = " + process.argv[4]);
console.log("process.env.PORT = " + process.env.PORT);
var port = process.env.PORT || 9090;
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