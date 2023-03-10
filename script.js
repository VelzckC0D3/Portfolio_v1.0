// Card Objects
const cardObjects = [
  {
    title: 'Multi-Post Stories',
    tech: ['HTML', 'BootsTrap', 'Ruby'],
    contBG: 'style/imgGrid/card-1.svg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.',
    seeLive: 'https://velzckcode.netlify.app/',
    seeSources: 'https://github.com/VelzckC0D3',
    class: 'card1',
  },
  {
    title: 'Profesional Art Printing Data More',
    tech: ['HTML', 'BootsTrap', 'Ruby'],
    contBG: 'style/imgGrid/card1.svg',
    description:
      'Lorem ipsum dolor sit amet pariatur maxime expedita delectus laborum voluptates aut dolore suscipit eius illum.',
    seeLive: 'https://velzckcode.netlify.app/',
    seeSources: 'https://github.com/VelzckC0D3',
    class: 'card2',
  },
  {
    title: 'Data Dashboard Healthcare',
    tech: ['HTML', 'BootsTrap', 'Ruby'],
    contBG: 'style/imgGrid/card2.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor iusto officiis sunt alias? Vero voluptatum facilis explicabo veritatis adipisci!',
    seeLive: 'https://velzckcode.netlify.app/',
    seeSources: 'https://github.com/VelzckC0D3',
    class: 'card3',
  },
  {
    title: 'Website Portfolio',
    tech: ['HTML', 'BootsTrap', 'Ruby'],
    contBG: 'style/imgGrid/card1.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, exercitationem quo aliquam assumenda quam unde sint illum illo quia. Ut?',
    seeLive: 'https://velzckcode.netlify.app/',
    seeSources: 'https://github.com/VelzckC0D3',
    class: 'card4',
  },
  {
    title: 'Technology Innovation System',
    tech: ['HTML', 'BootsTrap', 'Ruby'],
    contBG: 'style/imgGrid/card2.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipis maxime officiis delectus tempore fuga atque.',
    seeLive: 'https://velzckcode.netlify.app/',
    seeSources: 'https://github.com/VelzckC0D3',
    class: 'card5',
  },
  {
    title: 'Aeronautic Simulator Visualizer',
    tech: ['HTML', 'BootsTrap', 'Ruby'],
    contBG: 'style/imgGrid/card0.svg',
    description:
      'Voluptatem rem laboriosam laudantium vero quis maem ipsum dpisicing elit  officiis delectus tempore fuga atque.',
    seeLive: 'https://velzckcode.netlify.app/',
    seeSources: 'https://github.com/VelzckC0D3',
    class: 'card6',
  },
  {
    title: 'Multi-Post Stories',
    tech: ['HTML', 'BootsTrap', 'Ruby'],
    contBG: 'style/imgGrid/pGrid1.svg',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    seeLive: 'https://velzckcode.netlify.app/',
    seeSources: 'https://github.com/VelzckC0D3',
    class: 'card7',
  },
];

// RESPONSIVE MENU
const mainCont = document.querySelector('#body');
const openMenu = document.querySelector('#menu');
const closeMenu = document.querySelector('#menuX');
const menuCont = document.querySelector('#menuCont');
const ulMenu = document.querySelector('#ulMenu');
const liMenu = document.querySelectorAll('.liMenu');
const logo = document.querySelector('#logo');
const mailIcon = document.querySelector('.mailIcon');

// Hambruguer Button Interaction
openMenu.addEventListener('click', () => {
  menuCont.classList.add('responsiveMenu');
  openMenu.classList.add('displayNone');
  closeMenu.classList.add('display', 'xCenter');
  ulMenu.classList.add('ulCenter');
  mailIcon.classList.add('displayN');
  logo.classList.add('displayLogo');
  mainCont.classList.add('no-scroll');
});

// Hamburguer X Button Interaction
closeMenu.addEventListener('click', () => {
  menuCont.classList.remove('responsiveMenu');
  openMenu.classList.remove('displayNone');
  closeMenu.classList.remove('display', 'xCenter');
  logo.classList.remove('displayLogo');
  mainCont.classList.remove('no-scroll');
});

// Logo Button Interaction
logo.addEventListener('click', () => {
  menuCont.classList.remove('responsiveMenu');
  openMenu.classList.remove('displayNone');
  closeMenu.classList.remove('display', 'xCenter');
  logo.classList.remove('displayLogo');
  mainCont.classList.remove('no-scroll');
});

// List Items Interaction
liMenu.forEach((each) => {
  each.addEventListener('click', () => {
    menuCont.classList.remove('responsiveMenu');
    openMenu.classList.remove('displayNone');
    closeMenu.classList.remove('display', 'xCenter');
    logo.classList.remove('displayLogo');
    mainCont.classList.remove('no-scroll');
  });
});

// Prevent Visual Error In Certain ViewPort
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    menuCont.classList.remove('responsiveMenu');
    openMenu.classList.remove('displayNone');
    closeMenu.classList.remove('display', 'xCenter');
    ulMenu.classList.remove('ulCenter');
    logo.classList.remove('displayLogo');
  }
});

// Dynamic Cards
const cardContainer = document.querySelector('.sGridCont'); // this, is the HTML path where it's going to be added.

cardObjects.forEach((postData) => {
  const createCard = document.createElement('div');
  createCard.classList.add('card', postData.class);
  createCard.style.backgroundImage = `url(${postData.contBG})`;
  createCard.innerHTML = `
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
  cardContainer.appendChild(createCard);
});

// Dynamic Pop Up
const popCont = document.querySelector('.popCont');

cardObjects.map((postData, index) => {
  const createPopUp = document.createElement('div');
  createPopUp.classList.add('pop', 'slider');
  createPopUp.setAttribute('id', postData.class);
  createPopUp.innerHTML = `
      <div id="popTopCont">
      <style>.pop:nth-child(${index + 1}) .popImg {background-image: url(${postData.contBG}) !important;}</style>
      <div class="popTop">
      <h2 class="roboto popTitle">${postData.title}</h2>
      <button type="button" class="popTopButton"></button>
      </div>
      <ul class="ulPop">
      <li class="liPop"><a href="http://" class="linkPop" target="_blank" rel="noopener noreferrer">${postData.tech[0]}</a></li>
      <li class="liPop"><a href="http://" class="linkPop" target="_blank" rel="noopener noreferrer">${postData.tech[1]}</a></li>
      <li class="liPop"><a href="http://" class="linkPop" target="_blank" rel="noopener noreferrer">${postData.tech[2]}-on-Rails</a></li>
      </ul>
      </div>
      <div class="popMain">
      <div class="popImg">
      <div class="popToggle">
      </div>
      </div>
      <div class="popTextCont">
      <p class="inter popText" >${postData.description}</p>
      <div class="popIconsCont">
      <a href="${postData.seeLive}" target="_blank" rel="noopener noreferrer" class="popIcon inter">See Live <img src="style/icon/live_demo.svg" alt="GitHub Icon"></a>
      <a href="${postData.seeSources}" target="_blank" rel="noopener noreferrer" class="popIcon inter">See Source <img src="style/icon/pop_github.svg" alt="GitHub Icon"></a>
      </div>
      </div>
      </div>
        `;
  popCont.appendChild(createPopUp);
  return createPopUp;
});

// Buttons Interaction
const popUp = document.querySelector('.wrapperCont');
const pButton = document.querySelector('.popButton1');
const sButtons = document.querySelectorAll('.cardBtn');
const xButton = document.querySelectorAll('.popTopButton');

// Close pop up with X button
xButton.forEach((index) => {
  index.addEventListener('click', () => {
    document.querySelector('.popWrapper').classList.add('popOut2');
    setTimeout(() => { popUp.classList.remove('popOn'); }, 400); // Timeout: It'll wait '500ms' to execute the command
    mainCont.classList.remove('no-scroll');
  });
});

// Action of the buttom of the primary card
pButton.addEventListener('click', () => {
  document.querySelector('.popWrapper').classList.remove('popOut2');
  popUp.classList.add('popOn', 'testAnimation');
  mainCont.classList.add('no-scroll');
  const section = document.querySelector('#card7');
  section.scrollIntoView();
});

// Actions of the buttoms of the secondary cards
sButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    document.querySelector('.popWrapper').classList.remove('popOut2');
    popUp.classList.add('popOn');
    mainCont.classList.add('no-scroll');
    const sectionId = `#card${index + 1}`;
    const section = document.querySelector(sectionId);
    section.scrollIntoView();
  });
});

// Press ESC to close the Pop Up
document.addEventListener('keydown', (closePopUp) => {
  if (closePopUp.key === 'Escape') {
    document.querySelector('.popWrapper').classList.add('popOut2');
    setTimeout(() => { popUp.classList.remove('popOn'); }, 400); // Timeout: It'll wait '500ms' to execute the command
    mainCont.classList.remove('no-scroll'); menuCont.classList.remove('responsiveMenu');
    openMenu.classList.remove('displayNone');
    closeMenu.classList.remove('display', 'xCenter');
    logo.classList.remove('displayLogo');
  }
});
