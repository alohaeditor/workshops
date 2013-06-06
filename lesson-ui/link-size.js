Aloha.require(['ui/surface','util/range-context','aloha/jquery'],function(Surface, RangeContext, $) {

  var currentLink;
  var prefixBtnSize = ("aloha-component-btn-size-").length;
  var btnSizes = ['mini', 'small', 'default', 'large'];

  // attach click event to our button
  $('#aloha-component-btn-size>ul>li>a').each( function() {
    var size = this.id.substr(prefixBtnSize);
    $(this).click( function() {
      setBtnSize(size);
    });
  });

  // if a size is set remove all others and set the new one
  function setBtnSize(size) {
    if (size == 'nobutton') {
      currentLink.removeClass( 'btn');
    } else if (size) {
      currentLink.addClass('btn btn-' + size);
    }
    for (var i = 0; i < btnSizes.length; i++) {
      if ( btnSizes[i] == size ) {
        continue;
      }
      currentLink.removeClass( 'btn-' + btnSizes[i]);
    }
    $('#aloha-component-btn-size .dropdown-text').text(size);
  }

  // do magic when a link is selected 
  Aloha.bind( 'aloha-link-selected', function( jEvent, aEvent ) {

    // remember the selected link obj
    currentLink = $(aEvent.obj);

    // enable the link size drop down button
    $('#aloha-component-btn-size>a').removeClass('disabled');

    // update dropdown description
    $('#aloha-component-btn-size>ul>li>a').each(function() {     
      var size = this.id.substr(prefixBtnSize);
      if ( currentLink.hasClass('btn-' + size) ) {
        $('#aloha-component-btn-size .dropdown-text').text(size);
      }
    });
  });

  // undo the magic from before
  Aloha.bind( 'aloha-link-unselected', function( jEvent ) {
    currentLink = null;
    $('#aloha-component-btn-size .dropdown-text').text('Button size');
    $('#aloha-component-btn-size>a').addClass('disabled');
  });

});