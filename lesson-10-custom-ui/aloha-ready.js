Aloha.ready( function() {

  var $ = Aloha.jQuery;
  $('.aloha-editable').aloha();

  Aloha.require(['ui/surface'],function(Surface) {
    
    Surface.trackRange($('#superbutton'));

  });
    
  var currentLink;
  var prefixBtnSize = ("aloha-component-btn-size-").length
  var prefixBtnStyle = ("aloha-component-btn-style-").length
  var btnSizes = ['mini', 'small', 'default', 'large'];
  var btnStyles = ['primary', 'info', 'success', 'warning', 'danger', 'inverse', 'link'];

  /* attach click events */
  $('#aloha-component-btn-size>ul>li>a').each( function() {
    var size = this.id.substr(prefixBtnSize);
    $(this).click( function() {
      setBtnSize(size);
    });
  });
  $('#aloha-component-btn-style>ul>li>a').each( function() {
    var style = this.id.substr(prefixBtnStyle);
    $(this).click( function() {
      setBtnStyle(style);
    });
  });

  function setBtnSize(size) {
    if (size) {
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

  /* update dropdown description */
  Aloha.bind( 'aloha-link-selected', function( jEvent, aEvent ) {
    currentLink = $(aEvent.obj);
    $('#aloha-component-btn-size>a').removeClass('disabled');
    $('#aloha-component-btn-style>a').removeClass('disabled');

    $('#aloha-component-btn-size>ul>li>a').each( function() {      
      var size = this.id.substr(prefixBtnSize);
      if ( currentLink.hasClass('btn-' + size) ) {
        $('#aloha-component-btn-size .dropdown-text').text(size);
      }
    });
    $('#aloha-component-btn-style>ul>li>a').each( function() {
      var style = this.id.substr(prefixBtnStyle);
      if ( currentLink.hasClass('btn-' + style) ) {
        $('#aloha-component-btn-style .dropdown-text').text(style);
      }
    });
  });

  Aloha.bind( 'aloha-link-unselected', function( jEvent ) {
    currentLink = null;
    $('#aloha-component-btn-size .dropdown-text').text('Button size');
    $('#aloha-component-btn-size>a').addClass('disabled');
    $('#aloha-component-btn-style .dropdown-text').text('Button style');
    $('#aloha-component-btn-style>a').addClass('disabled');
  });

});