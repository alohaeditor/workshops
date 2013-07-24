//http://www.aloha-editor.org/guides/writing_plugins.html
//http://www.supnig.com/blog/aloha-editor-and-jqueryui
define([
	'aloha/core',
	'aloha/plugin',
	'aloha/jquery',
	'aloha/sidebar',
	'ui/ui',
	'ui/button',
	'util/dom',
	'css!training/css/training.css'
], function (
	Aloha,
	Plugin,
	$,
	Sidebars,
	Ui,
	Button,
	Dom
) {
	'use strict';

	var buttons = {};

	function buttonClick() {
		var range = Aloha.Selection.rangeObject;
		range.isCollapsed() && Dom.extendToWord(range);
		Dom.addMarkup(range, $('<span class="training">'));
		range.select();
	}

	function createButton() {
		buttons.toggleTrainingButton= Ui.adopt('toggleTraining', Button, {
			tooltip: 'Testing',
			icon: 'aloha-icon aloha-icon-traing',
			scope: 'Aloha.continuoustext',
			click: buttonClick
		});
	}

	function prepareSidebar(sidebar) {
		sidebar.addPanel({
			id: 'aloha-training-panel',
			title: 'Training',
			expanded: true,
			activeOn: 'span.training',
			content: '<div class="training">Training</div>'
		});
	}

    return Plugin.create('training', {
		languages: ['en', 'de'],
		init: function () {
			createButton() || prepareSidebar(Sidebars.right);
		}
	});
});
