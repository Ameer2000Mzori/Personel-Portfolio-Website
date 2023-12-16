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
const ProjectsWrap = document.getElementsByClassName("Projects-Wrap")[0];

// gelobal varibales
let countProjects = 6;

// API KEY(S)
let API_KEY = `https://api.github.com/users/ameer2000mzori/repos?per_page=${countProjects}`;

// API FETCH DATA
async function getData(API_KEY) {
  try {
    const resposne = await fetch(API_KEY);
    let data = await resposne.json();
    console.log(data[0]);
  } catch (error) {
    console.log("we got an error:", error);
  }
}
getData(API_KEY);

// our functions
const listCards = () => {
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
