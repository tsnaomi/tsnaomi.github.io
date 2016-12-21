(function() {
    var TRANSITION_SPEED = 100;

    $(document).ready(updateMobileHeader);
    $(window).resize(updateMobileHeader);

    // populate the main div on page load
    renderAbout();

    // set up the various listeners
    goToLink('cv');
    goToLink('resume');
    goToLink('about');
    goToAbout();
    toggleNavigation();

    function goToLink(page) {
        var $link = $('.link.' + page);

        $link.on('click', function(event) {
            event.preventDefault();
            transitionPage($link);
            $('.main > .' + page).fadeIn(TRANSITION_SPEED);
        });

        if (page === 'about') {
            renderAbout();
        }
    }

    function goToAbout() {
        $('.name, .mobile-header').on('click', function(event) {
            event.preventDefault();
            transitionPage();
            renderAbout();
        });
    }

    function transitionPage($link) {
        // remove existing highlights
        $('.link').removeClass('highlight');

        // highlight $link if it is not undefined
        if ($link) {
            $link.addClass('highlight');
        }

        // hide everything in the right pane
        $('.main > div').css('display', 'none');

        // scroll to the top of the page
        window.scrollTo(0, 0);
    }

    function renderAbout() {
        $('.main > .about').fadeIn(TRANSITION_SPEED);

        // unmask
        var xyz = ['hello', 'tsnaomi', 'net', '.', '@'];
        var abc = xyz[0] + xyz[4] + xyz[1] + xyz[3] + xyz[2];

        // scramble and unscramble!
        $('.email').shuffleLetters({
            text: abc,
            fps: 30,
        });
    }

    function toggleNavigation() {
        $('.mobile-toggle, .link').on('click', function(event) {
            event.preventDefault();
            $('.toc').toggleClass('open-nav');
        });
    }

    function updateMobileHeader() {
        var screenWidth = $(window).innerWidth();
        var $mobileHeader = $('.mobile-header');

        if (screenWidth < 350) {
            $mobileHeader.text('Naomi T. Shapiro');
        } else {
            $mobileHeader.text('Naomi Tachikawa Shapiro');
        }
    }
})();
