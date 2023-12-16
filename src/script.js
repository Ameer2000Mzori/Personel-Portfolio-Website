/*  NAVBAR */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// selecting elements
var openCloseBtn = document.getElementsByClassName("open-Close-Btn")[0];
var barOne = document.getElementsByClassName("bar-One")[0];
var barTwo = document.getElementsByClassName("bar-Two")[0];
var navbarEl = document.getElementsByClassName("navbar")[0];
// our functions
var openNav = function () {
    navbarEl.classList.toggle("active");
    barOne.classList.toggle("active");
    barTwo.classList.toggle("active");
};
// our event lisnters
openCloseBtn.addEventListener("click", openNav);
/*  PROJECTS API */
// useable for later on
// save for later : https://api.github.com/users/ameer2000mzori/repos
// "url": "https://api.github.com/repos/Ameer2000Mzori/Animated-Template",
//https://raw.githubusercontent.com/Ameer2000Mzori/Todo-List/main/sample/1.png
// selecting elements
var viewMoreBtn = document.getElementsByClassName("view-More-Btn")[0];
var ProjectsWrap = document.getElementsByClassName("Projects-Wrap")[0];
var ProjectsDecorationBar = document.getElementsByClassName("Projects-Decoration-Bar")[0];
// gelobal varibales
var countProjects = 6;
// API KEY(S)
var API_KEY = "https://api.github.com/users/ameer2000mzori/repos?per_page=".concat(countProjects, "&sort=created");
// API FETCH DATA
function getData(API_KEY) {
    return __awaiter(this, void 0, void 0, function () {
        var resposne, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(API_KEY)];
                case 1:
                    resposne = _a.sent();
                    return [4 /*yield*/, resposne.json()];
                case 2:
                    data = _a.sent();
                    listCards(data);
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("we got an error:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// our functions
var listCards = function (data) {
    // our for each func / loop :
    data.forEach(function (info) {
        var description = info.description, homepage = info.homepage, html_url = info.html_url, name = info.name, topics = info.topics;
        // creating our elements dynamiclly :
        var projectCard = document.createElement("div");
        projectCard.classList.add("project-Card");
        var projectImgWrap = document.createElement("div");
        projectImgWrap.classList.add("project-Img-Wrap");
        projectCard.appendChild(projectImgWrap);
        var projectImg = document.createElement("img");
        projectImg.classList.add("project-Img");
        projectImg.src = "https://raw.githubusercontent.com/Ameer2000Mzori/".concat(name, "/main/sample/1.png");
        projectImgWrap.appendChild(projectImg);
        var projectPLang = document.createElement("p");
        projectPLang.classList.add("project-P-Lang");
        var topicsCount = 0;
        for (var _i = 0, topics_1 = topics; _i < topics_1.length; _i++) {
            var topic = topics_1[_i];
            topicsCount++;
            if (topicsCount < topics.length) {
                projectPLang.textContent += topic + ", ";
            }
            else {
                projectPLang.textContent += topic + ".";
            }
        }
        projectCard.appendChild(projectPLang);
        var projectNameTitle = document.createElement("h3");
        projectNameTitle.classList.add("project-Name-Title");
        projectNameTitle.textContent = "".concat(name);
        projectCard.appendChild(projectNameTitle);
        var projectPText = document.createElement("p");
        projectPText.classList.add("project-P-Text");
        projectPText.textContent = "".concat(description);
        projectCard.appendChild(projectPText);
        var projectBtnWrap = document.createElement("div");
        projectBtnWrap.classList.add("project-Btn-Wrap");
        projectCard.appendChild(projectBtnWrap);
        var seeProjectWrap = document.createElement("div");
        seeProjectWrap.classList.add("see-Project-Wrap");
        projectBtnWrap.appendChild(seeProjectWrap);
        var seeCodeWrapA = document.createElement("a");
        seeCodeWrapA.classList.add("see-Code-Wrap-A");
        seeCodeWrapA.setAttribute("target", "_blank");
        seeCodeWrapA.href = "".concat(homepage);
        seeCodeWrapA.textContent = "SEE PROJECT";
        seeProjectWrap.appendChild(seeCodeWrapA);
        var seeCodeWrapI = document.createElement("i");
        seeCodeWrapI.id = "see-Code-Wrap-I";
        seeCodeWrapI.classList.add("fa-solid", "fa-arrow-right");
        seeProjectWrap.appendChild(seeCodeWrapI);
        var seeCodeWrap = document.createElement("div");
        seeCodeWrap.classList.add("see-Code-Wrap");
        projectBtnWrap.appendChild(seeCodeWrap);
        var seeCodeWrapAA = document.createElement("a");
        seeCodeWrapAA.classList.add("see-Code-Wrap-A");
        seeCodeWrapAA.setAttribute("target", "_blank");
        seeCodeWrapAA.href = "".concat(html_url);
        seeCodeWrapAA.textContent = "SEE CODE";
        seeCodeWrap.appendChild(seeCodeWrapAA);
        var seeCodeWrapII = document.createElement("i");
        seeCodeWrapII.id = "see-Code-Wrap-I";
        seeCodeWrapII.classList.add("fa-solid", "fa-arrow-right");
        seeCodeWrap.appendChild(seeCodeWrapII);
        ProjectsWrap.appendChild(projectCard);
    });
};
// our view more projects function
var viewMoreProjects = function () {
    if (countProjects == 6) {
        viewMoreBtn.textContent = "VIEW LESS";
        ProjectsWrap.innerHTML = "";
        ProjectsDecorationBar.style.height = "3000px";
        ProjectsWrap.classList.add("active");
        countProjects = 12;
        var newData12 = "https://api.github.com/users/ameer2000mzori/repos?per_page=".concat(countProjects, "&sort=created");
        getData(newData12);
    }
    else {
        viewMoreBtn.textContent = "VIEW MORE";
        ProjectsWrap.innerHTML = "";
        ProjectsDecorationBar.style.height = "1500px";
        ProjectsWrap.classList.remove("active");
        countProjects = 6;
        var newData6 = "https://api.github.com/users/ameer2000mzori/repos?per_page=".concat(countProjects, "&sort=created");
        getData(newData6);
    }
};
// our event lisnters
viewMoreBtn.addEventListener("click", viewMoreProjects);
getData(API_KEY);
