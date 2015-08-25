define(function(require) {

    'use strict';
    var Marionette = require('marionette'),
    Controller = Marionette.Controller.extend({

        initialize: function(options) {
            //initialize 
            //all the regional views here
            //attach events
        },

        home: function() {

            console.log('home view called');
        }

    });

    return Controller;
});
