var Backbone = require('backbone');


module.exports = Backbone.Model.extend({
	defaults: {
		author : ' ',
		title : ' ',
		url : ' '
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/rollaway',
	idAttribute: '_id'

})