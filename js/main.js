(function() {

  MOBILE_WIDTH = 629

  // setup --------------------------------------------------------------------

  $(document).ready(updateMobileHeader);
  $(window).resize(updateMobileHeader);

  $(document).ready(abyss);
  $(window).resize(abyss);

  // populate info
  populate()

  // set up the various listeners
  anchor()
  navigate('about')
  navigate('papers')
  navigate('teaching')
  navigate('cv')
  toggleNavigation()
  updateMobileHeader()

  // functions ----------------------------------------------------------------

  function populate() {
    // populate author names (to avoid typos)
      // Last, F. M.
    $('.nts').html("<span class='bold'>Shapiro</span>, <span class='bold'>N</span>. <span class='bold'>T</span>");
    $('.aa').html('Anttila, A.');
    $('.dsh').html('Hippe, D. S.');
    $('.nfr').html('Ferjan Rami&#769;rez, N.');
    $('.sst').html('Steinert-Threlkeld, S.');
      // First M. Last
    $('.full.nts').html("<span class='bold'>Naomi Tachikawa Shapiro</span>");
    $('.full.aa').html('Arto Anttila');
    $('.full.dsh').html('Daniel S. Hippe');
    $('.full.nfr').html('Naja Ferjan Rami&#769;rez');
    $('.full.sst').html('Shane Steinert-Threlkeld');

    // render contact info
    decode();
  }

  function decode() {
    // unmask
    var xyz = ['t', 'w', 'a', 'ed', '.', '@', 'omi', 'u', 'sn'];
    var abc = xyz[0] + xyz[8] + xyz[2] + xyz[6] + xyz[5] + xyz[7] + xyz[1] + xyz[4] + xyz[3] + xyz[7];

    // scramble and unscramble!
    $('.something').shuffleLetters( {text: abc, fps: 30} );
  }

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
