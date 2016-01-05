'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var BlogModel = require('./models/BlogModel.js');
var BlogsCollection = require('./collections/BlogsCollection.js');
var _ = require('backbone/node_modules/underscore');

$(document).ready(function(){
	var form = $('#blog-up');
	var aut = $('#author');
	var title = $('#title');
	var url = $('#url');
	var create = $('#create');
	var edit = $('#edit');
	var posts = $('#posts');
	var row = _.template($('#blog-row').html());
	var blogs = new BlogsCollection();

	function onFormSubmit(e) {
		e.preventDefault();
		blogs.add({
			aut : $aut.val(),
			title : $title.val(),
			url : $url.val()
});
	}
	function onBlogAdded(newBlog) {
		newBlog.save();
		$posts.append(newHtml);
	}
	$form.on('submit', onFormSubmit);
	blogs.on('add', onBlogsAdded);

	blogs.fetch();

});