//http://www.aloha-editor.org/guides/writing_plugins.html
//http://www.supnig.com/blog/aloha-editor-and-jqueryui
define([
	'aloha/core',
	'aloha/plugin',
	'ui/ui',
	'ui/button',
	'i18n!training/nls/i18n',
	'i18n!aloha/nls/i18n',
	'jquery',
	'css!training/css/training.css'
], function (Aloha, Plugin, Ui,	Button, i18n, i18nCore, jQuery) {
	'use strict';

	/**
	 * We create and return the plugin.
	 */
    return Plugin.create('training', {
		
		/**
		 * Configure the available languages
		 */
		languages: ['en', 'de'],

		/**
		 * Initialize the plugin
		 */
		init: function () {
			console.log('training init');
		}
	});
});
