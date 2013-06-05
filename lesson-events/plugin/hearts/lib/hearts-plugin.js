define(['aloha/plugin'], function (Plugin) {
    'use strict';

    function  createReplacer(replaceHtml, correction) {
        correction.offset = correction.offset || 0;
        return function (match, reference, offset, string) {
            // @todo fix for different length of special stuff
            correction.offset -= match.length - 1;
            if (correction.offset === 0) {
                correction.offset = 2;
            }
            return replaceHtml;
        }
    }

	function onSmartContentChanged($event, params) {
		if (params.triggerType != 'keypress') {
			return false;
		}

		var range = Aloha.getSelection().getRangeAt(0),
			contents = range.startContainer.data,
			correction = {},
			newRange;

		if (!contents) {
			return false;
		}

		if (params.keyCode === 8) {
			// backspace
			// @todo make it work with an array of special stuff to replace
			var found = (contents.lastIndexOf('\u2764') || contents.lastIndexOf('\u21D2'));
			if (found == (contents.length - 1)) {
				range.startContainer.data = contents.substr(0, contents.length - 5) + contents.substr(-5).replace(/\u2764/, createReplacer('<\u200B3', correction));
				//contents = range.startContainer.data;
				//range.startContainer.data = contents.substr(0, contents.length - 5) + contents.substr(-5).replace(/\u21D2/, createReplacer('--\u200B>', correction));
			}
		} else {
			// <3 to ❤
			range.startContainer.data = contents.substr(0, contents.length - 5) + contents.substr(-5).replace(/<3/g, createReplacer('\u2764', correction));
			//contents = range.startContainer.data;
			//range.startContainer.data = contents.substr(0, contents.length - 5) + contents.substr(-5).replace(/-->/g, createReplacer('\u21D2', correction));
		}

		if (correction.offset) {
			newRange = new GENTICS.Utils.RangeObject(); // TODO: require the module
			newRange.startContainer = range.startContainer;
			newRange.startOffset = range.startOffset + correction.offset;
			newRange.endContainer = range.endContainer;
			newRange.endOffset = range.endOffset + correction.offset;
			newRange.select();
		}
	}

    return Plugin.create('hearts', {
		init: function () {
			Aloha.bind('aloha-smart-content-changed', onSmartContentChanged);
		}
	});
});


/*
        linkify: function(str){
            // order matters
            var re = [
                "\\b((?:https?|ftp)://[^\\s\"'<>]+)\\b",
                "\\b(www\\.[^\\s\"'<>]+)\\b",
                "\\b(\\w[\\w.+-]*@[\\w.-]+\\.[a-z]{2,6})\\b", 
                "#([a-z0-9]+)"];
            re = new RegExp(re.join('|'), "gi");

            return str.replace(re, function(match, url, www, mail, twitler){
                if(url)
                    return "<a href=\"" + url + "\">" + url + "</a>";
                if(www)
                    return "<a href=\"http://" + www + "\">" + www + "</a>";
                if(mail)
                    return "<a href=\"mailto:" + mail + "\">" + mail + "</a>";
                if(twitler)
                    return "<a href=\"foo?bar=" + twitler + "\">#" + twitler + "</a>";

                // shouldnt get here, but just in case
                return match;
            });
        }
*/
