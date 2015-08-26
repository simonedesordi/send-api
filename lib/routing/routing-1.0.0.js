'use strict';

var Post = require('../model/Post');
var express = require('express');

var router = express.Router(); // get an instance of the express Router

router.get('/', function (req, res) {

	// TODO: How do we get a list of all model objects using a mongoose model?
	Post.find({}, function (err, posts) {
		if (err) {
			res.send(500, 'There was an error - tough luck');
		} else {
			res.json(posts);
		}
	});
});

/**
 * Module exports.
 * @public
 */
module.exports = router;