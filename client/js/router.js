
/***
 * AppRouter.js
 *
 */
define(function(require) {

'use strict'
    var Marionette = require('marionette'),
    Router = Marionette.AppRouter.extend({
        appRoutes: {
            '': 'home'
            
            // 'create':'create'
            // ':module/filter?(*params)': 'showFilteredView',

            // // ex. assets/create, assets/edit/123
            // // ex. assets/create?type=image
            // ':module(/:view)(/:extra)': 'showModuleView'
        },

        home: function() {

            console.log('home rout hit');
        }
    });

    return Router;
});
