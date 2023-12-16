/*  NAVBAR */

// selecting elements
const openCloseBtn = document.getElementsByClassName("open-Close-Btn")[0];
const barOne = document.getElementsByClassName("bar-One")[0];
const barTwo = document.getElementsByClassName("bar-Two")[0];
const navbarEl = document.getElementsByClassName("navbar")[0];

// our functions
const openNav = (): void => {
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
const viewMoreBtn = document.getElementsByClassName("view-More-Btn")[0];

// gelobal varibales
let countProjects = 6;

// API KEY(S)
let API_KEY = `https://api.github.com/users/ameer2000mzori/repos?per_page=${countProjects}`;

// API FETCH DATA
async function getData(API_KEY) {
  try {
    const resposne = await fetch(API_KEY);
    let data = await resposne.json();
    console.log(data);
  } catch (error) {
    console.log("we got an error:", error);
  }
}
getData(API_KEY);

// our functions

// our event lisnters
