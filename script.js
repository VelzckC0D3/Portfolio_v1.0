/* RESPONSIVE MENU */

const openMenu = document.querySelector("#menu");
const closeMenu = document.querySelector("#menuX");
const menuCont = document.querySelector("#menuCont");
const ulMenu = document.querySelector("#ulMenu");
const liMenu = document.querySelectorAll(".liMenu");
const logo = document.querySelector("#logo");
const mailIcon = document.querySelector(".mailIcon");

openMenu.addEventListener("click", () => {
  menuCont.classList.add("responsiveMenu");
  openMenu.classList.add("displayNone");
  closeMenu.classList.add("display", "xCenter");
  ulMenu.classList.add("ulCenter");
  mailIcon.classList.add("displayN");
  logo.classList.add("displayLogo");
});

closeMenu.addEventListener("click", () => {
  menuCont.classList.remove("responsiveMenu");
  openMenu.classList.remove("displayNone");
  closeMenu.classList.remove("display", "xCenter");
  logo.classList.remove("displayLogo");
});

logo.addEventListener("click", () => {
  menuCont.classList.remove("responsiveMenu");
  openMenu.classList.remove("displayNone");
  closeMenu.classList.remove("display", "xCenter");
  logo.classList.remove("displayLogo");
});

liMenu.forEach((each) => {
  each.addEventListener("click", () => {
    menuCont.classList.remove("responsiveMenu");
    openMenu.classList.remove("displayNone");
    closeMenu.classList.remove("display", "xCenter");
    logo.classList.remove("displayLogo");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    menuCont.classList.remove("responsiveMenu");
    openMenu.classList.remove("displayNone");
    closeMenu.classList.remove("display", "xCenter");
    ulMenu.classList.remove("ulCenter");
    logo.classList.remove("displayLogo");
  }
});

/* RESPONSIVE MENU */

/* POP UP INFORMATION */

/* OBJECTS */

const cardObjects = [
  {
    title: "Multi-Post Stories",
    tech: ["HTML", "BootsTrap", "Ruby"],
    contBG: "style/imgGrid/card0.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam, laudantium quas adipisci vitae nemo exercitationem sapiente odio natus perspiciatis!",
    seeLive: "https://velzckcode.netlify.app/",
    seeSources: "https://github.com/VelzckC0D3",
    class: "card1",
  },
  {
    title: "Profesional Art Printing Data More",
    tech: ["HTML", "BootsTrap", "Ruby"],
    contBG: "style/imgGrid/card1.svg",
    description:
      "Lorem ipsum dolor sit amet pariatur maxime expedita delectus laborum voluptates aut dolore suscipit eius illum.",
    seeLive: "https://velzckcode.netlify.app/",
    seeSources: "https://github.com/VelzckC0D3",
    class: "card2",
  },
  {
    title: "Data Dashboard Healthcare",
    tech: ["HTML", "BootsTrap", "Ruby"],
    contBG: "style/imgGrid/card2.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor iusto officiis sunt alias? Vero voluptatum facilis explicabo veritatis adipisci!",
    seeLive: "https://velzckcode.netlify.app/",
    seeSources: "https://github.com/VelzckC0D3",
    class: "card3",
  },
  {
    title: "Website Portfolio",
    tech: ["HTML", "BootsTrap", "Ruby"],
    contBG: "style/imgGrid/card1.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, exercitationem quo aliquam assumenda quam unde sint illum illo quia. Ut?",
    seeLive: "https://velzckcode.netlify.app/",
    seeSources: "https://github.com/VelzckC0D3",
    class: "card4",
  },
  {
    title: "Technology Innovation System",
    tech: ["HTML", "BootsTrap", "Ruby"],
    contBG: "style/imgGrid/card2.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipis maxime officiis delectus tempore fuga atque.",
    seeLive: "https://velzckcode.netlify.app/",
    seeSources: "https://github.com/VelzckC0D3",
    class: "card5",
  },
  {
    title: "Aeronautic Simulator Visualizer",
    tech: ["HTML", "BootsTrap", "Ruby"],
    contBG: "style/imgGrid/card0.svg",
    description:
      "Voluptatem rem laboriosam laudantium vero quis maem ipsum dpisicing elit  officiis delectus tempore fuga atque.",
    seeLive: "https://velzckcode.netlify.app/",
    seeSources: "https://github.com/VelzckC0D3",
    class: "card6",
  },
  {
    title: "Multi-Post Stories",
    tech: ["HTML", "BootsTrap", "Ruby"],
    contBG: "style/imgGrid/pGrid1.svg",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    seeLive: "https://velzckcode.netlify.app/",
    seeSources: "https://github.com/VelzckC0D3",
    class: "card7",
  }
];

/* OBJECTS */

/* DYNAMIC CARDS */

const cardContainer = document.querySelector(".sGridCont"); // this, is the html path where it's going to be added.

cardObjects.forEach((postData) => {
  const postElement = document.createElement("div");
  postElement.classList.add("card", postData.class);
  postElement.style.backgroundImage = `url(${postData.contBG})`;
  postElement.innerHTML = `
      <div class="cardShadow">
      <h2 class="cardTitle">${postData.title}</h2>
      <p class="cardDesc">${postData.description}</p>
      <ul class="cardUl">
      <li class="cardLi"><a class="cardLiAnc" href="#" target="_blank" rel="noopener noreferrer">${postData.tech[0]}</a></li>
      <li class="cardLi"><a class="cardLiAnc" href="#" target="_blank" rel="noopener noreferrer">${postData.tech[1]}</a></li>
      <li class="cardLi"><a class="cardLiAnc" href="#" target="_blank" rel="noopener noreferrer">${postData.tech[2]}</a></li>
      </ul>
      <button class="cardBtn">see project</button>
      </div>
    `;
  cardContainer.appendChild(postElement);
});

const popCont = document.querySelector(".popCont");

cardObjects.map((postData, index) => {
  const postElement = document.createElement("div");
  postElement.classList.add("pop", "slider");
  postElement.setAttribute("id", postData.class);
  postElement.innerHTML = `
    
    <div id="popTopCont">
    <style>.pop:nth-child(${index + 1}) .popImg {background-image: url(${
    postData.contBG
  }) !important;}</style>
          <div id="popTop">
            <h2 id="popTitle">${postData.title}</h2>
            <button type="button" id="popTopButton"></button>
          </div>
          <ul id="ulPop">
            <li class="liPop"><a href="http://" id="linkPop" target="_blank" rel="noopener noreferrer">${
              postData.tech1
            }</a></li>
            <li class="liPop"><a href="http://" id="linkPop" target="_blank" rel="noopener noreferrer">${
              postData.tech2
            }</a></li>
            <li class="liPop"><a href="http://" id="linkPop" target="_blank" rel="noopener noreferrer">${
              postData.tech3
            }</a></li>
          </ul>
        </div>
        <div id="popMain">
        <div class="popImg">
        <div class="popToggle">
        </div>
        </div>
          <p id="popText">${postData.description}</p>
          <div id="popIconsCont">
            <a href="${
              postData.seeLive
            }" target="_blank" rel="noopener noreferrer" class="popIcon">See Live</a>
            <a href="${
              postData.seeSources
            }" target="_blank" rel="noopener noreferrer" class="popIcon">See Source</a>
          </div>
        </div>
    `;
  popCont.appendChild(postElement);
});

/* POP UP HTML */

/* POP UP INTERACTION */

const mainCont = document.querySelector("#body");
const popUp = document.querySelector(".wrapperCont");
const pButton = document.querySelector(".popButton1");
const sButtons = document.querySelectorAll('.cardBtn');
const xButton = document.querySelectorAll("#popTopButton");

// x Button on Pop Up
xButton.forEach((index) => {
  index.addEventListener("click", function () {
    popUp.classList.remove("popOn");
    mainCont.classList.remove("no-scroll")
  });
});

// See project First Main Project
pButton.addEventListener('click', ()=> {
  popUp.classList.add("popOn", "testAnimation")
  mainCont.classList.add("no-scroll")
  const section = document.querySelector('#card7');
  section.scrollIntoView();
})

// See project all projects
sButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    popUp.classList.add("popOn");
    mainCont.classList.add("no-scroll")
    const sectionId = `#card${index + 1}`;
    const section = document.querySelector(sectionId);
    console.log (sectionId)
    section.scrollIntoView();
  });
});



/* POP UP INTERACTION */
/* POP UP INFORMATION */
