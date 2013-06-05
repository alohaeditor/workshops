define([
	'jquery',
	'aloha/core',
	'aloha/plugin'
], function (
	$,
	Aloha,
	Plugin
) {
	'use strict';

	var plugin;

	/**
	 * MyTube Plugin
	 */
	plugin = Plugin.create('mytube', {
		settings: {},
		init: function () {
			alert('MyTube Plugin is good to go!');
		}
	});

	return plugin;
});