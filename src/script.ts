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
let API_KEY = `https://api.github.com/users/ameer2000mzori/repos?per_page=${countProjects}&sort=created`;

// API FETCH DATA
async function getData(API_KEY) {
  try {
    const resposne = await fetch(API_KEY);
    let data = await resposne.json();

    listCards(data);
    console.log(data);
  } catch (error) {
    console.log("we got an error:", error);
  }
}

// our functions
const listCards = (data) => {
  // our for each func / loop :
  data.forEach((info) => {
    let { description, homepage, html_url, name, topics } = info;
    // creating our elements dynamiclly :
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-Card");

    const projectImgWrap = document.createElement("div");
    projectImgWrap.classList.add("project-Img-Wrap");
    projectCard.appendChild(projectImgWrap);

    const projectImg = document.createElement("img");
    projectImg.classList.add("project-Img");
    projectImg.src = `https://raw.githubusercontent.com/Ameer2000Mzori/${name}/main/sample/1.png`;
    projectImgWrap.appendChild(projectImg);

    const projectPLang = document.createElement("p");
    projectPLang.classList.add("project-P-Lang");

    let topicsCount = 0;

    for (let topic of topics) {
      topicsCount++;

      if (topicsCount < topics.length) {
        projectPLang.textContent += topic + `, `;
      } else {
        projectPLang.textContent += topic + `.`;
      }
    }

    projectCard.appendChild(projectPLang);

    const projectNameTitle = document.createElement("h3");
    projectNameTitle.classList.add("project-Name-Title");
    projectNameTitle.textContent = `${name}`;
    projectCard.appendChild(projectNameTitle);

    const projectPText = document.createElement("p");
    projectPText.classList.add("project-P-Text");
    projectPText.textContent = `${description}`;
    projectCard.appendChild(projectPText);

    const projectBtnWrap = document.createElement("div");
    projectBtnWrap.classList.add("project-Btn-Wrap");
    projectCard.appendChild(projectBtnWrap);

    const seeProjectWrap = document.createElement("div");
    seeProjectWrap.classList.add("see-Project-Wrap");
    projectBtnWrap.appendChild(seeProjectWrap);

    const seeCodeWrapA = document.createElement("a");
    seeCodeWrapA.classList.add("see-Code-Wrap-A");
    seeCodeWrapA.setAttribute("target", "_blank");
    seeCodeWrapA.href = `${homepage}`;
    seeCodeWrapA.textContent = `SEE PROJECT`;
    seeProjectWrap.appendChild(seeCodeWrapA);

    const seeCodeWrapI = document.createElement("i");
    seeCodeWrapI.id = "see-Code-Wrap-I";
    seeCodeWrapI.classList.add("fa-solid", "fa-arrow-right");
    seeProjectWrap.appendChild(seeCodeWrapI);

    const seeCodeWrap = document.createElement("div");
    seeCodeWrap.classList.add("see-Code-Wrap");
    projectBtnWrap.appendChild(seeCodeWrap);

    const seeCodeWrapAA = document.createElement("a");
    seeCodeWrapAA.classList.add("see-Code-Wrap-A");
    seeCodeWrapAA.setAttribute("target", "_blank");
    seeCodeWrapAA.href = `${html_url}`;
    seeCodeWrapAA.textContent = `SEE CODE`;
    seeCodeWrap.appendChild(seeCodeWrapAA);

    const seeCodeWrapII = document.createElement("i");
    seeCodeWrapII.id = "see-Code-Wrap-I";
    seeCodeWrapII.classList.add("fa-solid", "fa-arrow-right");
    seeCodeWrap.appendChild(seeCodeWrapII);

    ProjectsWrap.appendChild(projectCard);
  });
};

// our view more projects function
const viewMoreProjects = () => {
  if (countProjects == 6) {
    ProjectsWrap.innerHTML = ``;
    countProjects = 12;
    let newData12 = `https://api.github.com/users/ameer2000mzori/repos?per_page=${countProjects}&sort=created`;
    getData(newData12);
  } else {
    ProjectsWrap.innerHTML = ``;
    countProjects = 6;
    let newData6 = `https://api.github.com/users/ameer2000mzori/repos?per_page=${countProjects}&sort=created`;
    getData(newData6);
  }
};

// our event lisnters

viewMoreBtn.addEventListener("click", viewMoreProjects);
getData(API_KEY);
