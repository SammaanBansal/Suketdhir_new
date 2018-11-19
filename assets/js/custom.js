/**
* JS for homepage.
*/

$(window).ready(function() {
    $(window).offset(0);
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).width() > 1024) {
            windowOffset = $(window).scrollTop();
            if (windowOffset > 1250) {
                $('#slide4').css('display', 'block');
                $('.SD-header-home').css('display', 'none');
            }
            if (windowOffset < 1250) {
                $('#slide4').css('display', 'none');
                $('#slide1').css('display', 'block');
                $('.SD-header-home').css('display', 'block');
            }
            if (windowOffset > 1300) {
                $('#slide4').css('transform', "translate3d(" + $(this).scrollTop() / 6 + "px,0,0)");
            }
            if (windowOffset < 1400) {
                $('#slide4').css('transform', "translate3d(-" + $(this).scrollTop() / 100 * 2 + "px,0,0)");
            }
            if (windowOffset < 1530) {
                $('#slide3').css('display', 'block');
            }
            if (windowOffset >= 1530) {
                $('#slide1').css('display', 'none');
                $('#slide3').css('display', 'none');
            }
            if (windowOffset > 4370) {
                $('#slide2').css('left', '2%');
                $('#slide2').css('transform', "translate3d(" + $(this).scrollTop() / 6 + "px,0,0)");
            }
            if (windowOffset == 4370) {
                $('#slide2').css('transform', "translate3d(" + $(this).scrollTop() / 100 * 3 + "px,0,0)");
            }
            if (windowOffset > 8700) {
                $('#slide1').fadeOut();
                $('#slide5').fadeIn();
            }
            if (windowOffset < 8700) {
                $('#slide1').fadeIn();
                $('#slide5').fadeOut();
            }
            if (windowOffset > 8740) {
                $('#slide5').css('top', '-90%');
                $('#slide5').css('transform', "translate3d(0," + $(this).scrollTop() / 180 * 5 + "px,0)");
            }
            if (windowOffset < 8740) {
                $('#slide5').css('transform', "translate3d(0,-" + $(this).scrollTop() / 100 * 2 + "px,0");
            }
            if (windowOffset < 22390 || windowOffset >= 46400) {
                $('#slide6').fadeOut();
            }
            if (windowOffset > 22390 && windowOffset < 46000) {
                $('#slide6').fadeIn();
            }
            if (windowOffset > 43300) {
                $('#slide7').fadeIn();
                $('#slide7 .slide-7-1').fadeIn();
            }
            if (windowOffset < 43300) {
                $('#slide7').fadeOut();
                $('#slide7 .slide-7-1').fadeOut();
            }
            if (windowOffset >= 44800) {
                $('#slide7 .slide-7-3').fadeIn();
            }
            if (windowOffset < 44800) {
                $('#slide7 .slide-7-3').fadeOut();
            }
            if (windowOffset >= 46300) {
                $('#slide7 .slide-7-2').fadeIn();
            }
            if (windowOffset < 46300) {
                $('#slide7 .slide-7-2').fadeOut();
            }
            if (windowOffset >= 48000) {
                $('#slide8').fadeIn();
                $('#slide8 img').fadeIn();
                $('#slide7 .slide-7-1').css('transition', "all linear 2s");
                $('#slide7 .slide-7-2').css('transition', "all linear 1.7s");
                $('#slide7 .slide-7-3').css('transition', "all linear 2s");
                $('#slide7 .slide-7-1').css('left', '-25%');
                $('#slide7 .slide-7-2').css('top', '100%');
                $('#slide7 .slide-7-3').css('left', '100%');
            }
            if (windowOffset < 48000) {
                $('#slide8').fadeOut();
                $('#slide7 .slide-7-1').css('transition', "all linear 2s");
                $('#slide7 .slide-7-2').css('transition', "all linear 1.7s");
                $('#slide7 .slide-7-3').css('transition', "all linear 2s");
                $('#slide7 .slide-7-1').css('left', '22%');
                $('#slide7 .slide-7-2').css('top', '22%');
                $('#slide7 .slide-7-3').css('left', '66%');
            }
            if (windowOffset >= 50000 && windowOffset < 56800) {
                $('#slide9').fadeIn();
            }
            if (windowOffset >= 50000) {
                $('#slide8').css('transition', "all linear 2s");
                $('#slide8').css('top', '-70%');
            }
            if (windowOffset < 50000 || windowOffset >= 56800) {
                $('#slide9').fadeOut('0.5s');

            }
            if (windowOffset < 50000) {
                $('#slide8').css('transition', "all linear 2s");
                $('#slide8').css('top', '22.2%');
            }
            if (windowOffset >= 52000 && windowOffset < 55700) {
                $('#slide10').fadeIn();
                $('#slide10').css('transition', "all linear 2s");
                $('#slide10').css('top', '0');
            }
            if (windowOffset < 52000) {
                $('#slide10').css('top', '100%');
            }
            if (windowOffset >= 54500) {
                $('#slide9').css('left', '20%');
                $('#slide9').css('transition', "all linear 2s");
                $('#slide10').css('top', '-100%');
                $('#slide10').css('transition', "all linear 2s");
                $('#slide11').fadeIn();
                $('#slide11').css('top', '0');
                $('#slide11 .slide-11-1').css('top', '27%');
                $('#slide11').css('transition', "all linear 2s");

            }
            if (windowOffset < 54500) {
                $('#slide11').fadeOut();
                $('#slide9').css('left', '44%');
                $('#slide9').css('transition', "all linear 2s");

            }
            if (windowOffset >= 55700) {
                $('#slide12').fadeIn();
                $('#slide10').css('display', 'none');

            }
            if (windowOffset < 55700) {
                $('#slide12').fadeOut();
            }
            if (windowOffset > 56500) {
                $('#slide11 .slide-11-1').css('top', '100%');
                $('#slide11 .slide-11-2').css('left', '100%');
                $('#slide12').css('left', '20%');
                $('#slide12').css('transition', "all linear 2s");
                $('.slide-11-1').css('transition', "all linear 2s");
                $('.slide-11-2').css('transition', "all linear 2s");
            }
            if (windowOffset < 56500) {
                $('#slide12').css('left', '50%');
                $('.slide-11-1').css('top', '27%');
                $('.slide-11-2').css('left', '75%');
                $('#slide12').css('transition', "all linear 2s");
                $('#slide11 img').css('transition', "all linear 2s");

            }
            if (windowOffset > 56800) {
                $('#slide12').css('left', '-30%');
                $('#slide12').css('transition', "all linear 2s");
                $('#slide13').css('transition', "all linear 2s");
                $('#slide13').fadeIn();
            }
            if (windowOffset >= 57900) {
                $('#slide13').css('left', '25%');
                $('.slide-13-2').css('left', '50%');
                $('.slide-13-2').css('transition', "all linear 2s");
                $('.slide-13-3').css('left', '75%');
                $('.slide-13-3').css('transition', 'all linear 2s');
                $('#slide13').css('transition', "all linear 2s");
            }
            if (windowOffset < 57900) {
                $('#slide13').css('left', '100%');
                $('.slide-13-2').css('left', '125%');
                $('.slide-13-2').css('transition', "all linear 2s");
                $('#slide13').css('transition', "all linear 2s");
                $('.slide-13-3').css('left', '-30%');
                $('.slide-13-3').css('transition', 'all linear 2s');
            }
            if (windowOffset >= 59800) {
                $('.slide-13-1').css('top', '-100%');
                $('.slide-13-2').css('top', '100%');
                $('.slide-13-3').css('left', '100%');
                $('.slide-13-1').css('transition', 'all linear 2s');
                $('.slide-13-2').css('transition', 'all linear 2s');
                $('.slide-13-3').css('transition', 'all linear 2s');
            }
            if (windowOffset < 59800) {
                $('.slide-13-1').css('top', '10%');
                $('.slide-13-2').css('top', '10%');
                $('.slide-13-3').css('left', '75%');
                $('.slide-13-1').css('transition', 'all linear 2s');
                $('.slide-13-2').css('transition', 'all linear 2s');
                $('.slide-13-3').css('transition', 'all linear 2s');
            }
            if (windowOffset >= 59800 && windowOffset < 63000) {
                $('#slide14').css('display', 'block');
                $('img.slide14').css('display', 'block');
            }
            if (windowOffset < 59800 || windowOffset >= 63000) {
                $('#slide14').css('display', 'none');
                $('img.slide-14').css('display', 'none');
            }
            if (windowOffset > 61000) {
                $('#slide15').fadeIn();
                $('#slide15 .slide-15-1').fadeIn();
            }
            if (windowOffset < 61000) {
                $('#slide15').fadeOut();
                $('#slide15 .slide-15-1').fadeOut();
            }
            if (windowOffset >= 62000) {
                $('#slide15 .slide-15-3').fadeIn();
            }
            if (windowOffset < 62000) {
                $('#slide15 .slide-15-3').fadeOut();
            }
            if (windowOffset >= 63000) {
                $('#slide15 .slide-15-2').fadeIn();
            }
            if (windowOffset < 63000) {
                $('#slide15 .slide-15-2').fadeOut();
            }
            if (windowOffset >= 64000) {
                $('#slide15').css('top', '100%');
                $('#slide16').fadeIn();
                $('#slide16').css('transition', "all linear 2s 1s");
                $('#slide16').css('top', '0');
                $('.SD-header-home').css('display', 'block');
                $('#slide15').css('transition', "all linear 2s");
                $('.home-footer').fadeIn();
            }
            if (windowOffset < 64000) {
                $('#slide15').css('top', '22%');
                $('#slide16').css('top', '100%');
                $('#slide15').css('transition', "all linear 2s");
                $('#slide16').css('transition', "all linear 2s");
                $('.home-footer').fadeOut();
            }
            console.log('window offsetTop', $(window).scrollTop());
        }
    }).scroll();
});


/**
* Js for Customer care page.
*/
$(document).ready(function() {
    if (window.location == "http://localhost/suketdhir-wordpress/customer-care/#collapseOne") {
        $("#collapseOne").addClass('in');
        document.documentElement.scrollTop = 0;

    }
    if (window.location == "http://localhost/suketdhir-wordpress/customer-care/#collapseTwo") {
        $("#collapseTwo").addClass('in');
        document.documentElement.scrollTop = 0;

    }
    if (window.location == "http://localhost/suketdhir-wordpress/customer-care/#collapseThree") {
        $("#collapseThree").addClass('in');
        document.documentElement.scrollTop = 0;

    }
    if (window.location == "http://localhost/suketdhir-wordpress/customer-care/#collapseFour") {
        $("#collapseFour").addClass('in');
        document.documentElement.scrollTop = 0;

    }
    // to change the ATW button on click
    $('.SD-atw').click(function() {
        $(this).addClass('added');
    });
    // prevent reloading of page on clicking search open and close buttons
    $("a.SD-search").attr("href", "javascript:void(0);");
    $("span.search-close a").attr("href", "javascript:void(0);");

    $('.form-LogIn').fadeOut();



    /* JS for shop submenu */
    $('.shop-sub').find('li').click(function() {
        $('.submenu-clothing').removeClass('active');
        $(this).addClass('active');
    });

    /* JS by Sammaan for header to section scroll */
    $('.shop-sub').find('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            var ost = target.offset().top - 110;
            $('html, body').stop().animate({
                scrollTop: ost
            }, 1000);
        }
    });

    $('a[href^="#home"]').on('click', function(event) {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /* JS by Sammaan for header scroll changes*/
    $(window).scroll(function() {
        if ($(this).scrollTop() >= $('.SD-header').height()) {
            $('.SD-header').addClass('scrolled');
             $('.SD-name').find('img').attr('src', 'http://localhost/suketdhir-wordpress/wp-content/themes/suketdhir-wordpress/assets/icons/on-scroll-logo.svg');
        } else {
            $('.SD-header').removeClass('scrolled');
            $('.SD-name').find('img').attr('src', 'http://localhost/suketdhir-wordpress/wp-content/themes/suketdhir-wordpress/assets/images/landing-header-logo.svg');
        }
    });

})

/**
* JS by Sammaan for wardrobe.
*/
var hideWardrobeFlag = false;

function toggleWardrobe() {

    if ($('.SD-wardrobe-container').hasClass('show-wardrobe')) {
        $('.SD-wardrobe-container').removeClass('show-wardrobe')

    } else {
        $('.SD-wardrobe-container').addClass('show-wardrobe')
        $('.SD-wardrobe-container').focus();


    }
}

// For upload file
var inputFileCon = document.getElementsByClassName("uploadBtn");
var inputFile = document.querySelector(".inputFile");
var uploaded = document.querySelector(".cvUpload");
for (var i = 0; i < inputFileCon.length; i++) {
    inputFileCon[i].addEventListener("click", listItems);
}

function listItems() {
    inputFile.click();
}

// For contact us accordion
var plus = document.getElementsByClassName("imgClick");
var allaccorHeading = document.getElementsByClassName("accorHeading");
for (var r = 0; r < plus.length; r++) {
    plus[r].addEventListener("click", crossFun)
}

function crossFun() {
    var classes = this.parentElement.className;
    for (var a = 0; a < allaccorHeading.length; a++) {
        allaccorHeading[a].className = "accorHeading removeCross bottomfourty";
        plus[a].addEventListener()
    }
    if (classes == "accorHeading removeCross bottomfourty") {
        this.parentElement.className = "accorHeading showCross removePlus bottomfourty showContent";
    }
}

var acc = document.getElementsByClassName("accordion-header");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

// For Video
if (window.location == "https://www.google.com/") {
    var myVideo = document.querySelector(".playVidGain");
    myVideo.addEventListener("click", function() {
        if (myVideo.paused) {
            myVideo.play();
            document.querySelector(".videoPlayCon").style.display = "none";
        } else {
            myVideo.pause();
            document.querySelector(".videoPlayCon").style.display = "block";
        }
    })
}
// For Video (End)


// For heart wishlist onclcik active
var slectHeart = document.getElementsByClassName("heart");
for (var i = 0; i < slectHeart.length; i++) {
    slectHeart[i].addEventListener("click", wishList)
}

function wishList() {
    this.classList.toggle("selected");
}
// heart wishlist onclcik active (End)


//For footer Finding id 
$(".SD-footer2 a").click(function() {
    var $delete = $(this);
    var id = $delete.attr('href');
    window.location.href = "http://localhost/suketdhir-wordpress/customer-care/" + id;

});
//For footer Finding id (End)


// For shop page

// onclcik reach to particualar section
$(".navigationLink").click(function() {
    var links = this.getAttribute("href")
    var linkName = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(linkName).offset().top - 170
    }, 10);
});
// onclcik reach to particualar section (End)


// On scroll vavigation active
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop() + 80 + 15 + $(".navigation").outerHeight();
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();
// On scroll vavigation active (End)

// For account page
// document.querySelector(".addressPlus").addEventListener("click", function() {
//     this.classList.toggle("closeAddress");
//     document.querySelector(".formInternal").classList.toggle("newAddress");
// });
    // For account page (End)
    // JS by rahul (End)


/**
* Product's page
*/
$(".SD-product-view img").click(function(){
    $(".SD-thumbnail-active").removeClass("SD-thumbnail-active");
    $(this).addClass("SD-thumbnail-active");

    var selector_number = $(this).data("image-s");
    $(".SD-image-active").removeClass("SD-image-active");
    $(".SD-product-image img[data-image-i='" + selector_number + "']").addClass("SD-image-active");
});
