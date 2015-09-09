'use strict';

var Post = require('../model/Post');

var findAllPosts = function findAllPosts(handler) {

    Post.find({}, function (err, posts) {
        if (err) {
            handler(true, null);
        } else {
            handler(false, posts);
        }
    });
};

module.exports = { findAllPosts: findAllPosts };