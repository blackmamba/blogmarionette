define(function(require) {
    'use strict'

    var Marionette = require('marionette'),
        Post = require('models/post'),
        template = require('tpl!templates/createview.tpl');

    return Marionette.ItemView.extend({
        template: template,
        tag: 'div',
        className: 'create',
        ui: {
            // form: 'form'
            title: '#title',
            body: '#body'
        },
        events: {
            'submit form': 'handleSubmit'
        },

        handleSubmit: function(e) {
            e.preventDefault();
            e.stopPropagation();
            // console.log(JSON.stringify(this.ui.form.serializeArray()));
            var model = new Post({
                title: this.ui.title.val(),
                body: this.ui.body.val()
            });
            model.save({
                success: function(model, response, options) {
                    alert('post successful');
                    console.log(respnose);
                },
                error: function(model, response, options) {
                    alert('post fail');
                    return;
                    App.content.show(new ErrorView({
                        msg: 'unable to load the data for this blog..please try again later'
                    }));
                }
            });

        }



    });

});
