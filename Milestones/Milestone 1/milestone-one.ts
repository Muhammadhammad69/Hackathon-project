function changeImage(value: string) {
    const imgValue: HTMLInputElement = document.querySelector("#upload-profile")!;
    const imgPreview: HTMLImageElement = document.querySelector("#img-preview")!;
    const cvImgPre: HTMLImageElement = document.querySelector("#user-profile")!;
    // console.dir(imgValue.value.length);
    const file = imgValue.files![0];
    // console.log(file);
    if (imgValue.value.length === 0) {
      imgPreview.src = "../images/avatar.png";
      cvImgPre.src = "../images/avatar.png";
    }
  
    if (
      file &&
      (file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png")
    ) {
      // console.log("hi123");
      const readImg = new FileReader();
      readImg.onload = () => {
        const result: any = readImg.result;
        imgPreview.src = result;
        cvImgPre.src = result;
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
  reset?.addEventListener("click", () => {
    //or resetAll variable me sary inputs or textareas get ho raha hain
    const resetAll: any = document.querySelectorAll(".reset-all");
    const imgValue: HTMLInputElement = document.querySelector("#upload-profile")!;
    for (let i = 0; i < resetAll.length; i++) {
      if (resetAll[i].tagName.toLowerCase().trim() === "img") {
        if (
          resetAll![i].attributes![0].textContent!.trim() !== "../images/avatar.png"
        ) {
          resetAll[i].src = "../images/avatar.png";
          imgValue!.value = "";
        }
      } else {
        resetAll[i].value = "";
      }
    }
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  });