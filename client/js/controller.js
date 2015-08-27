define(function(require) {

    'use strict';
    var Marionette = require('marionette'),
        PostsCollectionView = require('views/postscollectionview'),
        DetailView = require('views/detailview'),
        CreateView = require('views/createview'),


        Posts = require('collections/posts'),
        Post = require('models/post'),

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
                if (!id) return;
                var model = collection.get(+id);
                if (!model) {
                    //fetch model
                    model = new Post({
                        id: id
                    });
                    model.fetch({
                        success: function(model, response, options) {
                            App.content.show(new DetailView({
                                model: model
                            }));
                        },
                        error: function(model, response, options) {
                            App.content.show(new ErrorView({
                                msg: 'unable to load the data for this blog..please try again later'
                            }));
                        }
                    })
                } else {
                    App.content.show(new DetailView({
                        model: model
                    }));
                }


            },
            create: function() {
                App.content.show(new CreateView());
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
