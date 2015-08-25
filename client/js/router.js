
/***
 * AppRouter.js
 *
 */
define(function(require) {

'use strict'
    var Marionette = require('marionette'),
    Router = Marionette.AppRouter.extend({
        appRoutes: {

            '':'home',
            'Blogs/:id':'detail',
            'create':'create',
            
            // ':module(/:view)(/:extra)' : 'showModule'
            // '': 'showModule',
            // '/:view/:id' : 'showModule'
        }
    });

    return Router;
});
