Aloha.require(['ui/surface','util/range-context', 'aloha/jquery'], function(Surface, RangeContext, $) {
  
  // Do preseve the range when clicking outside the editable.
  // You should do this for all menu areas.
  Surface.trackRange($('.my-aloha-toolbar'));

  // We want to activate and deactivate our components depending on an image is selected.
  Aloha.bind('aloha-image-selected', function (jEvent, aEvent){
    $('#aloha-component-image-source').removeAttr('disabled');
    $('#aloha-component-image-align-group>button').removeClass('disabled');
  });
  Aloha.bind('aloha-image-unselected', function (jEvent, aEvent){
    $('#aloha-component-image-source').attr('disabled','');
    $('#aloha-component-image-align-group>button').addClass('disabled');
  });

});