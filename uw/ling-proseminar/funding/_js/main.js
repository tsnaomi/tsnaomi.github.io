function nameSorter(a, b) {
  var aa = $(a).text();
  var bb = $(b).text();
  return aa.localeCompare(bb)
}

(function() {

  MOBILE_WIDTH = 629;

  // invoke Bootstrap's ScrollSpy
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navvy',
    offset: 120
  });

  adjustScroll()

  function adjustScroll() {
    // adjust scroll to ALL sections
    $(window).on('load hashchange', function(event) {
      event.preventDefault();

      var anchor = window.location.hash;
      var section = anchor.slice(1);
      var location = $(anchor).position().top;
      var screenWidth = $(window).innerWidth();

      // main sections (listed in navbar)
      var sections = [];

      $('.sub-container').each( function(i, e) {
        sections.push($(e).attr('id'));
      })

      if (sections.includes(section)) {
        $('html, body').animate( {scrollTop: location}, 0, 'swing');
      
      } else {

        // sub-sections (not listed in navbar)
        var subsections = [];

        $('.subsection').each( function(i, e) {
          subsections.push($(e).attr('id'));
        })

        if (subsections.includes(section)) {
          var pad = 310;

          if ($(window).innerWidth() <= MOBILE_WIDTH) {
            pad += 200;
          }

          $('html, body').animate( {scrollTop: location + pad}, 0, 'swing');     
        }
      }
    });
  }

})();
