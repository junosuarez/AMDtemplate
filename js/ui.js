/*globals define */

define(['jquery', 'tpl!templates/index.tpl'], function ($, indexTemplate) {
	'use strict';

	var init = function (title) {

		// The tpl plugin loads a text template and returns a compiled
		// underscore template function.
		// Here we pass in some data to bind to the template.
		var html = indexTemplate({
			title: title,
			message: 'Hello there, welcome to your new app template.'
		});

		$(html).appendTo('body');

	};

	return {
		init: init
	};

});