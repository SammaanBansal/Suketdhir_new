document.querySelector(".addressPlus").addEventListener("click", function() {
    this.classList.toggle("closeAddress");
    document.querySelector(".formInternal").classList.toggle("newAddress");
});

document.querySelector(".cardAdd").addEventListener("click", function() {
    this.classList.toggle("rotate");
    document.querySelector(".newCards").classList.toggle("showCards");
})

$(".moreCl").click(function() {
    document.querySelector(".orderInternal").style.display = "none";
    document.querySelector(".orderExpand").style.display = "block";
})
$(".backBtn").click(function() {
    document.querySelector(".orderInternal").style.display = "block";
    document.querySelector(".orderExpand").style.display = "none";
})