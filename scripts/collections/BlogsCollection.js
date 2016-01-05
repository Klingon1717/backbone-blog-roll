var Backbone = require('backbone');
var BlogModel = require('../models/BlogModel.js');

var Blogs = Backbone.Collection.extend({
	model : BlogModel

});

