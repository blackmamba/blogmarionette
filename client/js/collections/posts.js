define(function(require) {
    'use strict'
    var post = require('models/post'),
    Backbone = require('backbone');
    return Backbone.Collection.extend({
        model: post,
        url: 'http://jsonplaceholder.typicode.com/posts'

    });

})
