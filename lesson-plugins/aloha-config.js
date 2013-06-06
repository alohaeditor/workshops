(function (window, undefined) {
	'use strict';

	var Aloha = window.Aloha || (window.Aloha = {});

	Aloha.settings = {
		bundles: {
			'mybundle':'../../../lesson-plugins/plugins'
		},
		plugins: {
			training: {
				config: {
					enabled : false
				},
		        editables: {
		            '#editable-article': {
		            	enabled : true
		            }
		        }
			}
		},
		toolbar:{
			tabs:[{
				label : 'Training', //label: 'tab.format.label',
			 	components : ['toggleTraining']
			 }]
		}
	};
})(window);
