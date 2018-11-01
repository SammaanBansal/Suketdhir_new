$(document).ready(function() {

    // prevent reloading of page on clicking search open and close buttons
    $("a.SD-search").attr("href", "javascript:void(0);");
    $("span.search-close a").attr("href", "javascript:void(0);");

    $('.form-LogIn').fadeOut()
        //   $('.owl-carousel').owlCarousel({
        //     loop:true,
        //     margin:0,
        //     nav:true,
        //     // autoWidth:true,
        //     responsive:{
        //         0:{
        //             items:2
        //         },
        //         600:{
        //             items:2
        //         },
        //         1000:{
        //             items:2
        //         }
        //     }
        // })
        // $(window).scrollTop(); // returns pixel value
        // $(window).scroll(function() {
        //     if ($(window).scrollTop() > 400) {
        //         $('.SD-header').addClass('SD-reduce', { duration: 1500 })
        //         if ($('.SD-wardrobe-container').hasClass('show-wardrobe')) {
        //             $('.SD-header').css('opacity', '1');
        //             $('.SD-wardrobe-container').css('top', '70');

    //         }
    //         else {
    //             $('.SD-header').css('opacity', '.9');

    //         }
    //     }
    //     else if ($(window).scrollTop() < 400) {
    //         $('.SD-header').removeClass('SD-reduce')
    //         $('.SD-header').css('opacity', '1');
    //         $('.SD-wardrobe-container').css('top', '100');

    //     }
    // });

    /* JS by Sammaan for shop submenu */


    $('.shop-sub').find('li').click(function() {
        $('.submenu-clothing').removeClass('active');
        $(this).addClass('active');
    });

    /* end of JS by Sammaan for shop submenu */


    // var handler = function(event){
    //   // if the target is a descendent of container do nothing
    //   if($(event.target).is("img.wardrobeIcon"))
    //   {
    //       return;
    //   }
    //   else{
    //       $('.SD-wardrobe-container').removeClass('show-wardrobe')
    //     //   toggleWardrobe()
    //   }
    //   // remove event handler from document
    // //   $(document).off("click", handler);

    //   // dostuff
    // }

    // $(document).on("click", handler);
    // function animateInfo(v){
    //     // $('.SD-story-info-card').on
    //     console.log(this)
    //     if(v == 1){
    //         $('.SD-story-info-card').addClass('animated fadeInUp');
    //         $('.SD-story-info-card').removeClass(' fadeOutDown');
    //     }
    //     if(v == 2){
    //         $('.SD-story-info-card').addClass('animated fadeOutDown');
    //         $('.SD-story-info-card').removeClass(' fadeInUp');
    //     }
    // }

    //for header

    
    /* JS by Sammaan for header scroll changes*/

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 95) {
            $('.SD-header').addClass('scrolled');
            $('.SD-name').find('img').attr('src', 'assets/icons/on-scroll-logo.svg');
        } else {
            $('.SD-header').removeClass('scrolled');
            $('.SD-name').find('img').attr('src', 'assets/images/landing-header-logo.svg');
        }
    });

    $(".SD-clothing").mouseover(function() {

    }).mouseout(function() {

    });

    function toggleForm(value) {
        if (value == 1) {
            $('.form-SignUp').fadeIn(500)
            $('.form-LogIn').fadeOut(500)

            // $('.form-SignUp').addClass('form-hide', { duration: 1500 })
            // $('.form-SignUp').addClass('form-show', { duration: 1500 })
            // $('.form-LogIn').css({ 'display': 'none', 'opacity': 0, 'transition': 'opacity 1s linear' });
            // $('.form-SignUp').css({ 'display': 'block', 'opacity': 1, 'transition': 'opacity 1s linear' });
            // $('.form-LogIn').css('opacity','0');
        } else if (value == 2) {
            $('.form-LogIn').fadeIn(500)
            $('.form-SignUp').fadeOut(500)

            // $('.form-SignUp').addClass('form-hide', { duration: 1500 })
            // $('.form-LogIn').removeClass('form-show', { duration: 1500 })
            // $('.form-LogIn').css({ 'display': 'block', 'opacity': 1, 'transition': 'opacity 1s linear' });
            // $('.form-SignUp').css({ 'display': 'none', 'opacity': 0, 'transition': 'opacity 1s linear' });
        }

    }

    // function showPaginator() {
    //     $('#show_paginator').bootpag(
    //             total: 5 page: 1 maxVisible: 5 leaps: true firstLastUse: true first: '←'
    //             last: '→'
    //             wrapClass: 'pagination'
    //             activeClass: 'active'
    //             disabledClass: 'disabled'
    //             nextClass: 'next'
    //             prevClass: 'prev'
    //             lastClass: 'last'
    //             firstClass: 'first').on 'page', (event, num) - >
    //         $('#dynamic_content').html 'page ' + num
    // }

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
c = 0;
d = 0;
e = 0;

function showContent(val) {

    if (val == 1) {
        c++;
        if (c % 2 == 1) {
            $('.SD-contact-img1').attr('src', 'assets/icons/VD_Icons_resize-40.png');
            $('.SD-contact-studio-det').css({
                'display': 'block'
            });
        } else {
            $('.SD-contact-img1').attr('src', 'assets/icons/VD_Icons_resize-19.png');
            $('.SD-contact-studio-det').css({
                'display': 'none'
            });
        }
    }
    if (val == 2) {
        d++;
        if (d % 2 == 1) {
            $('.SD-contact-img2').attr('src', 'assets/icons/VD_Icons_resize-40.png');
            $('.SD-contact-press-det').css({
                'display': 'block'
            });
        } else {
            $('.SD-contact-img2').attr('src', 'assets/icons/VD_Icons_resize-19.png');
            $('.SD-contact-press-det').css({
                'display': 'none'
            });
        }
    }
    if (val == 3) {
        e++;
        if (e % 2 == 1) {
            $('.SD-contact-img3').attr('src', 'assets/icons/VD_Icons_resize-40.png');
            $('.SD-contact-b2b-det').css({
                'display': 'block'
            });
        } else {
            $('.SD-contact-img3').attr('src', 'assets/icons/VD_Icons_resize-19.png');
            $('.SD-contact-b2b-det').css({
                'display': 'none'
            });
        }
    }
}


// For contact us accordion

// For about us video




// For Collection page
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

var slectHeart = document.getElementsByClassName("heart");
for (var i = 0; i < slectHeart.length; i++) {
    slectHeart[i].addEventListener("click", wishList)
    console.log(i);
}

function wishList() {
    this.classList.toggle("selected");
}
// For Collection page


/* JS by Rahul for contact us accordian */
