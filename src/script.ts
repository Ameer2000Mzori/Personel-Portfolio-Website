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

// save for later : https://api.github.com/users/ameer2000mzori/repos
// "url": "https://api.github.com/repos/Ameer2000Mzori/Animated-Template",

// selecting elements
const viewMoreBtn = document.getElementsByClassName("view-More-Btn")[0];

// API KEY(S)

// API FETCH DATA

// our functions

// our event lisnters
