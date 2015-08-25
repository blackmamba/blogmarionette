define(function(require) {
    'use strict'

    var Marionette = require('marionette'),
        itemView = require('views/postsitemview');
    return Marionette.CollectionView.extend({
        // tag: 'div',
        className: 'items',

        childView: itemView
    });

});
