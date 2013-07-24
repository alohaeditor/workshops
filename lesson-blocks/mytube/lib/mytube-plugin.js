define([
	'aloha/jquery',
	'aloha/core',
	'aloha/plugin',
	'aloha/contenthandlermanager'
], function (
	$,
	Aloha,
	Plugin,
	ContentHandlerManager
) {
	'use strict';

	// foo http://www.youtube.com/watch?v=UUV4YKbiVxQ bar

	var YOUTUBE_LINK = /(?:(?:https?\:\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch\?v=)(\w+)/g;

	var YouTubeHandler = ContentHandlerManager.createHandler({
		handleContent: function (content) {
			return content.replace(
				YOUTUBE_LINK,
				'<div data-aloha-block-type="YouTubeBlock" data-ytcode="$1">$1</div>'
			);
		}
	});

	ContentHandlerManager.register('youtube', YouTubeHandler);

	Aloha.settings.contentHandler.insertHtml = ['youtube'];

	return Plugin.create('mytube', {
		settings: {},
		init: function () {}
	});
});
