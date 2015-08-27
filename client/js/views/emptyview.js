define(function(require) {
	'use strict'

	var Marionette = require('marionette'),
	template = require('tpl!templates/emptyitemview.tpl');
    
    return Marionette.ItemView.extend({
        template: template,
        tag: 'div',
        className: 'item',
    });

});
