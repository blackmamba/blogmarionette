define(function(require) {
    'use strict'
    var Backbone = require('backbone');
    return Backbone.Model.extend({
        urlRoot: 'http://jsonplaceholder.typicode.com/posts',
        
        defaults: {
            'id': -1,
            'userId': 1,
            'title': '',
            'body': ''
        }

    });

});
