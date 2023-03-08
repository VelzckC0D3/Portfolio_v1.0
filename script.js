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

/* POP UP */

const popUpCont = document.querySelector("#popupCont"); // Pop up container
const button1 = document.querySelector("#action"); // First button on the section Works
const button1X = document.querySelector("#popTopButton"); // Close pop up button

button1.addEventListener("click", () => {
  popUpCont.classList.add("popOn");
});

button1X.addEventListener("click", () => {
  popUpCont.classList.remove("popOn");
});
/* POP UP */

/* POP UP INFORMATION */

/* OBJECTS */

const cardObjects = [
  {
    title: "Multi-Post Stories",
    tech1: "HTML",
    tech2: "BootsTrap",
    tech3: "Ruby",
    contBG: "style/imgGrid/card0.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam, laudantium quas adipisci vitae nemo exercitationem sapiente odio natus perspiciatis!",
    seeLive: "",
    seeSources: "",
  },
  {
    title: "Profesional Art Printing Data More",
    tech1: "HTML",
    tech2: "BootsTrap",
    tech3: "Ruby",
    contBG: "style/imgGrid/card1.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur maxime expedita delectus laborum voluptates aut dolore suscipit eius illum.",
    seeLive: "",
    seeSources: "",
  },
  {
    title: "Data Dashboard Healthcare",
    tech1: "HTML",
    tech2: "BootsTrap",
    tech3: "Ruby",
    contBG: "style/imgGrid/card2.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor iusto officiis sunt alias? Vero voluptatum facilis explicabo veritatis adipisci!",
    seeLive: "",
    seeSources: "",
  },
  {
    title: "Website Portfolio",
    tech1: "HTML",
    tech2: "BootsTrap",
    tech3: "Ruby",
    contBG: "style/imgGrid/card0.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, exercitationem quo aliquam assumenda quam unde sint illum illo quia. Ut?",
    seeLive: "",
    seeSources: "",
  },
  {
    title: "Technology Innovation System",
    tech1: "HTML",
    tech2: "BootsTrap",
    tech3: "Ruby",
    contBG: "style/imgGrid/card1.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rem laboriosam laudantium vero quis maxime officiis delectus tempore fuga atque.",
    seeLive: "",
    seeSources: "",
  },
];

/* OBJECTS */

const cardContainer = document.querySelector(".sGridCont");

const postMethods = () => {
  cardObjects.map((postData) => {
    const postElement = document.createElement("div");
    postElement.classList.add("card");
    postElement.innerHTML = `
    <div class="cardShadow">
    <style>
    .card:nth-child(${
      cardObjects.indexOf(postData) + 1
    }) {background-image: url(${postData.contBG}) !important;}</style>
    <h2 class="cardTitle">${postData.title}</h2>
    <p class="cardDesc">${postData.description}</p>
    <ul class="cardUl">
    <li class="cardLi"><a class="cardLiAnc" href="#" target="_blank" rel="noopener noreferrer">${
      postData.tech1
    }</a></li>
    <li class="cardLi"><a class="cardLiAnc" href="#" target="_blank" rel="noopener noreferrer">${
      postData.tech2
    }</a></li>
    <li class="cardLi"><a class="cardLiAnc" href="#" target="_blank" rel="noopener noreferrer">${
      postData.tech3
    }</a></li>
    </ul>
    <button class="cardBtn">see project</button>
    </div>
    `;
    cardContainer.appendChild(postElement);
  });
};
postMethods();
/* what we need: DataTransferItemList, LINK 1, 2, 3, BG AND PARAGRAPH */

/* POP UP INFORMATION */
