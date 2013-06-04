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
], function(Aloha, Plugin, Ui,	Button, i18n, i18nCore, jQuery) {
	'use strict';

	

	/**
	 * Once we added our markup, we want to update the sidebar.
	 */
	function updateSidebar (sidebar, range) {
		if (sidebar.isOpen) {
				sidebar.checkActivePanels(range);
		}
		sidebar.lastRange = range;
	}


	/**
	 * A Function to update our selection after we modified it
	 */
	function updateSelection(rangeObject, temporaryMarker) {
			var $newObj = $(rangeObject.commonAncestorContainer).find("." + temporaryMarker);
			$newObj.removeClass(temporaryMarker);
			selectAllOf($newObj[0]);
	}


	/**
	 * Set the selection to the given range
	 *
	 * @param {object} range An object that must container the following
	 *                       essential range properties: ~ startContainer
	 *                                                   ~ endContainer
	 *                                                   ~ startOffset
	 *                                                   ~ endOffset
	 */
	function setSelectionAt(range) {
		var newRange = Aloha.createRange();
		var selection = Aloha.getSelection();
		newRange.setStart(range.startContainer, range.startOffset);
		newRange.setEnd(range.endContainer, range.endOffset);
		selection.removeAllRanges();
		selection.addRange(newRange);
	}

	/**
	 * Creates a selection that encompasses the contents of the given element.
	 *
	 * @param {HTMLElement} element Editable DOM element.
	 */
	function selectAllOf(element) {
		setSelectionAt({
			startContainer: element,
			endContainer: element,
			startOffset: 0,
			endOffset: element.childNodes ? element.childNodes.length
		                                  : element.length
		});
		$(element).focus();
	}

	/**
	 * Initialize listeners
	 * Have a look at http://www.aloha-editor.org/guides/events.html
	 */
	function bindListeners() {
		Aloha.bind("aloha-editable-activated", function (jEvent, aEvent) {
			console.log("Editable activated", jEvent, aEvent, Aloha.activeEditable.obj);
		});

		Aloha.bind("aloha-smart-content-changed", function (jEvent, jData) {
			console.log("Smart content changed");
		});

		Aloha.bind('aloha-selection-changed', function (event, range) {
			console.log("Selection changed", event, range);
		});
	}


	var buttons = {};
	/**
	 * Create a button.
	 * Have a look at http://www.aloha-editor.org/guides/ui.html
	 */
	function createButtons() {
		
		buttons.toggletrainingButton = Ui.adopt("toggleTraining", Button, {
			tooltip : i18n.t('button.training.tooltip'),
			icon: 'aloha-icon aloha-icon-training',
			scope: 'Aloha.continuoustext',
			click : function () { buttonClick(); }
		});
	}

	/**
	 * Click handler
	 */
	function buttonClick() {
		console.log('click');
		var markup = jQuery('<div class="training">'),
			rangeObject = Aloha.Selection.rangeObject;

		if ( rangeObject.isCollapsed() ) {
					GENTICS.Utils.Dom.extendToWord( rangeObject );
		}

		//Add a unique class to make selection handling easyer
		var temporaryMarker = "aloha-selection-update" + Math.random().toString(16).substr(2);
		markup.addClass(temporaryMarker);
		// add the markup
		GENTICS.Utils.Dom.addMarkup( rangeObject, markup );
		// now we update our selection
		updateSelection(rangeObject, temporaryMarker);
	}

	/**
	 * We want our plugin to only be visible in configured editables
	 */
	function perEditableConfiguration(plugin) {
		
		Aloha.bind("aloha-editable-activated", function (jEvent, aEvent) {
			var config = plugin.getEditableConfig( Aloha.activeEditable.obj );

			if (config && config.enabled === true) {
				buttons.toggletrainingButton.show(true);
			} else {
				buttons.toggletrainingButton.show(false);
			}
		});
	}

	/**
	 * We want to use the sidebar too
	 * Have a look at http://www.aloha-editor.org/guides/sidebar.html
	 */
	function prepareSidebar(sidebar) {
		sidebar.addPanel({
			id: 'aloha-training-panel',
			title: i18n.t( 'sidebar.training.title' ),
			expanded: true,
			activeOn: 'div.training',
			content: '<div id="aloha-training-panel-content">\
						You div contains: <span id="aloha-training-panel-effective-content"></span>\
					  </div>',
			onInit: function () {
				console.log("Init sidebar called");
			},
			onActivate: function(effective) {
				this.content.find('#aloha-training-panel-effective-content').html($(effective).html());
			}
		});
		sidebar.show();
	}



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
			console.log("training init");
			createButtons();
			bindListeners();
			perEditableConfiguration(this);
			prepareSidebar(Aloha.Sidebar.right);
		}

	});

	
});