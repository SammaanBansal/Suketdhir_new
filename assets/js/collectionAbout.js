var clickPlay = document.querySelector(".videoPlayCon");
var videoPLay = document.querySelector(".playVidGain");
clickPlay.addEventListener("click", function() {
    if (videoPLay.paused) {
        videoPLay.play();
        videoPLay.controls = true;
        document.querySelector(".videoPlayCon").style.display = "none";
        document.querySelector(".collectionGray").style.display = "none";
        document.querySelector(".videoFullHeight").classList.add("heightFull");
    } else {
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