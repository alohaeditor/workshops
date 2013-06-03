( function ( window, undefined ) {
	var Aloha = window.Aloha || ( window.Aloha = {} );

	Aloha.settings = {
		bundles: {
			'mybundle':'/aloha-editor-workshop/plugin-lesson/plugins'
		},
		plugins: {
			training: {
				config: {
					enabled : false
				},
		        editables: {
		            '#content': {
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
} )( window );
