document.querySelector(".clearVideo").addEventListener("click", function() {
    videoPLay.load();
    videoPLay.controls = false;
    document.querySelector(".clearVideo").style.display = "none";
    document.querySelector(".videoPlayCon").style.display = "block";
    document.querySelector(".collectionGray").style.display = "flex";
    document.querySelector(".collectionVideo").classList.remove("fullVideo");
    document.querySelector(".videoFullHeight").classList.remove("heightFull");
})