define(function(require) {

    'use strict';
    var Marionette = require('marionette'),
        PostsCollectionView = require('views/PostsCollectionView'),
        Posts = require('collections/posts'),
        collection = new Posts(),
        Controller = Marionette.Controller.extend({
            currentView: '',
            initialize: function(options) {
                //initialize 
                //all the regional views here
                //attach events
                collection.fetch();
            },

            home: function() {

                App.content.show(new PostsCollectionView({
                    collection: collection
                }));

            },

            detail: function(id) {
                // var model = collection.find({id:id});

            },
            create: function() {


            }

            /**
             * :module/:view -> ex. #/Blog/
             */
            // showModule: function(view, id, options) {
            //     var View = '';
            //     view = (view || 'Posts');
            //     switch (view) {
            //         case 'Posts':
            //             View = 'PostsView';
            //             break;

            //         case 'Blah':
            //             break;
            //     }

            //     // var curView = new View(id);
            //     // App.content.show(curView);

            // },

        });

    return Controller;
});
