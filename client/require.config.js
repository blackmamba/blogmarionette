var require = {
    baseUrl: 'client/js',
    paths: {
        jquery: "../../bower_components/jquery/dist/jquery",
        underscore: "../../bower_components/underscore/underscore-min",
        backbone: "../../bower_components/backbone/backbone-min",
        marionette: "../../bower_components/marionette/lib/backbone.marionette",
        bootstrap: "../../bower_components/bootstrap/dist/js/bootstrap.min",
        requirejs: "../../bower_components/requirejs/require"
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            exports: 'Backbone',
            deps: ['underscore', 'jquery']
        },
        'bootstrap': {
            exports: 'Bootstrap',
            deps: ['jquery']
        }
    }
};
