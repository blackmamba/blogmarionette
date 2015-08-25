/*global Backbone*/
define(function(require) {
    'use strict'
    var Marionette = require('marionette'),
    Controller = require('controller'),
    Router = require('router');


    window.App = new Marionette.Application({
        regions: {
            // header: '#header',
            content: '#content'
        }
    });
    
    //add initializer
    App.addInitializer(function() {
        App.controller = new Controller({
            App: App
        });
        App.router = new Router({
            controller: App.controller,
            App: App
        });

        Backbone.history.start();

    });

    return App;

});
