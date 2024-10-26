function changeImage(value) {
    var imgValue = document.querySelector("#upload-profile");
    var imgPreview = document.querySelector("#img-preview");
    var cvImgPre = document.querySelector("#user-profile");
    // console.dir(imgValue.value.length);
    var file = imgValue.files[0];
    // console.log(file);
    if (imgValue.value.length === 0) {
        imgPreview.src = "../images/avatar.png";
        cvImgPre.src = "../images/avatar.png";
    }
    if (file &&
        (file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/png")) {
        // console.log("hi123");
        var readImg_1 = new FileReader();
        readImg_1.onload = function () {
            var result = readImg_1.result;
            imgPreview.src = result;
            cvImgPre.src = result;
        };
        readImg_1.onerror = function () {
            console.log("error");
        };
        readImg_1.readAsDataURL(file);
    }
}
//ya variable reset btn ko get kr raha hain.
var reset = document.querySelector("#reset");
// or ya per me reset per click k function run kr raha hu jis sa resume me img profile or inputs or textarea me mojood content reset hojai ga.
reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", function () {
    //or resetAll variable me sary inputs or textareas get ho raha hain
    var resetAll = document.querySelectorAll(".reset-all");
    var imgValue = document.querySelector("#upload-profile");
    for (var i = 0; i < resetAll.length; i++) {
        if (resetAll[i].tagName.toLowerCase().trim() === "img") {
            if (resetAll[i].attributes[0].textContent.trim() !== "../images/avatar.png") {
                resetAll[i].src = "../images/avatar.png";
                imgValue.value = "";
            }
        }
        else {
            resetAll[i].value = "";
        }
    }
    window.scrollTo({
        top: 20,
        behavior: "smooth",
    });
});
