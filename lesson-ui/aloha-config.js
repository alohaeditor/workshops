( function ( window, undefined ) {
  var Aloha = window.Aloha || ( window.Aloha = {} );
  
  Aloha.settings = {
    requireConfig: {
      paths: {
        'ui/ui-plugin': '../plugins/common/ui-a-la-carte/lib/ui-plugin',
        'ui/component': '../plugins/common/ui-a-la-carte/lib/component',
        'ui/button'   : '../plugins/common/ui-a-la-carte/lib/button',
        'ui/toggleButton'   : '../plugins/common/ui-a-la-carte/lib/toggleButton',
        'ui/port-helper-attribute-field': '../plugins/common/ui-a-la-carte/lib/port-helper-attribute-field',
        'ui/port-helper-multi-split': '../plugins/common/ui-a-la-carte/lib/port-helper-multi-split',
        'ui/original-component': '../plugins/common/ui/lib/component',
        'ui/original-port-helper-attribute-field': '../plugins/common/ui/lib/port-helper-attribute-field',
        'ui/original-port-helper-multi-split': '../plugins/common/ui/lib/port-helper-multi-split',
        'ui/original-button': '../plugins/common/ui/lib/button',
        'ui/original-toggleButton': '../plugins/common/ui/lib/toggleButton'
      }
    },
    sidebar: {
      disabled: true
    },
    errorhandling: false,
    locale: 'en',
    plugins: {
      listenforcer: {
        editables: [ '.aloha-enforce-lists' ]
      },
      image: {
        config:{
          'fixedAspectRatio' : false,
          'maxWidth'         : 600,
          'minWidth'         : 20,
          'maxHeight'        : 600,
          'minHeight'        : 20,
          'globalselector'   : '.global',
          'ui': {
            'oneTab': true
          }
        },
        'fixedAspectRatio' : false,
        'maxWidth'         : 600,
        'minWidth'         : 20,
        'maxHeight'        : 600,
        'minHeight'        : 20,
        'globalselector'   : '.global',
        'ui': {
          'oneTab' : true,
          'align'  : false,
          'margin' : false
        }
      },
      formatlesspaste :{
        formatlessPasteOption : true,
        strippedElements : [
        "em",
        "strong",
        "small",
        "s",
        "cite",
        "q",
        "dfn",
        "abbr",
        "time",
        "code",
        "var",
        "samp",
        "kbd",
        "sub",
        "sup",
        "i",
        "b",
        "u",
        "mark",
        "ruby",
        "rt",
        "rp",
        "bdi",
        "bdo",
        "ins",
        "del"]
      },
      table: {
        tableConfig:  [ {name: 'table' }, {name: 'table-bordered' } ],
        rowConfig:    [ {name: 'success'   }, {name: 'error'   }, {name: 'warning'   }, {name: 'info'} ],
      }
    }
  };
} )( window );
