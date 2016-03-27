var TRANSITION_SPEED = 800;

// enable absolute horizontal scroll
$(window).scroll(function(){
    var width = $(window).width();
    var $toc = $('.toc');
    var left;
//  && width <= 721
    if (420 < width) {
        left = 0;
        $toc.css('left', left - $(window).scrollLeft());
    }

    // if ($('body').width() >= 1000) {
    //     console.log($toc.css('top'));
    //     $toc.css('top', 0 + $(window).scrollTop());
    // }
});

function update_header() {
    var $nameHeader = $('.name-header');
    var screenWidth = $(window).innerWidth();

    if (screenWidth < 350) {
        $nameHeader.text('Naomi T. Shapiro');
    } else {
        $nameHeader.text('Naomi Tachikawa Shapiro');
    }

}

$(document).ready(update_header);
$(window).resize(update_header);

// mobile navigation
$('.mobile-toggle, .link').click(function() {
    $('.toc').toggleClass('open-nav');
});

// populate the main div on page load
renderAbout();

// set up the various listeners
goToLink('cv', TRANSITION_SPEED);
goToLink('resume', TRANSITION_SPEED);
goToAbout();


function goToLink(page, speed) {
    var $link = $('.link.' + page);
    $link.on('click', function(event) {
        event.preventDefault();
        highlight($link);
        hideMainDivs();
        $('.main > .' + page).fadeIn(speed);
        window.scrollTo(0, 0);
    });
}


function goToAbout() {
    $('.name').on('click', function(event) {
        event.preventDefault();
        highlight();
        hideMainDivs();
        renderAbout();
        window.scrollTo(0, 0);
    });

    $('.name-header').on('click', function(event) {
        event.preventDefault();
        highlight();
        hideMainDivs();
        renderAbout();
        window.scrollTo(0, 0);
    });
}


function renderAbout() {
    $('.main > .about').fadeIn(TRANSITION_SPEED);

    // unmask email address
    var xyz = ['tsnaomi', 'stanford', 'edu', '.', '@'];
    var abc = xyz[0] + xyz[4] + xyz[1] + xyz[3] + xyz[2];

    // scramble and unscramble!
    $('.email').shuffleLetters({
        text: abc,
        fps: 30,
    });
}


function hideMainDivs() {
    // everything in the right pane
    $('.main > div').css('display', 'none');
}


function highlight($link) {
    // // wipe empty hash from URL
    // history.pushState('', document.title, window.location.pathname);

    var highlight = 'highlight';

    // remove existing highlights
    $('.link').removeClass(highlight);

    // highlight $link if it is not undefined
    if ($link) {
        $link.addClass(highlight);
    }
}
