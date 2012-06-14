/*globals require */

require.config({
	paths: {
		"jquery": "../../lib/jquery-1.7.2.min",
		"lodash": "../../lib/lodash-0.3.1.min",
		"text": "../../lib/text",
		"tpl": "../../lib/tpl",
		"templates": "../templates"
	}
});

require(['ui'], function (ui) {
	'use strict';

	ui.init('AMDtemplate');

});