document.querySelector(".addressPlus").addEventListener("click", function() {
    this.classList.toggle("closeAddress");
    document.querySelector(".formInternal").classList.toggle("newAddress");
});