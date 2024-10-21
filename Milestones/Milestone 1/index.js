function changeImage(value) {
  const imgValue = document.querySelector("#upload-profile");
  const imgPreview = document.querySelector("#img-preview");
  const cvImgPre = document.querySelector("#user-profile");
  // console.dir(imgValue.value.length);
  const file = imgValue.files[0];
  // console.log(file);
  if (imgValue.value.length === 0) {
    imgPreview.src = "images/avatar.png";
    cvImgPre.src = "images/avatar.png";
  }
  if (imgValue) {
  }
  if (
    file &&
    (file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png")
  ) {
    // console.log("hi123");
    const readImg = new FileReader();
    readImg.onload = (e) => {
      var _a, _b;
      if (value === "main") {
        imgPreview.src =
          (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        // cvImgPre.src =
        //   // (_b = e.target) === null || _b === void 0 ? void 0 : _b.result;
      }
      // console.log("done");
    };
    readImg.onerror = () => {
      console.log("error");
    };
    readImg.readAsDataURL(file);
  }
}
//ya variable reset btn ko get kr raha hain.
const reset = document.querySelector("#reset");
// or ya per me reset per click k function run kr raha hu jis sa resume me img profile or inputs or textarea me mojood content reset hojai ga.
reset.addEventListener("click", () => {
  //or resetAll variable me sary inputs or textareas get ho raha hain
  const resetAll = document.querySelectorAll(".reset-all");
  const imgValue = document.querySelector("#upload-profile");
  for (let i = 0; i < resetAll.length; i++) {
    if (resetAll[i].tagName.toLowerCase().trim() === "img") {
      if (
        resetAll[i].attributes[0].textContent.trim() !== "images/avatar.png"
      ) {
        resetAll[i].src = "images/avatar.png";
        imgValue.value = "";
      }
    }else{
      resetAll[i].value = "";
    }
    
  }
});


