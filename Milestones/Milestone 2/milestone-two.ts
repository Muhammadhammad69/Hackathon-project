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
  
  // Milestone 2 work is starting below.
  
  // yaha per hum sary input ko get kr rahy hain.
  const containerOne = document.querySelector(".container-one") as HTMLDivElement;
  const containerTwo = document.querySelector(".container-two") as HTMLDivElement;
  
  // const userImgFileV = userImgFile.value;
  // console.log()
  
  function imageValidation(): boolean {
    let flag: boolean;
    const userImgFile = document.querySelector(
      "#upload-profile"
    ) as HTMLInputElement;
    const userImgFileV = userImgFile.value;
    const nextSiblingEl = userImgFile.nextElementSibling as HTMLParagraphElement;
    // console.log(userImgFile.value.length);
    if (userImgFileV.length === 0) {
      nextSiblingEl.style.display = "block";
      flag = false;
    } else {
      nextSiblingEl.style.display = "none";
      flag = true;
    }
    return flag;
  }
  function nameValidation(): boolean {
    let flag: boolean;
    const getName = document.querySelector("#name") as HTMLInputElement;
    const getNameV = getName.value.trim();
    const nextSiblingEl = getName.nextElementSibling as HTMLParagraphElement;
    if (getNameV.length < 3) {
      getName.classList.add("add-red");
      nextSiblingEl.style.display = "block";
      flag = false;
      // console.log(getNameV.length);
      if (getNameV.length !== 0) {
        nextSiblingEl.innerHTML = "Please Enter Atleast 3 Characters";
      } else {
        nextSiblingEl.innerHTML = "Name is Required";
      }
    } else {
      getName.classList.remove("add-red");
      nextSiblingEl.style.display = "none";
      flag = true;
    }
    return flag;
  }
  function numberValidation(): boolean {
    let flag: boolean;
    const getPhoneNumber = document.querySelector(
      "#phone-number"
    ) as HTMLInputElement;
    const getPhoneNumberV = getPhoneNumber.value.trim();
    const nextSiblingEl = getPhoneNumber.nextElementSibling as HTMLInputElement;
    if (getPhoneNumberV.length < 11) {
      nextSiblingEl.style.display = "block";
      getPhoneNumber.classList.add("add-red");
      flag = false;
      if (getPhoneNumberV.length !== 0) {
        nextSiblingEl.innerText = "Phone Must Be 11 Characters";
      } else {
        nextSiblingEl.innerText = "Phone Number is Required";
      }
    } else {
      getPhoneNumber.classList.remove("add-red");
      nextSiblingEl.style.display = "none";
      flag = true;
    }
    return flag;
  }
  function emailValidation(): boolean {
    let flag: boolean;
    const getEmailAddress = document.querySelector(
      "#email-address"
    ) as HTMLInputElement;
    const getEmailAddressV = getEmailAddress.value.trim();
    const nextSiblingEl = getEmailAddress.nextElementSibling as HTMLInputElement;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(getEmailAddressV)) {
      getEmailAddress.classList.add("add-red");
      nextSiblingEl.style.display = "block";
      flag = false;
      nextSiblingEl.innerText = "Email is Required";
      if (getEmailAddressV.length !== 0) {
        nextSiblingEl.innerText = "Email is not Valid";
      }
    } else {
      getEmailAddress.classList.remove("add-red");
      nextSiblingEl.style.display = "none";
      flag = true;
    }
    return flag;
  }
  function professionValidation(): boolean {
    let flag: boolean;
    const getProfession = document.querySelector(
      "#profession"
    ) as HTMLInputElement;
    const getProfessionV = getProfession.value.trim();
    const nextSiblingEl =
      getProfession.nextElementSibling as HTMLParagraphElement;
    if (getProfessionV.length < 2) {
      getProfession.classList.add("add-red");
      nextSiblingEl.style.display = "block";
      flag = false;
      // console.log(getProfessionV.length);
      if (getProfessionV.length !== 0) {
        nextSiblingEl.innerHTML = "Please Enter Atleast 2 Characters";
      } else {
        nextSiblingEl.innerHTML = "Profession is Required";
      }
    } else {
      getProfession.classList.remove("add-red");
      nextSiblingEl.style.display = "none";
      flag = true;
    }
    return flag;
  }
  function eduValidation(): boolean {
    let flag: boolean;
    const getEduInfo = document.querySelector(
      "#education-info"
    ) as HTMLTextAreaElement;
    const getEduInfoV = getEduInfo.value.trim();
    const nextSiblingEl = getEduInfo.nextElementSibling as HTMLParagraphElement;
    if (getEduInfoV.length < 2) {
      getEduInfo.classList.add("add-red");
      nextSiblingEl.style.display = "block";
      flag = false;
      // console.log(getEduInfoV.length);
      if (getEduInfoV.length !== 0) {
        nextSiblingEl.innerHTML = "Please Enter Atleast 2 Characters";
      } else {
        nextSiblingEl.innerHTML = "Education is Required";
      }
    } else {
      getEduInfo.classList.remove("add-red");
      nextSiblingEl.style.display = "none";
      flag = true;
    }
    return flag;
  }
  function skillsValidation(): boolean {
    let flag: boolean;
    const getSkillsInfo = document.querySelector(
      "#skills-info"
    ) as HTMLTextAreaElement;
    const getSkillsInfoV = getSkillsInfo.value.trim();
    const nextSiblingEl =
      getSkillsInfo.nextElementSibling as HTMLParagraphElement;
    if (getSkillsInfoV.length < 2) {
      getSkillsInfo.classList.add("add-red");
      nextSiblingEl.style.display = "block";
      flag = false;
      // console.log(getSkillsInfoV.length);
      if (getSkillsInfoV.length !== 0) {
        nextSiblingEl.innerHTML = "Please Enter Atleast 2 Characters";
      } else {
        nextSiblingEl.innerHTML = "Skills is Required";
      }
    } else {
      getSkillsInfo.classList.remove("add-red");
      nextSiblingEl.style.display = "none";
      flag = true;
    }
    return flag;
  }
  function expValidation(): boolean {
    let flag: boolean;
    const getExperienceInfo = document.querySelector(
      "#experience-info"
    ) as HTMLTextAreaElement;
    const getExperienceInfoV = getExperienceInfo.value.trim();
    const nextSiblingEl =
      getExperienceInfo.nextElementSibling as HTMLParagraphElement;
    if (getExperienceInfoV.length < 2) {
      getExperienceInfo.classList.add("add-red");
      nextSiblingEl.style.display = "block";
      flag = false;
      // console.log(getExperienceInfoV.length);
      if (getExperienceInfoV.length !== 0) {
        nextSiblingEl.innerHTML = "Please Enter Atleast 2 Characters";
      } else {
        nextSiblingEl.innerHTML = "Experience is Required";
      }
    } else {
      getExperienceInfo.classList.remove("add-red");
      nextSiblingEl.style.display = "none";
      flag = true;
    }
    return flag;
  }
  function scrolling(value: string) {
    const scrollingElement = document.getElementById(value) as HTMLInputElement;
    // console.log("scrolling")
    // console.log(scrollingElement)
    window.scrollTo({
      top:(scrollingElement.offsetTop - 20),
      behavior: "smooth",
    });
  }
  
  function checkValidation(value: string): boolean {
    let isImgCheck: boolean = false;
    let isNameCheck: boolean = false;
    let isNumberCheck: boolean = false;
    let isEmailCheck: boolean = false;
    let isProfessionCheck: boolean = false;
    let isEduCheck: boolean = false;
    let isSkillsCheck: boolean = false;
    let isExperienceCheck: boolean = false;
  
    if (value === "img" || value === "all") {
      isImgCheck = imageValidation();
      (
        document.querySelector("#upload-profile") as HTMLInputElement
      ).addEventListener("input", () => {
        isImgCheck = imageValidation();
      });
    }
    if (value === "name" || value === "all") {
      isNameCheck = nameValidation();
  
      (document.querySelector("#name") as HTMLInputElement).addEventListener(
        "input",
        () => {
          isNameCheck = nameValidation();
        }
      );
    }
  
    if (value === "number" || value === "all") {
      isNumberCheck = numberValidation();
      (
        document.querySelector("#phone-number") as HTMLInputElement
      ).addEventListener("input", () => {
        isNumberCheck = numberValidation();
      });
    }
    if (value === "email" || value === "all") {
      isEmailCheck = emailValidation();
      (
        document.querySelector("#email-address") as HTMLInputElement
      ).addEventListener("input", () => {
        isEmailCheck = emailValidation();
      });
    }
    if (value === "prof" || value === "all") {
      isProfessionCheck = professionValidation();
      (
        document.querySelector("#profession") as HTMLInputElement
      ).addEventListener("input", () => {
        isProfessionCheck = professionValidation();
      });
    }
    if (value === "edu" || value === "all") {
      isEduCheck = eduValidation();
      (
        document.querySelector("#education-info") as HTMLTextAreaElement
      ).addEventListener("input", () => {
        isEduCheck = eduValidation();
      });
    }
    if (value === "skills" || value === "all") {
      isSkillsCheck = skillsValidation();
      (
        document.querySelector("#skills-info") as HTMLTextAreaElement
      ).addEventListener("input", () => {
        isSkillsCheck = skillsValidation();
      });
    }
    if (value === "exp" || value === "all") {
      isExperienceCheck = expValidation();
      (
        document.querySelector("#experience-info") as HTMLTextAreaElement
      ).addEventListener("input", () => {
        isExperienceCheck = expValidation();
      });
    }
    //  hammad
    if (value === "all") {
      switch (false) {
        case isImgCheck:
          console.log("1");
          scrolling("img-preview");
          return false;
          break;
        case isNameCheck:
          console.log("2");
          scrolling("name");
          return false;
          break;
        case isNumberCheck:
          console.log("3");
          scrolling("phone-number");
          return false;
          break;
        case isEmailCheck:
          console.log("4");
          scrolling("email-address");
          return false;
          break;
        case isProfessionCheck:
          console.log("5");
          scrolling("profession");
          return false;
          break;
        case isEduCheck:
          console.log("6");
          scrolling("education-info");
          return false;
          break;
        case isSkillsCheck:
          console.log("7");
          scrolling("skills-info");
          return false;
          break;
        case isExperienceCheck:
          console.log("8");
          scrolling("experience-info");
          return false;
          break;
        default:
          // console.log("ok");
          return true;
          break;
      }
    }
    return false;
  }
  
  function getAllInfo() {
    //  getting user input info .
    const getName = document.querySelector("#name") as HTMLInputElement;
    const getPhoneNumber = document.querySelector(
      "#phone-number"
    ) as HTMLInputElement;
    const getEmailAddress = document.querySelector(
      "#email-address"
    ) as HTMLInputElement;
    const getProfession = document.querySelector(
      "#profession"
    ) as HTMLInputElement;
    const getEducationInfo = document.querySelector(
      "#education-info"
    ) as HTMLTextAreaElement;
    const getSkillsInfo = document.querySelector(
      "#skills-info"
    ) as HTMLTextAreaElement;
    const getExperienceInfo = document.querySelector(
      "#experience-info"
    ) as HTMLTextAreaElement;
  
    //   display information id getting.
    const userNameDis = document.querySelector("#user-name") as HTMLInputElement;
    const userProfessionDis = document.querySelector(
      "#user-profession"
    ) as HTMLInputElement;
    const userEducationDis = document.querySelector(
      "#user-edu-text"
    ) as HTMLTextAreaElement;
    const userSkillsDis = document.querySelector(
      "#user-skills-text"
    ) as HTMLTextAreaElement;
    const userExperienceDis = document.querySelector(
      "#user-exp-text"
    ) as HTMLTextAreaElement;
    const userEmailDis = document.querySelector(
      "#user-email-text"
    ) as HTMLInputElement;
    const userPhoneNumberDis = document.querySelector(
      "#user-number-text"
    ) as HTMLInputElement;
    // console.dir(userEducationDis);
    const finalRes: boolean = checkValidation("all");
    // console.log("flag flag", finalRes);
    if (finalRes) {
      setTimeout(() => {
        containerOne.style.display = "none";
        containerTwo.style.display = "flex";
        window.scrollTo({
          top: 10,
          behavior:"smooth",
        });
      }, 500);
      // console.log("work display");
      userNameDis.innerText = getName.value.trim();
      userProfessionDis.innerText = getProfession.value.trim();
      userEducationDis.innerText = getEducationInfo.value.trim();
      userSkillsDis.innerText = getSkillsInfo.value.trim();
      userExperienceDis.innerText = getExperienceInfo.value.trim();
      userEmailDis.innerText = getEmailAddress.value.trim();
      userPhoneNumberDis.innerText = getPhoneNumber.value.trim();
    }
  }