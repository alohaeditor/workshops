Aloha.ready( function() {
  
  // Seriously read the code
  var currentLink;
  var prefixBtnStyle = ("aloha-component-btn-style-").length
  var btnStyles = ['primary', 'info', 'success', 'warning', 'danger', 'inverse', 'link'];

  $('#aloha-component-btn-style>ul>li>a').each( function() {
    var style = this.id.substr(prefixBtnStyle);
    $(this).click( function() {
      setBtnStyle(style);
    });
  });

  function setBtnStyle(style) {
    if (style) {
      currentLink.addClass('btn btn-' + style);
    }
    for (var i = 0; i < btnStyles.length; i++) {
      if ( btnStyles[i] == style ) {
        continue;
      }
      currentLink.removeClass( 'btn-' + btnStyles[i]);
    }
    $('#aloha-component-btn-style .dropdown-text').text(style);
  }

  Aloha.bind( 'aloha-link-selected', function( jEvent, aEvent ) {
    currentLink = $(aEvent.obj);
    $('#aloha-component-btn-style>a').removeClass('disabled');

    $('#aloha-component-btn-style>ul>li>a').each( function() {
      var style = this.id.substr(prefixBtnStyle);
      if ( currentLink.hasClass('btn-' + style) ) {
        $('#aloha-component-btn-style .dropdown-text').text(style);
      }
    });
  });

  Aloha.bind( 'aloha-link-unselected', function( jEvent ) {
    currentLink = null;
    $('#aloha-component-btn-style .dropdown-text').text('Button style');
    $('#aloha-component-btn-style>a').addClass('disabled');
  });

});