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
        cvImgPre.src =
          (_b = e.target) === null || _b === void 0 ? void 0 : _b.result;
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
    } else {
      resetAll[i].value = "";
    }
  }
});

// Milestone 2 work is starting below.

function getAllInfo() {
  const containerOne = document.querySelector(".container-one");
  const containerTwo = document.querySelector(".container-two");
  // user input information getting id variables.
  const userImgFileV = document.querySelector("#upload-profile").value;
  const getNameV = document.querySelector("#name").value.trim();
  const getPhoneNumberV = document.querySelector("#phone-number").value.trim();
  const getEmailAddressV = document
    .querySelector("#email-address")
    .value.trim();
  const getProfessionV = document.querySelector("#profession").value.trim();
  const getEducationInfoV = document
    .querySelector("#education-info")
    .value.trim();
  const getSkillsInfoV = document.querySelector("#skills-info").value.trim();
  const getExperienceInfoV = document
    .querySelector("#experience-info")
    .value.trim();
  //   display information id getting.
  const userNameDis = document.querySelector("#user-name");
  const userProfessionDis = document.querySelector("#user-profession");
  const userEducationDis = document.querySelector("#user-edu-text");
  const userSkillsDis = document.querySelector("#user-skills-text");
  const userExperienceDis = document.querySelector("#user-exp-text");
  const userEmailDis = document.querySelector("#user-email-text");
  const userPhoneNumberDis = document.querySelector("#user-number-text");
  console.dir(userEducationDis);
  const valueLen = 0;
  let flag = false;
  function sweetAlertFire(value) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: value,
    });
  }
  if (userImgFileV.length !== 0) {
    // console.log("ok");
    // console.log(getEducationInfoV.trim().length);
    switch (valueLen) {
      case getNameV.length:
        console.log("ERROR");
        sweetAlertFire("Please Enter Name");
        break;
      case getPhoneNumberV.length:
        sweetAlertFire("Please Enter Phone Number");
        break;
      case getEmailAddressV.length:
        sweetAlertFire("Please Enter Email Address");
        break;
      case getProfessionV.length:
        sweetAlertFire("Please Enter Profession ");
        break;
      case getEducationInfoV.length:
        sweetAlertFire("Please Enter Education");
        break;
      case getSkillsInfoV.length:
        sweetAlertFire("Please Enter Skills ");
        break;
      case getExperienceInfoV.length:
        sweetAlertFire("Please Enter Experience");
        break;
      default:
        console.log("DONE");
        flag = true;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 2000,
        });

        break;
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Select Image",
    });
  }
  if (flag) {
    setTimeout(() => {
      containerOne.style.display = "none";
      containerTwo.style.display = "flex";
      window.scrollTo(0, 0);
    }, 2000);
    console.log("work display");
    userNameDis.innerText = getNameV;
    userProfessionDis.innerText = getProfessionV;
    userEducationDis.innerText = getEducationInfoV;
    userSkillsDis.innerText = getSkillsInfoV;
    userExperienceDis.innerText = getExperienceInfoV;
    userEmailDis.innerText = getEmailAddressV;
    userPhoneNumberDis.innerText = getPhoneNumberV;
  }
}

//Milestone 3 work is starting below

const editResume = document.querySelector("#edit");
editResume.addEventListener("click", () => {
  const containerOne = document.querySelector(".container-one");
  //changingResumeText or changingResetText variable me hum generte-cv or reset k button ko get kr rahy hain or is ka inner-text change kr rahy hain.
  const changingResumeText =
    document.querySelector("#generate-cv");
  const changingResetText = document.getElementById("reset");

  containerOne.style.display = "flex";
  window.scrollTo(0, 20);
  changingResumeText.innerText = "Update Resume";
  changingResetText.innerText = "Create New Resume"
  console.dir(changingResetText);

  console.log("hi");
});
