define(function(require) {
    'use strict'
    var Backbone = require('backbone');
    return Backbone.Model.extend({
        urlRoot: 'http://localhost:3000/posts',
        
        defaults: {
            // 'id': '',
            'userId': '11',
            'title': '',
            'body': ''
        }

    });

});
