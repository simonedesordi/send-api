var express = require('express');
var Post = require('../logic/Post');

var router = express.Router(); // get an instance of the express Router

router.get('/', function (req, res) {

    Post.findAllPosts(writeOn(res));

});

var write = function (res, err, data) {
    if (err) {
        res.send(500, 'There was an error - tough luck');
    } else {
        res.json(data);
    }
};

var writeOn = (where) => {
    return (err, data) => {
        write(where, err, data);
    };
};


/**
 * Module exports.
 * @public
 */
module.exports = router;