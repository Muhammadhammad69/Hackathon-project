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
// Milestone 2 work is starting below.
// yaha per hum sary input ko get kr rahy hain.
var containerOne = document.querySelector(".container-one");
var containerTwo = document.querySelector(".container-two");
// const userImgFileV = userImgFile.value;
// console.log()
function imageValidation() {
    var flag;
    var userImgFile = document.querySelector("#upload-profile");
    var userImgFileV = userImgFile.value;
    var nextSiblingEl = userImgFile.nextElementSibling;
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
function nameValidation() {
    var flag;
    var getName = document.querySelector("#name");
    var getNameV = getName.value.trim();
    var nextSiblingEl = getName.nextElementSibling;
    if (getNameV.length < 3) {
        getName.classList.add("add-red");
        nextSiblingEl.style.display = "block";
        flag = false;
        // console.log(getNameV.length);
        if (getNameV.length !== 0) {
            nextSiblingEl.innerHTML = "Please Enter Atleast 3 Characters";
        }
        else {
            nextSiblingEl.innerHTML = "Name is Required";
        }
    }
    else {
        getName.classList.remove("add-red");
        nextSiblingEl.style.display = "none";
        flag = true;
    }
    return flag;
}
function numberValidation() {
    var flag;
    var getPhoneNumber = document.querySelector("#phone-number");
    var getPhoneNumberV = getPhoneNumber.value.trim();
    var nextSiblingEl = getPhoneNumber.nextElementSibling;
    if (getPhoneNumberV.length < 11) {
        nextSiblingEl.style.display = "block";
        getPhoneNumber.classList.add("add-red");
        flag = false;
        if (getPhoneNumberV.length !== 0) {
            nextSiblingEl.innerText = "Phone Must Be 11 Characters";
        }
        else {
            nextSiblingEl.innerText = "Phone Number is Required";
        }
    }
    else {
        getPhoneNumber.classList.remove("add-red");
        nextSiblingEl.style.display = "none";
        flag = true;
    }
    return flag;
}
function emailValidation() {
    var flag;
    var getEmailAddress = document.querySelector("#email-address");
    var getEmailAddressV = getEmailAddress.value.trim();
    var nextSiblingEl = getEmailAddress.nextElementSibling;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
function professionValidation() {
    var flag;
    var getProfession = document.querySelector("#profession");
    var getProfessionV = getProfession.value.trim();
    var nextSiblingEl = getProfession.nextElementSibling;
    if (getProfessionV.length < 2) {
        getProfession.classList.add("add-red");
        nextSiblingEl.style.display = "block";
        flag = false;
        // console.log(getProfessionV.length);
        if (getProfessionV.length !== 0) {
            nextSiblingEl.innerHTML = "Please Enter Atleast 2 Characters";
        }
        else {
            nextSiblingEl.innerHTML = "Profession is Required";
        }
    }
    else {
        getProfession.classList.remove("add-red");
        nextSiblingEl.style.display = "none";
        flag = true;
    }
    return flag;
}
function eduValidation() {
    var flag;
    var getEduInfo = document.querySelector("#education-info");
    var getEduInfoV = getEduInfo.value.trim();
    var nextSiblingEl = getEduInfo.nextElementSibling;
    if (getEduInfoV.length < 2) {
        getEduInfo.classList.add("add-red");
        nextSiblingEl.style.display = "block";
        flag = false;
        // console.log(getEduInfoV.length);
        if (getEduInfoV.length !== 0) {
            nextSiblingEl.innerHTML = "Please Enter Atleast 2 Characters";
        }
        else {
            nextSiblingEl.innerHTML = "Education is Required";
        }
    }
    else {
        getEduInfo.classList.remove("add-red");
        nextSiblingEl.style.display = "none";
        flag = true;
    }
    return flag;
}
function skillsValidation() {
    var flag;
    var getSkillsInfo = document.querySelector("#skills-info");
    var getSkillsInfoV = getSkillsInfo.value.trim();
    var nextSiblingEl = getSkillsInfo.nextElementSibling;
    if (getSkillsInfoV.length < 2) {
        getSkillsInfo.classList.add("add-red");
        nextSiblingEl.style.display = "block";
        flag = false;
        // console.log(getSkillsInfoV.length);
        if (getSkillsInfoV.length !== 0) {
            nextSiblingEl.innerHTML = "Please Enter Atleast 2 Characters";
        }
        else {
            nextSiblingEl.innerHTML = "Skills is Required";
        }
    }
    else {
        getSkillsInfo.classList.remove("add-red");
        nextSiblingEl.style.display = "none";
        flag = true;
    }
    return flag;
}
function expValidation() {
    var flag;
    var getExperienceInfo = document.querySelector("#experience-info");
    var getExperienceInfoV = getExperienceInfo.value.trim();
    var nextSiblingEl = getExperienceInfo.nextElementSibling;
    if (getExperienceInfoV.length < 2) {
        getExperienceInfo.classList.add("add-red");
        nextSiblingEl.style.display = "block";
        flag = false;
        // console.log(getExperienceInfoV.length);
        if (getExperienceInfoV.length !== 0) {
            nextSiblingEl.innerHTML = "Please Enter Atleast 2 Characters";
        }
        else {
            nextSiblingEl.innerHTML = "Experience is Required";
        }
    }
    else {
        getExperienceInfo.classList.remove("add-red");
        nextSiblingEl.style.display = "none";
        flag = true;
    }
    return flag;
}
function scrolling(value) {
    var scrollingElement = document.getElementById(value);
    // console.log("scrolling")
    // console.log(scrollingElement)
    window.scrollTo({
        top: (scrollingElement.offsetTop - 20),
        behavior: "smooth",
    });
}
function checkValidation(value) {
    var isImgCheck = false;
    var isNameCheck = false;
    var isNumberCheck = false;
    var isEmailCheck = false;
    var isProfessionCheck = false;
    var isEduCheck = false;
    var isSkillsCheck = false;
    var isExperienceCheck = false;
    if (value === "img" || value === "all") {
        isImgCheck = imageValidation();
        document.querySelector("#upload-profile").addEventListener("input", function () {
            isImgCheck = imageValidation();
        });
    }
    if (value === "name" || value === "all") {
        isNameCheck = nameValidation();
        document.querySelector("#name").addEventListener("input", function () {
            isNameCheck = nameValidation();
        });
    }
    if (value === "number" || value === "all") {
        isNumberCheck = numberValidation();
        document.querySelector("#phone-number").addEventListener("input", function () {
            isNumberCheck = numberValidation();
        });
    }
    if (value === "email" || value === "all") {
        isEmailCheck = emailValidation();
        document.querySelector("#email-address").addEventListener("input", function () {
            isEmailCheck = emailValidation();
        });
    }
    if (value === "prof" || value === "all") {
        isProfessionCheck = professionValidation();
        document.querySelector("#profession").addEventListener("input", function () {
            isProfessionCheck = professionValidation();
        });
    }
    if (value === "edu" || value === "all") {
        isEduCheck = eduValidation();
        document.querySelector("#education-info").addEventListener("input", function () {
            isEduCheck = eduValidation();
        });
    }
    if (value === "skills" || value === "all") {
        isSkillsCheck = skillsValidation();
        document.querySelector("#skills-info").addEventListener("input", function () {
            isSkillsCheck = skillsValidation();
        });
    }
    if (value === "exp" || value === "all") {
        isExperienceCheck = expValidation();
        document.querySelector("#experience-info").addEventListener("input", function () {
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
    var getName = document.querySelector("#name");
    var getPhoneNumber = document.querySelector("#phone-number");
    var getEmailAddress = document.querySelector("#email-address");
    var getProfession = document.querySelector("#profession");
    var getEducationInfo = document.querySelector("#education-info");
    var getSkillsInfo = document.querySelector("#skills-info");
    var getExperienceInfo = document.querySelector("#experience-info");
    //   display information id getting.
    var userNameDis = document.querySelector("#user-name");
    var userProfessionDis = document.querySelector("#user-profession");
    var userEducationDis = document.querySelector("#user-edu-text");
    var userSkillsDis = document.querySelector("#user-skills-text");
    var userExperienceDis = document.querySelector("#user-exp-text");
    var userEmailDis = document.querySelector("#user-email-text");
    var userPhoneNumberDis = document.querySelector("#user-number-text");
    // console.dir(userEducationDis);
    var finalRes = checkValidation("all");
    // console.log("flag flag", finalRes);
    if (finalRes) {
        setTimeout(function () {
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
