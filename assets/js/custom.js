/**
 * JS for window load reset scrolltop.
 */

// $(window).ready(function() {
//     $(window).offset(0);
// });

$(document).ready(function() {
    /**
     * JS for homepage.
     */
    $(window).scroll(function() {
        if ( $(this).width() > 1024 ) {
            windowOffset = $(window).scrollTop();

            if(windowOffset > 1250){
                $('#slide4').css('display','block');
                $('header').css('display', 'none');
            }
            if(windowOffset < 1250){
                $('#slide4').css('display','none');
                $('#slide1').css('display','block');
                $('header').css('display', 'block');
            }
            if(windowOffset > 1300){
                $('#slide4').css('transform', "translate3d(" + $(this).scrollTop()/6 + "px,0,0)");
            }
            if(windowOffset < 1400){
                $('#slide4').css('transform', "translate3d(-" + $(this).scrollTop()/100*2 + "px,0,0)");
            }
            if (windowOffset < 1530) {
                $('#slide3').css('display', 'block');
            }
            if (windowOffset >= 1530) {
                $('#slide1').css('display', 'none');
                $('#slide3').css('display', 'none');
            }
            if(windowOffset > 4370){
                $('#slide2').css({'transform': "translate3d(" + $(this).scrollTop()/6 + "px,0,0)",'left':'2%'});
            }
            if(windowOffset == 4370){
                $('#slide2').css('transform', "translate3d(" + $(this).scrollTop()/100*3 + "px,0,0)");
            }
            if (windowOffset >= 8700) {
                $('#slide1').fadeOut();
                $('#slide5').fadeIn();
            }
            if (windowOffset < 8700) {
                $('#slide1').fadeIn();
                $('#slide5').fadeOut();
            }
            if (windowOffset >= 8740) {
                $('#slide5').css({'top': '-90%', 'transform': "translate3d(0," + $(this).scrollTop() / 180 * 5 + "px,0)"});
            }
            if (windowOffset < 8740) {
                $('#slide5').css('transform', "translate3d(0,-" + $(this).scrollTop() / 100 * 2 + "px,0");
            }
            if (windowOffset < 22390 || windowOffset >= 46400) {
                $('#slide6').fadeOut();
            }
            if (windowOffset >= 22390 && windowOffset < 46000) {
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
                $('#slide7 .slide-7-1').css({'left': '-25%','transition': "all linear 2s"});
                $('#slide7 .slide-7-2').css({'top': '100%','transition': "all linear 1.7s"});
                $('#slide7 .slide-7-3').css({'left': '100%','transition': "all linear 2s"});
            }
            if (windowOffset < 48000) {
                $('#slide8').fadeOut();
                $('#slide7 .slide-7-1').css({'left': '22%','transition': "all linear 2s"});
                $('#slide7 .slide-7-2').css({'top': '22%','transition': "all linear 1.7s"});
                $('#slide7 .slide-7-3').css({'left': '66%','transition': "all linear 2s"});
            }
            if (windowOffset >= 50000 && windowOffset < 56800) {
                $('#slide9').fadeIn();
            }
            if (windowOffset >= 50000) {
                $('.slide-8').css({'top': '-70%','transition': "all linear 2s"});
                $('.slide-8-1').css({'left': '-100%','transition': "all linear 3s"});
            }
            if (windowOffset < 50000 || windowOffset >= 56800) {
                $('#slide9').fadeOut('0.5s');
            }
            if (windowOffset < 50000) {
                $('.slide-8').css({'top': '22.2%','transition': "all linear 2s"});
                $('.slide-8-1').css({'left': '100%','transition': "all linear 3s"});
            }
            if (windowOffset >= 52000) {
                $('#slide10').fadeIn();
                $('#slide10').css({'top': '0','transition': "all linear 2s"});
            }
            if (windowOffset < 52000 ) {
                $('#slide10').css({'top': '100%','transition': "all linear 2s"});
            }
            if (windowOffset > 54500) {
                $('#slide9').css({'left': '20%','transition': "all linear 2s"});
                $('#slide10').css({'top': '-100%','transition': "all linear 2s"});
                $('#slide11').fadeIn();
                $('#slide11').css({'top': '0','transition': "all linear 2s"});
                $('#slide11 .slide-11-1').css('top', '27%');
            }
            if (windowOffset < 54500) {
                $('#slide11').fadeOut();
                $('#slide9').css({'left': '44%','transition': "all linear 2s"});
            }
            if (windowOffset >= 55700) {
                $('#slide12').fadeIn();
                $('#slide10').css('display','none');
            }
            if (windowOffset < 55700) {
                $('#slide12').fadeOut();
            }
            if (windowOffset > 56500) {
                $('#slide11 .slide-11-1').css({'top': '100%','transition': "all linear 2s"});
                $('#slide11 .slide-11-2').css({'left': '100%','transition': "all linear 2s"});
                $('#slide12').css({'left': '20%','transition': "all linear 2s"});
            }
            if (windowOffset < 56500) {
                $('#slide12').css({'left': '50%','transition': "all linear 2s"});
                $('.slide-11-1').css('top', '22%');
                $('.slide-11-2').css('left', '75%');
                $('#slide11 img').css('transition', "all linear 2s");
            }
            if (windowOffset >= 56800) {
                $('#slide12').css({'left': '-30%','transition': "all linear 2s"});
                $('#slide13').fadeIn();
            } 
            if (windowOffset < 56800) {
                $('#slide13').fadeOut();
            }
            if (windowOffset >= 57900) {
                $('#slide13').css({'left': '25%','transition': "all linear 2s"});
                $('.slide-13-2').css({'left': '50%','transition': "all linear 2s"});
                $('.slide-13-3').css({'left': '75%','transition': 'all linear 2s'});
            } 
            if (windowOffset < 57900) {
                $('#slide13').css({'left': '100%','transition': "all linear 2s"});
                $('.slide-13-2').css({'left': '125%','transition': "all linear 2s"});
                $('.slide-13-3').css({'left': '-10%','transition': 'all linear 2s'});
            }
            if (windowOffset >= 59800) {
                $('.slide-13-1').css({'top': '-100%','transition': 'all linear 2s'});
                $('.slide-13-2').css({'top': '100%','transition': 'all linear 2s'});
                $('.slide-13-3').css({'left': '100%','transition': 'all linear 2s'});
            }
            if (windowOffset < 59800) {
                $('.slide-13-1').css({'top': '10%','transition': 'all linear 2s'});
                $('.slide-13-2').css({'top': '10%','transition': 'all linear 2s'});
                $('.slide-13-3').css({'left': '75%','transition': 'all linear 2s'});
            }
            if (windowOffset >= 59800 && windowOffset < 63000) {
                $('#slide14').css('display','block');
                $('#slide14 .slide-14').css('display','block');
            }
            if (windowOffset < 59800 || windowOffset >= 63000) {
                $('#slide14').css('display','none');
                $('#slide14 .slide-14').css('display','none');
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
                $('#slide15').css({'top':'100%','transition': "all linear 2s"});
                $('#slide16').fadeIn();
                $('#slide16').css({'top': '0','transition': "all linear 2s 2s"});
                $('header').css('display', 'block');
            }
            if (windowOffset < 64000) {
                $('#slide15').css({'top':'22%','transition': "all linear 2s"});
                $('#slide16').css({'top': '100%','transition': "all linear 2s"});
            }
            console.log('window offsetTop', $(window).scrollTop());
        }
    }).scroll();

    /**
     * Js for Customer care page.
     */
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

    /**
     * Js to change the ATW button on click
     */
    $('.SD-atw').click(function() {
        $(this).addClass('added');
    });

    /**
     * JS for shop submenu 
     */
    $('.shop-sub').find('li').click(function() {
        $('.submenu-clothing').removeClass('active');
        $(this).addClass('active');
    });

    /**
     * JS for header to section scroll.
     */
    // $('.shop-sub').find('a[href^="#"]').on('click', function(event) {
    //     var target = $(this.getAttribute('href'));
    //     if (target.length) {
    //         event.preventDefault();
    //         var ost = target.offset().top - 110;
    //         $('html, body').stop().animate({
    //             scrollTop: ost
    //         }, 1000);
    //     }
    // });
    // $('a[href^="#home"]').on('click', function(event) {
    //     $('html, body').stop().animate({
    //         scrollTop: 0
    //     }, 1000);
    // });

    /**
     * JS for header scroll changes.
     */
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() >= $('.SD-header').height()) {
    //         $('.SD-header').addClass('scrolled');
    //         $('.SD-name').find('img').attr('src', 'http://localhost/suketdhir-wordpress/wp-content/themes/suketdhir-wordpress/assets/icons/on-scroll-logo.svg');
    //     } else {
    //         $('.SD-header').removeClass('scrolled');
    //         $('.SD-name').find('img').attr('src', 'http://localhost/suketdhir-wordpress/wp-content/themes/suketdhir-wordpress/assets/images/landing-header-logo.svg');
    //     }
    // });

    /**
     * JS by Sammaan for wardrobe.
     */

    var hideWardrobeFlag = false;
    $('.wardrobe-btn').click(function() {
        if ($('.SD-wardrobe-container').hasClass('show-wardrobe')) {
            $('.SD-wardrobe-container').removeClass('show-wardrobe')

        } else {
            $('.SD-wardrobe-container').addClass('show-wardrobe')
            $('.SD-wardrobe-container').focus();
        }
    });



    /**
     * JS for payment page.
     */
    $('.isp-info-btn').click(function(e) {
        e.preventDefault();
        $('#info-form').fadeOut();
        $('#info-form-details').fadeIn();
    });
    $('#info-back-btn').click(function(e) {
        e.preventDefault();
        $('#info-form-details').fadeOut();
        $('#info-form').fadeIn();
    });

    $('#dif-bill-add').change(function(e) {
        if (this.checked) {
            $('#shipping .SD-shipaddress').fadeOut();
            $('#form-shipping').fadeIn();
        } else {
            $('#shipping .SD-shipaddress').fadeIn();
            $('#form-shipping').fadeOut();
        }
    });
    $('.isp-info-ship-btn').click(function(e) {
        e.preventDefault();
        $('.payment-section').fadeOut();
        $('#shipping').fadeIn();
    });
    $('.isp-ship-info-btn').click(function(e) {
        e.preventDefault();
        $('.payment-section').fadeOut();
        $('#information').fadeIn();
    });
    $('.isp-ship-pay-btn').click(function(e) {
        e.preventDefault();
        $('.payment-section').fadeOut();
        $('#payment').fadeIn();
    });

    /**
     * Product's page
     */
    $(".SD-product-view img").click(function() {
        $(".SD-thumbnail-active").removeClass("SD-thumbnail-active");
        $(this).addClass("SD-thumbnail-active");

        var selector_number = $(this).data("image-s");
        $(".SD-image-active").removeClass("SD-image-active");
        $(".SD-product-image img[data-image-i='" + selector_number + "']").addClass("SD-image-active");
    });

    /**
     * For upload file
     */
    var inputFileCon = document.getElementsByClassName("uploadBtn");
    var inputFile = document.querySelector(".inputFile");
    var uploaded = document.querySelector(".cvUpload");
    for (var i = 0; i < inputFileCon.length; i++) {
        inputFileCon[i].addEventListener("click", listItems);
    }

    function listItems() {
        inputFile.click();
    }

    /**
     * For contact us accordion
     */
    var plus = document.getElementsByClassName("imgClick");
    var allaccorHeading = document.getElementsByClassName("accorHeading");
    for (var r = 0; r < plus.length; r++) {
        plus[r].addEventListener("click", crossFun)
    }

    function crossFun() {
        var classes = this.parentElement.className;
        for (var a = 0; a < allaccorHeading.length; a++) {
            allaccorHeading[a].className = "accorHeading removeCross bottomfourty";
            // plus[a].addEventListener()
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

    /**
     * For Video
     */
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

    /**
     * For heart wishlist onclcik active
     */
    var slectHeart = document.getElementsByClassName("heart");
    for (var i = 0; i < slectHeart.length; i++) {
        slectHeart[i].addEventListener("click", wishList)
    }

    function wishList(e) {
        e.preventDefault();
        this.classList.toggle("selected");
    }

    /**
     * footer Finding id
     */
    $(".SD-footer2 a").click(function() {
        var $delete = $(this);
        var id = $delete.attr('href');
        window.location.href = "http://localhost/suketdhir-wordpress/customer-care/" + id;

    });

    /**
     * onclick reach to particualar section for shop page
     */
    $(".navigationLink").click(function() {
        var links = this.getAttribute("href")
        var linkName = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(linkName).offset().top - 170
        }, 10);
    });

    /**
     * On scroll navigation active
     */
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop() + 80 + 15 + $(".navigation").outerHeight();
        $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('.navigation a.active').removeClass('active');
                $('.navigation a').eq(i).addClass('active');
            }
        });
    }).scroll();

});

/**
 * End for JS
 */



/**
 * Js For account page
 */
// document.querySelector(".addressPlus").addEventListener("click", function() {
//     this.classList.toggle("closeAddress");
//     document.querySelector(".formInternal").classList.toggle("newAddress");
// });

/**
 * Js to prevent reloading of page on clicking search open and close buttons
 */
// $("a.SD-search").attr("href", "javascript:void(0);");
// $("span.search-close a").attr("href", "javascript:void(0);");

// $('.form-LogIn').fadeOut();