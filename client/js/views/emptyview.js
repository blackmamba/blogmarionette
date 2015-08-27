define(function(require) {
	'use strict'

	var Marionette = require('marionette'),
	template = require('tpl!templates/detailview.tpl');
    
    return Marionette.ItemView.extend({
        template: template,
        tag: 'div',
        className: 'detail',
    });

});
