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
// gelobal varibales
var countProjects = 6;
// API KEY(S)
var API_KEY = "https://api.github.com/users/ameer2000mzori/repos?per_page=".concat(countProjects);
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
                    console.log(data[0]);
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
getData(API_KEY);
// our functions
var listCards = function () {
    // creating our elements dynamiclly :
};
// our event lisnters
//
//
// our html loop up tree:
// <div class="project-Card">
//   <div class="project-Img-Wrap">
//     <img
//       class="project-Img"
//       src="./assets/Screenshot 2023-12-14 111944.png"
//       alt=""
//     />
//   </div>
//   <p class="project-P-Lang">HTML,CSS,JAVASCRIPT</p>
//   <h3 class="project-Name-Title">Contact Form</h3>
//   <p class="project-P-Text">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam iste
//     doloremque repudiandae dolorem modi quas pariatur soluta, at quam nulla
//     dolorum, illum dolores quibusdam distinctio ratione quidem laboriosam ex?
//   </p>
//   <div class="project-Btn-Wrap">
//     <div class="see-Project-Wrap">
//       <a href="#" class="see-Code-Wrap-A">
//         SEE PROJECT
//       </a>
//       <i id="see-Code-Wrap-I" class="fa-solid fa-arrow-right"></i>
//     </div>
//     <div class="see-Code-Wrap">
//       <a href="#" class="see-Code-Wrap-A">
//         SEE CODE
//       </a>
//       <i id="see-Code-Wrap-I" class="fa-solid fa-arrow-right"></i>
//     </div>
//   </div>
// </div>;
