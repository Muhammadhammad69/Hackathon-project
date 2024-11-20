function changeImage(value: string) {
  const imgValue = document.querySelector(
    "#upload-profile"
  ) as HTMLInputElement;
  const imgPreview = document.querySelector("#img-preview") as HTMLImageElement;
  const cvImgPre = document.querySelector("#user-profile") as HTMLImageElement;
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
        resetAll![i].attributes![0].textContent!.trim() !==
        "../images/avatar.png"
      ) {
        resetAll[i].src = "../images/avatar.png";
        imgValue!.value = "";
        // console.log("hi")
      }
    } else {
      resetAll[i].value = "";
    }
  }
  window.scrollTo({
    top: 20,
    behavior: "smooth",
  });
  setTimeout(() => {
    location.reload();
  }, 1000);
});

// Milestone 2 work is starting below.

// yaha per hum sary input ko get kr rahy hain.
const containerOne = document.querySelector(".container-one") as HTMLDivElement;
const containerTwo = document.querySelector(".container-two") as HTMLDivElement;

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

// ya (inputElementValid) function resume k sary input element ko get krta hain.
function inputElementValid(
  id: string,
  elementName: string,
  characters: number
): boolean {
  let flag: boolean;
  const getElement = document.getElementById(id) as HTMLInputElement;
  console.dir(getElement);
  const getElementV = getElement.value.trim();
  const nextSiblingEl = getElement.nextElementSibling as HTMLParagraphElement;
  if (getElementV.length < characters) {
    getElement.classList.add("add-red");
    nextSiblingEl.style.display = "block";
    flag = false;
    // console.log(getElementV.length);
    if (getElementV.length !== 0) {
      nextSiblingEl.innerHTML = `Please Enter Atleast ${characters} Characters`;
    } else {
      nextSiblingEl.innerHTML = `${elementName} is Required`;
    }
  } else {
    getElement.classList.remove("add-red");
    nextSiblingEl.style.display = "none";
    flag = true;
  }
  return flag;
}
//ya (textareaElementValid) function resume k sary textarea element ko get krta hain.
function textareaElementValid(id: string, elementName: string): boolean {
  let flag: boolean;
  const getElement = document.getElementById(id) as HTMLTextAreaElement;
  console.dir(getElement);
  const getElementV = getElement.value.trim();
  const nextSiblingEl = getElement.nextElementSibling as HTMLParagraphElement;
  if (getElementV.length < 2) {
    getElement.classList.add("add-red");
    nextSiblingEl.style.display = "block";
    flag = false;
    // console.log(getElementV.length);
    if (getElementV.length !== 0) {
      nextSiblingEl.innerHTML = "Please Enter Atleast 2 Characters";
    } else {
      nextSiblingEl.innerHTML = `${elementName} is Required`;
    }
  } else {
    getElement.classList.remove("add-red");
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
    top: scrollingElement.offsetTop - 20,
    behavior: "smooth",
  });
}
//checkValidation function sary input or textarea ko separately call kr k validation requirement k check karay ga.
function checkValidation(value: string): boolean {
  let isImgCheck: boolean = false;
  let isUsernameCheck: boolean = false;
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
  if (value === "username" || value === "all") {
    isUsernameCheck = inputElementValid("username", "Username", 3);

    (document.querySelector("#username") as HTMLInputElement).addEventListener(
      "input",
      () => {
        isUsernameCheck = inputElementValid("username", "Username", 3);
      }
    );
  }
  if (value === "name" || value === "all") {
    isNameCheck = inputElementValid("name", "Name", 3);

    (document.querySelector("#name") as HTMLInputElement).addEventListener(
      "input",
      () => {
        isNameCheck = inputElementValid("name", "Name", 3);
      }
    );
  }

  if (value === "number" || value === "all") {
    isNumberCheck = inputElementValid("phone-number", "Phone Number", 11);
    (
      document.querySelector("#phone-number") as HTMLInputElement
    ).addEventListener("input", () => {
      isNumberCheck = inputElementValid("phone-number", "Phone Number", 11);
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
    isProfessionCheck = inputElementValid("profession", "Profession", 2);
    (
      document.querySelector("#profession") as HTMLInputElement
    ).addEventListener("input", () => {
      isProfessionCheck = inputElementValid("profession", "Profession", 2);
    });
  }
  if (value === "edu" || value === "all") {
    isEduCheck = textareaElementValid("education-info", "Education");
    (
      document.querySelector("#education-info") as HTMLTextAreaElement
    ).addEventListener("input", () => {
      isEduCheck = textareaElementValid("education-info", "Education");
    });
  }
  if (value === "skills" || value === "all") {
    isSkillsCheck = textareaElementValid("skills-info", "Skills");
    (
      document.querySelector("#skills-info") as HTMLTextAreaElement
    ).addEventListener("input", () => {
      isSkillsCheck = textareaElementValid("skills-info", "Skills");
    });
  }
  if (value === "exp" || value === "all") {
    isExperienceCheck = textareaElementValid("experience-info", "Experience");
    (
      document.querySelector("#experience-info") as HTMLTextAreaElement
    ).addEventListener("input", () => {
      isExperienceCheck = textareaElementValid("experience-info", "Experience");
    });
  }
  //  hammad
  if (value === "all") {
    switch (false) {
      case isUsernameCheck:
        console.log("hi");
        scrolling("username");
        return false;
      case isImgCheck:
        // console.log("1");
        scrolling("img-preview");
        return false;

      case isNameCheck:
        // console.log("2");
        scrolling("name");
        return false;

      case isNumberCheck:
        // console.log("3");
        scrolling("phone-number");
        return false;

      case isEmailCheck:
        // console.log("4");
        scrolling("email-address");
        return false;

      case isProfessionCheck:
        // console.log("5");
        scrolling("profession");
        return false;

      case isEduCheck:
        // console.log("6");
        scrolling("education-info");
        return false;

      case isSkillsCheck:
        // console.log("7");
        scrolling("skills-info");
        return false;

      case isExperienceCheck:
        // console.log("8");
        scrolling("experience-info");
        return false;

      default:
        // console.log("ok");
        return true;
    }
  }
  return false;
}
// getAllInfo k function me hum sary user ki input values ko collect krrahy hain or sath me is value ko resume add kr raha hain or hum sary inputs or textarea ki validation k function ko call bhi kr rahy hian.
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
        behavior: "smooth",
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

//Milestone 3 work is starting below

const createResume = document.querySelector("#create-res") as HTMLButtonElement;
createResume.addEventListener("click", () => {
  const containerOne = document.querySelector(
    ".container-one"
  ) as HTMLDivElement;
  const containerTwo = document.querySelector(
    ".container-two"
  ) as HTMLDivElement;
  containerOne.style.display = "flex";
  containerTwo.style.display = "none";
  window.scrollTo({
    top: 10,
    behavior: "smooth",
  });
  console.log("hi");
});

function editValue(getValue: string) {
  let targetButton = event?.target as HTMLButtonElement;
  let eventValue = targetButton.innerText.toLowerCase().trim();
  //ya per hum generate resume k element ko get kr rahy taki us ko hum editable me convert kr sakay.
  //first getting name profession element.
  const getName = document.getElementById("user-name") as HTMLHeadingElement;
  const getProf = document.querySelector(
    "#user-profession"
  ) as HTMLHeadingElement;
  const getEdu = document.getElementById("user-edu-text") as HTMLHeadingElement;
  const getSkills = document.getElementById(
    "user-skills-text"
  ) as HTMLHeadingElement;
  const getExp = document.getElementById("user-exp-text") as HTMLHeadingElement;
  // getting contact details element
  const getEmail = document.getElementById(
    "user-email-text"
  ) as HTMLHeadingElement;
  const getNumber = document.getElementById(
    "user-number-text"
  ) as HTMLHeadingElement;

  // or ap hum bari bari condition k madad say check kr rahy hain k user na kis edit per click kr hain or phir hum us content me editable kr degay contentediable attribute ki madad say.
  if (getValue === "change image") {
    const createInputEl = document.createElement("input");
    // console.log()
    createInputEl.type = "file";
    createInputEl.accept = ".jpeg, .jpg, .png";
    createInputEl.click();
    // console.log(createInputEl)
    createInputEl.addEventListener("change", () => {
      console.dir(createInputEl.files![0]);
      const cvImagePre = document.querySelector(
        "#user-profile"
      ) as HTMLImageElement;
      const imgFile = createInputEl.files![0];
      // console.log(typeof imgFile);
      if (imgFile) {
        const readEditImg = new FileReader();
        readEditImg.onload = () => {
          let result: any = readEditImg.result;
          cvImagePre.src = result;
        };
        readEditImg.readAsDataURL(imgFile);
      }
    });
  }

  if (getValue === "name" && eventValue === "edit") {
    console.log("hiname");
    targetButton.innerText = "Save";
    getName.setAttribute("contenteditable", "true");
    getProf.setAttribute("contenteditable", "true");
    getName.focus();
  } else if (getValue === "name" && eventValue === "save") {
    // console.log("save123");
    targetButton.innerText = "Edit";
    getName.removeAttribute("contenteditable");
    getProf.removeAttribute("contenteditable");
  }
  if (getValue === "education" && eventValue === "edit") {
    targetButton.innerHTML = "Save";
    getEdu.setAttribute("contenteditable", "true");
    getEdu.focus();
  } else if (getValue === "education") {
    targetButton.innerHTML = "Edit";
    getEdu.removeAttribute("contenteditable");
  }
  if (getValue === "skills" && eventValue === "edit") {
    targetButton.innerHTML = "Save";
    getSkills.setAttribute("contenteditable", "true");
    getSkills.focus();
  } else if (getValue === "skills") {
    targetButton.innerHTML = "Edit";
    getSkills.removeAttribute("contenteditable");
  }
  if (getValue === "experience" && eventValue === "edit") {
    targetButton.innerHTML = "Save";
    getExp.setAttribute("contenteditable", "true");
    getExp.focus();
  } else if (getValue === "experience") {
    targetButton.innerHTML = "Edit";
    getExp.removeAttribute("contenteditable");
  }
  if (getValue === "contact" && eventValue === "edit") {
    targetButton.innerHTML = "Save";
    getEmail.setAttribute("contenteditable", "true");
    getNumber.setAttribute("contenteditable", "true");
    getEmail.focus();
    console.log("outside the event");
    getNumber.oninput = () => {
      // console.log("hiKeyUP");
      const getCurrentValue = getNumber.innerText;
      // const finalOutput:number[] = []
      let allowedCharacter = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        " ",
      ];
      let finalValue = "";
      for (let i = 0; i < getCurrentValue.length; i++) {
        let code = getCurrentValue.charCodeAt(i);
        // if (48 <= code && code <= 57 ) {
        //   finalValue += getCurrentValue[i];

        // }
        if (allowedCharacter.includes(getCurrentValue[i])) {
          finalValue += getCurrentValue[i];
        }
        // console.log(getCurrentValue.charCodeAt(i));
        if (i === getCurrentValue.length - 1) {
        }
      }
      getNumber.innerText = finalValue;
      const range = document.createRange();
      const selection = window.getSelection();
      range.setStart(getNumber, getNumber.childNodes.length);
      range.collapse(true);
      selection?.removeAllRanges();
      selection?.addRange(range);
      console.log("final value =>", finalValue);
      // console.log(getCurrentValue.charCodeAt(0));
    };

    // getNumber.addEventListener("keypress", numberCheck);
  } else if (getValue === "contact") {
    targetButton.innerHTML = "Edit";
    getEmail.removeAttribute("contenteditable");
    getNumber.removeAttribute("contenteditable");
    // getNumber.removeEventListener("keypress", numberCheck);
    console.log(getNumber.nodeType);
  }
  // console.dir(value);
}
//ya editBtn k function resume me edit button ko show karay ga takay user directly kesi bhi section edit kr sakay .
const editResume = document.getElementById("edit-Resume") as HTMLInputElement;
editResume.addEventListener("click", editBtn);
function editBtn() {
  const editBtnValue = (event?.target as HTMLButtonElement).innerText
    .toLowerCase()
    .trim();
  // console.log(editBtnValue);
  const editBtnAll = document.querySelectorAll(".edit");
  let displayValue = "block";
  (event?.target as HTMLButtonElement).innerText = "Save Changes";
  // console.log(editBtnAll);
  if (editBtnValue === "save changes") {
    // console.log("hi");
    (event?.target as HTMLButtonElement).innerText = "Edit Resume";
    displayValue = "none";
  }
  for (let i = 0; i < editBtnAll.length; i++) {
    (editBtnAll[i] as HTMLButtonElement).style.display = displayValue;
  }
}
//Milestone 4 Work has started.

//Handle download Resume by link.

//changeDisplayStyle function k kam generated resume k all buttons k display condition k according change krna hain.
function changeDisplayStyle(
  dValueEdit: string,
  downloadBtn: string,
  conditionValue: string
) {
  const editAllBtn = document.querySelectorAll(
    ".edit"
  ) as NodeListOf<HTMLButtonElement>;
  //main create and edit btn getting
  const createEditBtn = document.querySelector(
    ".create-edit-btn"
  ) as HTMLDivElement;
  //getting all download btns
  const downBtn = document.querySelector(".download-button") as HTMLDivElement;
  const editResumeM = (
    document.querySelector("#edit-Resume") as HTMLButtonElement
  ).value
    .toLowerCase()
    .trim();
  if (
    (conditionValue === "none" &&
      (editResumeM === "edit resume" || editResumeM === "save changes")) ||
    (conditionValue === "block" && editResumeM === "save changes")
  ) {
    for (let i = 0; i < editAllBtn.length; i++) {
      editAllBtn[i].style.display = dValueEdit;
    }
  }
  createEditBtn.style.display = downloadBtn;
  downBtn.style.display = downloadBtn;
}

const downloadLink = document.getElementById(
  "download-res-link"
) as HTMLAnchorElement;
downloadLink?.addEventListener("click", async function (event) {
  // Default behavior ko rokna
  event.preventDefault();

  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const uniquePath = `resume_${username.trim().replace(/\s+/g, "_")}_cv.html`;

  try {
    // CSS file fetch karna
    const data = await fetch("./milestone-four-style.css");
    const styleText = await data.text();
    // console.log(styleText);
    changeDisplayStyle("none", "none", "none");
    const content = `
      <html>
        <head>
          <title>${username}</title>
          <style>${styleText}</style>
        </head>
        <body>
          ${containerTwo.outerHTML}
        </body>
      </html>
    `;
    // console.log("generated content", staticInnerHtml.outerHTML);
    // `download` ke liye `href` aur `download` attribute set karna
    const createEl = document.createElement("a") as HTMLAnchorElement;

    createEl.href =
      "data:text/html;charset=utf-8," + encodeURIComponent(content);
    createEl.download = uniquePath;

    changeDisplayStyle("block", "flex", "block");
    // Simulate click to trigger the download
    createEl.click();
  } catch (error) {
    console.error("Error while fetching or creating the file:", error);
  }
});

//handle download Resume by Image.

const downloadJpeg = document.querySelector(
  "#download-jpeg"
) as HTMLAnchorElement;
downloadJpeg.addEventListener("click", () => {
  // ya per menay generated resume k andar jo button hain unko get kr k unka display none kr raha hu tak image ki lock achi lagy.
  //first all edit btn
  const username = (
    document.getElementById("username") as HTMLInputElement
  ).value.trim();
  changeDisplayStyle("none", "none", "none");
  containerTwo.style.marginLeft = "0";
  domtoimage
    .toJpeg(containerTwo)
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${username.replace(/\s+/g, "_")}.jpeg`;
      changeDisplayStyle("block", "flex", "block");
      containerTwo.style.marginLeft = "auto";
      link.click();
    })
    .catch((err) => {
      console.log(err);
    });
});

//handle download resume by pdf.
const downloadPdf = document.querySelector(
  "#download-pdf"
) as HTMLButtonElement;
downloadPdf.addEventListener("click", () => {
  // console.log(containerTwo)
  (document.querySelector(".container-one") as HTMLDivElement).style.display =
    "none";
  changeDisplayStyle("none", "none", "none");
  const containerTwo = document.querySelector(
    ".container-two"
  ) as HTMLDivElement;
  const styleDiv = containerTwo.cloneNode(true) as HTMLDivElement;
  styleDiv.style.width = "95%";
  changeDisplayStyle("block", "flex", "block");
  console.log(containerTwo);
  const options = {
    margin: 0.2,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 0.9 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().from(styleDiv).set(options).save();
  // containerTwo.style.width = "65%";
});
