"use strict";
function changeImage(value) {
    const imgValue = document.querySelector("#upload-profile");
    const imgPreview = document.querySelector("#img-preview");
    const cvImgPre = document.querySelector("#user-profile");
    // console.dir(imgValue.value.length);
    const file = imgValue.files[0];
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
        const readImg = new FileReader();
        readImg.onload = () => {
            const result = readImg.result;
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
    const resetAll = document.querySelectorAll(".reset-all");
    const imgValue = document.querySelector("#upload-profile");
    for (let i = 0; i < resetAll.length; i++) {
        if (resetAll[i].tagName.toLowerCase().trim() === "img") {
            if (resetAll[i].attributes[0].textContent.trim() !==
                "../images/avatar.png") {
                resetAll[i].src = "../images/avatar.png";
                imgValue.value = "";
                // console.log("hi")
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
    setTimeout(() => {
        location.reload();
    }, 1000);
});
// Milestone 2 work is starting below.
// yaha per hum sary input ko get kr rahy hain.
const containerOne = document.querySelector(".container-one");
const containerTwo = document.querySelector(".container-two");
function imageValidation() {
    let flag;
    const userImgFile = document.querySelector("#upload-profile");
    const userImgFileV = userImgFile.value;
    const nextSiblingEl = userImgFile.nextElementSibling;
    // console.log(userImgFile.value.length);
    if (userImgFileV.length === 0) {
        nextSiblingEl.style.display = "block";
        flag = false;
    }
    else {
        nextSiblingEl.style.display = "none";
        flag = true;
    }
    return flag;
}
function emailValidation() {
    let flag;
    const getEmailAddress = document.querySelector("#email-address");
    const getEmailAddressV = getEmailAddress.value.trim();
    const nextSiblingEl = getEmailAddress.nextElementSibling;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(getEmailAddressV)) {
        getEmailAddress.classList.add("add-red");
        nextSiblingEl.style.display = "block";
        flag = false;
        nextSiblingEl.innerText = "Email is Required";
        if (getEmailAddressV.length !== 0) {
            nextSiblingEl.innerText = "Email is not Valid";
        }
    }
    else {
        getEmailAddress.classList.remove("add-red");
        nextSiblingEl.style.display = "none";
        flag = true;
    }
    return flag;
}
// ya (inputElementValid) function resume k sary input element ko get krta hain.
function inputElementValid(id, elementName, characters) {
    let flag;
    const getElement = document.getElementById(id);
    console.dir(getElement);
    const getElementV = getElement.value.trim();
    const nextSiblingEl = getElement.nextElementSibling;
    if (getElementV.length < characters) {
        getElement.classList.add("add-red");
        nextSiblingEl.style.display = "block";
        flag = false;
        // console.log(getElementV.length);
        if (getElementV.length !== 0) {
            nextSiblingEl.innerHTML = `Please Enter Atleast ${characters} Characters`;
        }
        else {
            nextSiblingEl.innerHTML = `${elementName} is Required`;
        }
    }
    else {
        getElement.classList.remove("add-red");
        nextSiblingEl.style.display = "none";
        flag = true;
    }
    return flag;
}
//ya (textareaElementValid) function resume k sary textarea element ko get krta hain.
function textareaElementValid(id, elementName) {
    let flag;
    const getElement = document.getElementById(id);
    console.dir(getElement);
    const getElementV = getElement.value.trim();
    const nextSiblingEl = getElement.nextElementSibling;
    if (getElementV.length < 2) {
        getElement.classList.add("add-red");
        nextSiblingEl.style.display = "block";
        flag = false;
        // console.log(getElementV.length);
        if (getElementV.length !== 0) {
            nextSiblingEl.innerHTML = "Please Enter Atleast 2 Characters";
        }
        else {
            nextSiblingEl.innerHTML = `${elementName} is Required`;
        }
    }
    else {
        getElement.classList.remove("add-red");
        nextSiblingEl.style.display = "none";
        flag = true;
    }
    return flag;
}
function scrolling(value) {
    const scrollingElement = document.getElementById(value);
    // console.log("scrolling")
    // console.log(scrollingElement)
    window.scrollTo({
        top: scrollingElement.offsetTop - 20,
        behavior: "smooth",
    });
}
//checkValidation function sary input or textarea ko separately call kr k validation requirement k check karay ga.
function checkValidation(value) {
    let isImgCheck = false;
    let isUsernameCheck = false;
    let isNameCheck = false;
    let isNumberCheck = false;
    let isEmailCheck = false;
    let isProfessionCheck = false;
    let isEduCheck = false;
    let isSkillsCheck = false;
    let isExperienceCheck = false;
    if (value === "img" || value === "all") {
        isImgCheck = imageValidation();
        document.querySelector("#upload-profile").addEventListener("input", () => {
            isImgCheck = imageValidation();
        });
    }
    if (value === "username" || value === "all") {
        isUsernameCheck = inputElementValid("username", "Username", 3);
        document.querySelector("#username").addEventListener("input", () => {
            isUsernameCheck = inputElementValid("username", "Username", 3);
        });
    }
    if (value === "name" || value === "all") {
        isNameCheck = inputElementValid("name", "Name", 3);
        document.querySelector("#name").addEventListener("input", () => {
            isNameCheck = inputElementValid("name", "Name", 3);
        });
    }
    if (value === "number" || value === "all") {
        isNumberCheck = inputElementValid("phone-number", "Phone Number", 11);
        document.querySelector("#phone-number").addEventListener("input", () => {
            isNumberCheck = inputElementValid("phone-number", "Phone Number", 11);
        });
    }
    if (value === "email" || value === "all") {
        isEmailCheck = emailValidation();
        document.querySelector("#email-address").addEventListener("input", () => {
            isEmailCheck = emailValidation();
        });
    }
    if (value === "prof" || value === "all") {
        isProfessionCheck = inputElementValid("profession", "Profession", 2);
        document.querySelector("#profession").addEventListener("input", () => {
            isProfessionCheck = inputElementValid("profession", "Profession", 2);
        });
    }
    if (value === "edu" || value === "all") {
        isEduCheck = textareaElementValid("education-info", "Education");
        document.querySelector("#education-info").addEventListener("input", () => {
            isEduCheck = textareaElementValid("education-info", "Education");
        });
    }
    if (value === "skills" || value === "all") {
        isSkillsCheck = textareaElementValid("skills-info", "Skills");
        document.querySelector("#skills-info").addEventListener("input", () => {
            isSkillsCheck = textareaElementValid("skills-info", "Skills");
        });
    }
    if (value === "exp" || value === "all") {
        isExperienceCheck = textareaElementValid("experience-info", "Experience");
        document.querySelector("#experience-info").addEventListener("input", () => {
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
    const getName = document.querySelector("#name");
    const getPhoneNumber = document.querySelector("#phone-number");
    const getEmailAddress = document.querySelector("#email-address");
    const getProfession = document.querySelector("#profession");
    const getEducationInfo = document.querySelector("#education-info");
    const getSkillsInfo = document.querySelector("#skills-info");
    const getExperienceInfo = document.querySelector("#experience-info");
    //   display information id getting.
    const userNameDis = document.querySelector("#user-name");
    const userProfessionDis = document.querySelector("#user-profession");
    const userEducationDis = document.querySelector("#user-edu-text");
    const userSkillsDis = document.querySelector("#user-skills-text");
    const userExperienceDis = document.querySelector("#user-exp-text");
    const userEmailDis = document.querySelector("#user-email-text");
    const userPhoneNumberDis = document.querySelector("#user-number-text");
    // console.dir(userEducationDis);
    const finalRes = checkValidation("all");
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
const createResume = document.querySelector("#create-res");
createResume.addEventListener("click", () => {
    const containerOne = document.querySelector(".container-one");
    const containerTwo = document.querySelector(".container-two");
    containerOne.style.display = "flex";
    containerTwo.style.display = "none";
    window.scrollTo({
        top: 10,
        behavior: "smooth",
    });
    console.log("hi");
});
function editValue(getValue) {
    let targetButton = event?.target;
    let eventValue = targetButton.innerText.toLowerCase().trim();
    //ya per hum generate resume k element ko get kr rahy taki us ko hum editable me convert kr sakay.
    //first getting name profession element.
    const getName = document.getElementById("user-name");
    const getProf = document.querySelector("#user-profession");
    const getEdu = document.getElementById("user-edu-text");
    const getSkills = document.getElementById("user-skills-text");
    const getExp = document.getElementById("user-exp-text");
    // getting contact details element
    const getEmail = document.getElementById("user-email-text");
    const getNumber = document.getElementById("user-number-text");
    // or ap hum bari bari condition k madad say check kr rahy hain k user na kis edit per click kr hain or phir hum us content me editable kr degay contentediable attribute ki madad say.
    if (getValue === "change image") {
        const createInputEl = document.createElement("input");
        // console.log()
        createInputEl.type = "file";
        createInputEl.accept = ".jpeg, .jpg, .png";
        createInputEl.click();
        // console.log(createInputEl)
        createInputEl.addEventListener("change", () => {
            console.dir(createInputEl.files[0]);
            const cvImagePre = document.querySelector("#user-profile");
            const imgFile = createInputEl.files[0];
            // console.log(typeof imgFile);
            if (imgFile) {
                const readEditImg = new FileReader();
                readEditImg.onload = () => {
                    let result = readEditImg.result;
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
    }
    else if (getValue === "name" && eventValue === "save") {
        // console.log("save123");
        targetButton.innerText = "Edit";
        getName.removeAttribute("contenteditable");
        getProf.removeAttribute("contenteditable");
    }
    if (getValue === "education" && eventValue === "edit") {
        targetButton.innerHTML = "Save";
        getEdu.setAttribute("contenteditable", "true");
        getEdu.focus();
    }
    else if (getValue === "education") {
        targetButton.innerHTML = "Edit";
        getEdu.removeAttribute("contenteditable");
    }
    if (getValue === "skills" && eventValue === "edit") {
        targetButton.innerHTML = "Save";
        getSkills.setAttribute("contenteditable", "true");
        getSkills.focus();
    }
    else if (getValue === "skills") {
        targetButton.innerHTML = "Edit";
        getSkills.removeAttribute("contenteditable");
    }
    if (getValue === "experience" && eventValue === "edit") {
        targetButton.innerHTML = "Save";
        getExp.setAttribute("contenteditable", "true");
        getExp.focus();
    }
    else if (getValue === "experience") {
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
    }
    else if (getValue === "contact") {
        targetButton.innerHTML = "Edit";
        getEmail.removeAttribute("contenteditable");
        getNumber.removeAttribute("contenteditable");
        // getNumber.removeEventListener("keypress", numberCheck);
        console.log(getNumber.nodeType);
    }
    // console.dir(value);
}
//ya editBtn k function resume me edit button ko show karay ga takay user directly kesi bhi section edit kr sakay .
const editResume = document.getElementById("edit-Resume");
editResume.addEventListener("click", editBtn);
function editBtn() {
    const editBtnValue = (event?.target).innerText
        .toLowerCase()
        .trim();
    // console.log(editBtnValue);
    const editBtnAll = document.querySelectorAll(".edit");
    let displayValue = "block";
    (event?.target).innerText = "Save Changes";
    // console.log(editBtnAll);
    if (editBtnValue === "save changes") {
        // console.log("hi");
        (event?.target).innerText = "Edit Resume";
        displayValue = "none";
    }
    for (let i = 0; i < editBtnAll.length; i++) {
        editBtnAll[i].style.display = displayValue;
    }
}
//Milestone 4 Work has started.
//Handle download Resume by link.
//changeDisplayStyle function k kam generated resume k all buttons k display condition k according change krna hain.
function changeDisplayStyle(dValueEdit, downloadBtn, conditionValue) {
    const editAllBtn = document.querySelectorAll(".edit");
    //main create and edit btn getting
    const createEditBtn = document.querySelector(".create-edit-btn");
    //getting all download btns
    const downBtn = document.querySelector(".download-button");
    const editResumeM = document.querySelector("#edit-Resume").value
        .toLowerCase()
        .trim();
    if ((conditionValue === "none" &&
        (editResumeM === "edit resume" || editResumeM === "save changes")) ||
        (conditionValue === "block" && editResumeM === "save changes")) {
        for (let i = 0; i < editAllBtn.length; i++) {
            editAllBtn[i].style.display = dValueEdit;
        }
    }
    createEditBtn.style.display = downloadBtn;
    downBtn.style.display = downloadBtn;
}
const downloadLink = document.getElementById("download-res-link");
downloadLink?.addEventListener("click", async function (event) {
    // Default behavior ko rokna
    event.preventDefault();
    const username = document.getElementById("username")
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
        const createEl = document.createElement("a");
        createEl.href =
            "data:text/html;charset=utf-8," + encodeURIComponent(content);
        createEl.download = uniquePath;
        changeDisplayStyle("block", "flex", "block");
        // Simulate click to trigger the download
        createEl.click();
    }
    catch (error) {
        console.error("Error while fetching or creating the file:", error);
    }
});
//handle download Resume by Image.
const downloadJpeg = document.querySelector("#download-jpeg");
downloadJpeg.addEventListener("click", () => {
    // ya per menay generated resume k andar jo button hain unko get kr k unka display none kr raha hu tak image ki lock achi lagy.
    //first all edit btn
    const username = document.getElementById("username").value.trim();
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
const downloadPdf = document.querySelector("#download-pdf");
downloadPdf.addEventListener("click", () => {
    // console.log(containerTwo)
    document.querySelector(".container-one").style.display =
        "none";
    changeDisplayStyle("none", "none", "none");
    const containerTwo = document.querySelector(".container-two");
    const styleDiv = containerTwo.cloneNode(true);
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
