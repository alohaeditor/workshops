(function (Wikidocs) {
	'use strict';

	var APP_ID = 'barcamp';
	var APP_SECRET = 'barcamp';
	var channels = [
		{
			name: 'barcamp/header',
			id: 'editable-header'
		},
		{
			name: 'barcamp/article',
			id: 'editable-article'
		}
	];

	function sign(channels, appId, appSecret) {
		var allow = {};
		var i;
		for (i = 0; i < channels.length; i++) {
			allow[channels[i].name] = {
				sub: true,
				pub: true
			};
		}
		var request = signRequest({allow: allow}, appId, appSecret);
		Wikidocs.signedRequest(request);
	}

	function bind(channels) {
		var i;
		for (i = 0; i < channels.length; i++) {
			Aloha.jQuery('#' + channels[i].id).aloha();
			var editable = Aloha.getEditableById(channels[i].id);
			var channel = Wikidocs.channel(channels[i].name);
			channel.bindEditable(editable);
		}
	}

	Aloha.require(['aloha', 'aloha/jquery'], function (Aloha, $) {
		Aloha.ready(function () {
			if (Wikidocs) {
				sign(channels, APP_ID, APP_SECRET);
				bind(channels);
			} else {
				var i;
				for (i = 0; i < channels.length; i++) {
					$('#' + channels[i].id).aloha();
				}
			}
		});
	});
}(window.Wikidocs));
