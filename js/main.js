(function() {
    var TRANSITION_SPEED = 300;

    $(document).ready(updateMobileHeader);
    $(window).resize(updateMobileHeader);

    // populate the main div
    populateMain();

    // set up the various listeners
    goToLink('cv');
    goToLink('resume');
    goToLink('about');
    detectHashChange();
    toggleNavigation();

    function populateMain() {
        // populate the main div depending on the hash
        var page = window.location.hash.slice(1);
        transitionPage(page);

        if (!page) {
            renderDeets();
        }
    }

    function goToLink(page) {
        var $link = $('.link.' + page);
        
        if (page === 'about') {
            $link = $link.add('.name, .mobile-header');
        }

        // create a listener for the navigation link
        $link.on('click', function(event) {
            event.preventDefault();
            transitionPage(page);

            // set the location hash
            if (page === 'about') {
                window.location.hash = '#';
                renderDeets();
            } else {
                window.location.hash = page;
            }
        });
    }

    function transitionPage(page) {
        page = page || 'about';
        var $link = $('.link.' + page);

        // remove existing highlights
        $('.link').removeClass('highlight');

        // highlight $link if it is not undefined
        if ($link) {
            $link.addClass('highlight');
        }

        // hide everything in the right pane
        $('.main > div').css('display', 'none');

        // populate the right pane
        $('.main > .' + page).fadeIn(TRANSITION_SPEED);

        // scroll to the top of the page
        window.scrollTo(0, 0);
    }

    function renderDeets() {
        // unmask
        var xyz = ['tsn', 'uw', 'a', 'edu', '.', '@', 'omi'];
        var abc = xyz[0] + xyz[2] + xyz[6] + xyz[5] + xyz[1] + xyz[4] + xyz[3];

        // scramble and unscramble!
        $('.something').shuffleLetters({
            text: abc,
            fps: 30,
        });
    }

    function detectHashChange() {
        // detect hash changes (e.g., with Back and Forward)
        $(window).on('hashchange', function() {
            populateMain();
        });
    }

    function toggleNavigation() {
        // toggle the navigation...
        $('.mobile-toggle, .link').on('click', function(event) {
            event.preventDefault();
            $('.toc').toggleClass('open-nav');
        });
    }

    function updateMobileHeader() {
        var screenWidth = $(window).innerWidth();
        var $mobileHeader = $('.mobile-header');

        // set name in mobile header based on screen width
        if (screenWidth < 350) {
            $mobileHeader.text('Naomi T. Shapiro');
        } else {
            $mobileHeader.text('Naomi Tachikawa Shapiro');
        }
    }
})();
