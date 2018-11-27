/**
* Js for about us and collection page only
*/
$(document).ready(function(){
    console.log('Video JS');
    var clickPlay = document.querySelector(".videoPlayCon");
    var videoPLay = document.querySelector(".playVidGain");
    console.log("Button", clickPlay);
    console.log("Video ", videoPLay);
    clickPlay.onclick = function() {
        if (videoPLay.paused) {
            console.log('Video play');
            videoPLay.play();
            videoPLay.controls = true;
            document.querySelector(".videoPlayCon").style.display = "none";
            document.querySelector(".collectionGray").style.display = "none";
            document.querySelector(".videoFullHeight").classList.add("heightFull");
        } else {
            console.log('Video paused');
            videoPLay.pause();
            clickPlay.style.display = "block";
        }

    }
    clickPlay.addEventListener("click", function() {
        if (videoPLay.paused) {
            console.log('Video play');
            videoPLay.play();
            videoPLay.controls = true;
            document.querySelector(".videoPlayCon").style.display = "none";
            document.querySelector(".collectionGray").style.display = "none";
            document.querySelector(".videoFullHeight").classList.add("heightFull");
        } else {
            console.log('Video paused');
            videoPLay.pause();
            clickPlay.style.display = "block";
        }

    });

    videoPLay.onended = function() {
        videoPLay.load();
        videoPLay.controls = false;
        document.querySelector(".clearVideo").style.display = "none";
        document.querySelector(".videoPlayCon").style.display = "block";
        document.querySelector(".collectionGray").style.display = "flex";
        document.querySelector(".collectionVideo").classList.remove("fullVideo");
        document.querySelector(".videoFullHeight").classList.remove("heightFull");
    }

    videoPLay.onpause = function() {

    }

    videoPLay.onplay = function() {
        videoPLay.controls = true;
        clickPlay.style.display = "none";
        document.querySelector(".clearVideo").style.display = "block";
        document.querySelector(".collectionVideo").classList.add("fullVideo");
    }


    document.querySelector(".clearVideo").addEventListener("click", function() {
        videoPLay.load();
        videoPLay.controls = false;
        document.querySelector(".clearVideo").style.display = "none";
        document.querySelector(".videoPlayCon").style.display = "block";
        document.querySelector(".collectionGray").style.display = "flex";
        document.querySelector(".collectionVideo").classList.remove("fullVideo");
        document.querySelector(".videoFullHeight").classList.remove("heightFull");
    })

});
