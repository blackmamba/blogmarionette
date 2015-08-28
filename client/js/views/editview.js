define(function(require) {
	'use strict'

	var Marionette = require('marionette'),
	template = require('tpl!templates/editview.tpl');

    return Marionette.ItemView.extend({
        template: template,
        tag: 'div',
        className: 'detail',
        ui: {
        	id: '#id',
            title: '#title',
            body: '#body'
        },
        events: {
        	'click button.save': 'savePost',
        	'click button.cancel': 'cancel'
        },

        cancel: function(e) {
        	console.log('edit clieked');
            App.route('/Blogs/' + this.ui.val(), {trigger: true});
        },

        savePost: function(e) {
        	console.log('delete clicked');
        	var model = App.posts.get(+this.ui.id.val());
        	if (model) {
                model.set('title', this.ui.title.val());
                model.set('body', this.ui.body.val());
        		model.save({
        			success: function(){
        				alert('success');
        			}, 
        			error: function() {
        				alert('failure');
        			}
        		});

        	}
        }

    });

});
