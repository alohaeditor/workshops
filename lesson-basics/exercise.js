Aloha.require([
	'aloha',
	'aloha/jquery',
	'PubSub'
], function (
	Aloha,
	$,
	PubSub
) {
	'use strict';
	$('.editable').aloha();

	function x() {
		var selection = Aloha.getSelection();
		if (!selection.getRangeCount()) {
			return;
		}
		var range = selection.getRangeAt(0);
		debugger;
	}

	PubSub.sub('aloha.editable.created', function (message) {
		var editable = message.data;
		var $editable = editable.obj;
		$editable.bind('keydown.aloha.format', 'alt+shift+q', x);
	});
});
