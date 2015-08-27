define(function(require) {
	'use strict'

	var Marionette = require('marionette'),
	template = require('tpl!templates/detailview.tpl');

    return Marionette.ItemView.extend({
        template: template,
        tag: 'div',
        className: 'detail',
        ui: {
        	id: '#id'
        },
        events: {
        	'click button.edit': 'editPost',
        	'click button.trash': 'deletePost'
        },

        editPost: function(e) {
        	console.log('edit clieked');
        },

        deletePost: function(e) {
        	console.log('delete clicked');
        	var model = App.posts.get(+this.ui.id.val());
        	if (model) {
        		model.destroy({
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
