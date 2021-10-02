(function() {

  MOBILE_WIDTH = 629

  // setup --------------------------------------------------------------------

  $(document).ready(updateMobileHeader);
  $(window).resize(updateMobileHeader);

  $(document).ready(abyss);
  $(window).resize(abyss);

  // set up the various listeners
  anchor()
  navigate('about')
  navigate('papers')
  navigate('teaching')
  navigate('cv')
  toggleNavigation()
  updateMobileHeader()

  // functions ----------------------------------------------------------------

  function anchor() {
    // adjust anchor tags on page loag
    $(window).on('load', function() {
      if (window.location.hash) { 
        transition(window.location.hash);
      }
    });
  }

  function navigate(sect) {
    // enable navigation links
    var $nav = $('.' + sect);

    $nav.on('click', function() {
      transition('#' + sect);             // scroll to div
      if (sect == 'about') { decode() }   // render about deets
    });
  }

  function transition(sect) {
    // scroll to section
    var screenWidth = $(window).innerWidth();

    if (screenWidth > MOBILE_WIDTH) {
      var pad = $('.left-pane').position().top;
    } else {
      var pad = 60;
    }

    var div = $(sect).position().top

    if (sect != 'about') {
      div -= 7
    }

    $('html, body').animate( {scrollTop: div - pad}, 0, 'swing' );
  }

  function abyss() {
    // pad the abyss
    var screenWidth = $(window).innerWidth();
    var screenHeight = $(window).height();
    var $abyss = $('.abyss');
    var cv = $('#cv').height();

    if (screenWidth > MOBILE_WIDTH) {
      var pad = $('.left-pane').position().top;
    } else {
      var pad = $('.left-pane').height();
    }

    $abyss.css('height', screenHeight - (pad + cv) * 2);
  }

  // mobile -------------------------------------------------------------------

  function toggleNavigation() {
    // toggle the navigation
    $('.mobile-toggle').on('click', function(event) {
      event.preventDefault();
      $('.toc').toggleClass('open-nav');
    });

    $('.nav').on('click', function(event) {
      var screenWidth = $(window).innerWidth();

      if (screenWidth <= MOBILE_WIDTH) {
        event.preventDefault();
        $('.toc').toggleClass('open-nav');
      }
    });
  }

  function updateMobileHeader() {
    // set name in mobile header based on screen width
    var $screenWidth = $(window).innerWidth();
    var $mobileHeader = $('.mobile-header > span');

    if ($screenWidth < 350) {
      $mobileHeader.text('Naomi T. Shapiro');
    } else {
      $mobileHeader.text('Naomi Tachikawa Shapiro');
    }
  }

})();
