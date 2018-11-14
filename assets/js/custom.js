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

    // prevent reloading of page on clicking search open and close buttons
    $("a.SD-search").attr("href", "javascript:void(0);");
    $("span.search-close a").attr("href", "javascript:void(0);");

    $('.form-LogIn').fadeOut()



    /* JS by Sammaan for shop submenu */


    /* JS for shop submenu */


    $('.shop-sub').find('li').click(function() {
        $('.submenu-clothing').removeClass('active');
        $(this).addClass('active');
    });

    /* end of JS by Sammaan for shop submenu */
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
    /* JS by Sammaan for header to section scroll*/
    /* JS by Sammaan for header scroll changes*/

    $(window).scroll(function() {

        if ($(this).scrollTop() >= $('.SD-header').height()) {
            $('.SD-header').addClass('scrolled');
            // $('.SD-name').find('img').attr('src', 'http://localhost/suketdhir-wordpress/wp-content/themes/suketdhir-wordpress/assets/icons/on-scroll-logo.svg');
        } else {
            $('.SD-header').removeClass('scrolled');
            // $('.SD-name').find('img').attr('src', 'http://localhost/suketdhir-wordpress/wp-content/themes/suketdhir-wordpress/assets/images/landing-header-logo.svg');
        }
    });

    $(".SD-clothing").mouseover(function() {

    }).mouseout(function() {

    });

    function toggleForm(value) {
        if (value == 1) {
            $('.form-SignUp').fadeIn(500)
            $('.form-LogIn').fadeOut(500)


        } else if (value == 2) {
            $('.form-LogIn').fadeIn(500)
            $('.form-SignUp').fadeOut(500)

        }

    }


    function changeModal(val) {
        if (val == 1) {
            $('#SD-login-md').modal('hide');
        }
        if (val == 2) {
            $('#SD-signup-md').modal('hide');
        }
        if (val == 3) {
            $('#SD-signup-md').modal('hide');
        }
    }

    function showSearch() {
        $('#searchbox').fadeToggle('500');
    }

    function hideSearch() {
        $('#searchbox').fadeOut('500');
    }

    var path;
    var page;
    $(function() {
        path = window.location.pathname;
        page = path.split("/").pop();
        // alert(page)
    });

})

/* JS by Sammaan for wardrobe*/

var hideWardrobeFlag = false;

function toggleWardrobe() {

    if ($('.SD-wardrobe-container').hasClass('show-wardrobe')) {
        $('.SD-wardrobe-container').removeClass('show-wardrobe')

    } else {
        $('.SD-wardrobe-container').addClass('show-wardrobe')
        $('.SD-wardrobe-container').focus();


    }
}

/* End JS by Sammaan for wardrobe*/




/* JS by Rahul for contact us accordian */

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
// For upload file



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
        console.log(a);
    }

    if (classes == "accorHeading removeCross bottomfourty") {
        this.parentElement.className = "accorHeading showCross removePlus bottomfourty showContent";
    }
}

// var acc = document.getElementsByClassName("accordion-header");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].onclick = function() {
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
//     }
// }

// For contact us accordion

// For about us video

/* JS by Sammaan for homepage */

$(document).ready(function() {
    $(window).scroll(function() {
        windowOffset = $(window).scrollTop();
        // $('#slide1').css('transform', "translate3d(0,-" + $(this).scrollTop()*8 + "px,0)");
        // $('#slide3').css('transform', "translate3d(0,-" + $(this).scrollTop()*17 + "px,0)");

        if (windowOffset > 1250) {
            $('#slide4').css('display', 'block');

        }
        if (windowOffset < 1250) {
            $('#slide4').css('display', 'none');
            $('#slide1').css('display', 'block');
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
        if (windowOffset > 1530) {
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
            // $('#slide7 .slide-7-2').css('transform', "translate3d(0,-" + $(this).scrollTop()/360*2 + "px,0");
            // $('#slide7 .slide-7-3').css('transform', "translate3d(-" + $(this).scrollTop()/100*3 + "px,0,0)");
        }
        if (windowOffset >= 49000) {
            $('#slide9').fadeIn();
            $('#slide8').css('transition', "all linear 2s");
            $('#slide8').css('top', '-70%');
        }
        if (windowOffset < 49000) {
            $('#slide9').fadeOut();
            $('#slide8').css('transition', "all linear 2s");
            $('#slide8').css('top', '22.2%');
        }
        if (windowOffset > 49300) {
            $('#slide10').fadeIn();
            $('#slide10').css('transition', "all linear 2s");
            $('#slide10').css('top', '0');
        }
        if (windowOffset < 49300) {
            $('#slide10').fadeOut();
            // $('#slide10').css('transition', "all linear 2s");
            $('#slide10').css('top', '100%');
        }

        // switch(windowOffset){
        //     case 0 : $('#slide1').css('transform', "translate3d(0,-" + $(this).scrollTop() + "px,0)");
        //     break;
        //     case 91 : $('#slide3').css('transform', "translate3d(0,-" + $(this).scrollTop()*8 + "px,0)");
        // }
        console.log('window offsetTop', $(window).scrollTop());
    }).scroll();
});
/* end of JS by Sammaan for homepage */



// For Collection page
if (window.location == "https://www.google.com/") {
    var myVideo = document.querySelector(".playVidGain");
    myVideo.addEventListener("click", function() {
        if (myVideo.paused) {
            myVideo.play();
            document.querySelector(".videoPlayCon").style.display = "none";
            // document.querySelector(".collectionGray").className = "removeSection";
            // myVideo.setAttribute("controls", "two")
            // myVideo.removeAttribute("controls", "controls")
        } else {
            // myVideo.removeAttribute("controls", "two")
            myVideo.pause();
            document.querySelector(".videoPlayCon").style.display = "block";
            // document.querySelector(".collectionGray").className = "removeSection fff";
            // document.querySelector(".collectionGray").className = "fiftyPercent aboutGrayContainer collectionGray";
        }
    })
}
var slectHeart = document.getElementsByClassName("heart");
for (var i = 0; i < slectHeart.length; i++) {
    slectHeart[i].addEventListener("click", wishList)
    console.log(i);
}

function wishList() {
    this.classList.toggle("selected");
}
// For Collection page

$(".SD-footer2 a").click(function() {
    var $delete = $(this);
    //alert($delete.attr('href'));
    var id = $delete.attr('href');
    window.location.href = "http://localhost/suketdhir-wordpress/customer-care/" + id;


    //window.location.href = "http://localhost/suketdhir-wordpress/customer-care/";

});

// var page = document.getElementsByClassName("linkPage");
// var id = document.getElementById()
// for (var j = 0; j < page.length; j++) {
//     page[j].addEventListener("click", pageLink);

// }

// function pageLink() {
//     if (window.location != "http://localhost/suketdhir-wordpress/customer-care/") {
//         window.location.href = "http://localhost/suketdhir-wordpress/customer-care/";
//     }
//     document.documentElement.scrollTop = 0;

// }
// $(".toggleAcc").click(function() {
//     // $(".threeAcor").toggleClass("panel-collapse collapse in");
//     if (window.location === "http://localhost/suketdhir-wordpress/customer-care/") {
//         if ($(".threeAcor").hasClass("panel-collapse threeAcor collapse")) {
//             alert("Has");
//         } else {
//             alert("not");
//         }
//     }
// })

// document.querySelector(".SD-sd").addEventListener("click", function(){})

/* JS by Rahul for contact us accordian */

// JS by rahul
$(window).scroll(function() {
    // Section should be less than the scroll top position + Header Menu + Shop Navigation Menu + 15px
    var scrollDistance = $(window).scrollTop() + 80 + 15 + $(".navigation").outerHeight();

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();
// JS by rahul