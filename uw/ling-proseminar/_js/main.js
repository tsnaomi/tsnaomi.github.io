(function() {

  MOBILE_WIDTH = 629;

  // invoke Bootstrap's ScrollSpy
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navvy',
    offset: 120
  });

  adjustScroll();
  jumpToSchedule();

  function adjustScroll() {
    // adjust scroll to sections not included in the navbar
    $(window).on('load hashchange', function(event) {
      var anchor = window.location.hash;
      var subsection = anchor.slice(1);
      var subsections = [];

      $('.subsection').each( function(i, e) {
        subsections.push($(e).attr('id'));
      })

      if (subsections.includes(subsection)) {
        event.preventDefault();

        var pad = 242;
        var screenWidth = $(window).innerWidth();

        if (screenWidth <= MOBILE_WIDTH) {
          pad += 100;
        }

        var location = $(anchor).position().top + pad;

        $('html, body').animate( {scrollTop: location}, 0, 'swing');
      } 
    });
  }

  function jumpToSchedule() {
    $( '#navbarDropdown' ).dblclick(function() {
      // double click to go straight to the current schedule
      // (skipping the dropdown)
      window.location.hash = '#spring'
    });
  }


})();