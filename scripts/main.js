'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var BlogModel = require('./models/BlogModel.js');
var BlogsCollection = require('./collections/BlogsCollection.js');
var _ = require('backbone/node_modules/underscore');

$(document).ready(function(){
	var bCollection = new BlogsCollection();
	bCollection.on('add' , function(b){
		var $row = getModelRow(b);
		$('blogs').append($row);

	});

});