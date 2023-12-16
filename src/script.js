// save for later : https://api.github.com/users/ameer2000mzori/repos
// "url": "https://api.github.com/repos/Ameer2000Mzori/Animated-Template",
/*  NAVBAR */
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
