// enable absolute horizontal scroll
$(window).scroll(function(){
    var width = $(window).width();
    var $toc = $('.toc');
    var left;

    if (420 < width && width <= 721) {
        left = 0;
        $toc.css('left', left - $(window).scrollLeft());
    }
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

// sticky header
// $(window).scroll(function() {
//     // if ($(window).scrollTop() > 100 && $(window).width() < 420) {
//     if ($(window).scrollTop() > 100) {
//         $('.toc').addClass('sticky');
//     } else {
//         $('.toc').removeClass('sticky');
//     }
// });

// mobile navigation
$('.mobile-toggle, .link').click(function() {
    $('.toc').toggleClass('open-nav');
    // if ($('.toc').hasClass('open-nav')) {
    //     $('.toc').removeClass('open-nav');
    // } else {
    //     $('.toc').addClass('open-nav');
    // }
});

// $('.link').click(function() {
//     if ($('.toc').hasClass('open-nav')) {
//         // $('.navigation').removeClass('open-nav');
//         $('.toc').removeClass('open-nav');
//     }
// });

// navigation scroll
// $('nav a').click(function(event) {
//     var id = $(this).attr("href");
//     var offset = 70;
//     var target = $(id).offset().top - offset;
//     $('html, body').animate({
//         scrollTop: target
//     }, 500);
//     event.preventDefault();
// });

// populate the main div on page load
renderAbout();

// set up the various listeners
goToLink('cv', 'slow');
goToLink('resume', 'slow');
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
    $('.main > .about').fadeIn('fast');

    // unmask email address
    var xyz = ['hello', 'tsnaomi', 'net', '.', '@'];
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
