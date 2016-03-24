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
    var screenWidth = $(window).width();

    if (screenWidth < 410) {
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
$('.mobile-toggle').click(function() {
    if ($('.toc').hasClass('open-nav')) {
        $('.toc').removeClass('open-nav');
    } else {
        $('.toc').addClass('open-nav');
    }
});

$('.link').click(function() {
    if ($('.toc').hasClass('open-nav')) {
        // $('.navigation').removeClass('open-nav');
        $('.toc').removeClass('open-nav');
    }
});

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

        if (page === 'projects') {
            renderProjectsWithMasonry();
        }
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

    $('.about').on('click', function(event) {
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


// out of commission
function renderProjectsWithMasonry() {
    var $projects = $('.main .projects').imagesLoaded( function() {
        // init Masonry after all images have loaded
        $projects.masonry({
            itemSelector: '.projects .project',
            columnWidth: '.project-size',
            gutter: '.gutter-size',
            percentPosition: true,
        });

        // iterate across projects...
        $('.projects .project').each(function() {

            // position blackout behind image
            var $blackout = $(this).find('.blackout');
            var height = $(this).find('img').height();
            var width = $(this).find('img').width();
            $blackout.css({
                height: height,
                width: width,
                top: -5 - height,
            });

            // activate listener
            $blackout.bind('click', function(event) {
                event.preventDefault();
                // TODO: go to project
            });
        });
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
