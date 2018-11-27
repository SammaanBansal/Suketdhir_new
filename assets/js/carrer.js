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
inputFile.addEventListener("change", function() {
    if (this.value) {
        uploaded.innerHTML = inputFile.value.substring(12)
        uploaded.style.color = "black";
    } else {
        // uploaded.innerHTML = inputFile.value;
    }
})