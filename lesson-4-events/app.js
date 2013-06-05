(function (window, undefined) {

    Aloha.require(['aloha/copypaste'], function (CopyPaste) {

        Aloha.ready(function () {
            Aloha.bind('aloha-smart-content-changed', function ($event, params) {
                if (params.triggerType !== 'keypress') {
                    return false;
                }

                var range = Aloha.getSelection().getRangeAt(0),
                    contents = range.startContainer.data,
                    html;

                if (!contents) {
                    return false;
                }

                html = markdown.toHTML(contents);

                if ($(html).is('p')) {
                    html = $(html).html();
                }

                CopyPaste.selectAllOf(range.startContainer);
                Aloha.execCommand('insertHTML', false, html);
                //CopyPaste.setSelectionAt(html);
                //CopyPaste.selectAllOf($(html));
                //window.console.log(range);
                //var $html = $(html);
                //rangeObject = new GENTICS.Utils.RangeObject();
                //rangeObject.endContainer = rangeObject.startContainer = $html;
                //rangeObject.startOffset = rangeObject.endOffset = $html.get(0).innerHTML.length;
                //rangeObject.select();
            });
            
            
            Aloha.bind('aloha-selection-changed', function ($event, params) {
                var md = toMarkdown(Aloha.activeEditable.getContents());
                
                $('#markdown').val(md);
            });
            
            // Make all HTML elements with a CSS class "edit" editable via Aloha Editor
            //*
            $('.edit').aloha();
            //*/
            /* on snap editable
            window.document.addEventListener("snap", function () {
                $('.edit').aloha();
                window.console.log('aloha! snap to edit :-)');
            });
            //*/
        });

    });

    // sync markdown textarea to aloha editor html
    function TextareaEditor(input, preview) {
      this.update = function () {
        preview.innerHTML = markdown.toHTML(input.value);
      };
      input.editor = this;
      this.update();
    }
    new TextareaEditor(document.getElementById("markdown"), document.getElementById("html"));
    
})(window);