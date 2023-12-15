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
