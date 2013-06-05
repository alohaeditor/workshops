Aloha.require(['aloha', 'jquery', 'util/range-context'], function (Aloha, $, RangeContext) {
	'use strict';
	$('.editable').aloha();
	window.RangeContext = RangeContext;
});
