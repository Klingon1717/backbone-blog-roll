var Backbone = require('backbone');
var BlogModel = require('../models/BlogModel.js');

module.exports = Backbone.Collection.extend({
	model : BlogModel,
	url: 'http://tiyfe.herokuapp.com/collections/rollaway',


});

