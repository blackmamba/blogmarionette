/**
 * To be implemented
 * @param  {[type]} require) {	'use       strict'	var Marionette [description]
 * @return {[type]}          [description]
 */
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
