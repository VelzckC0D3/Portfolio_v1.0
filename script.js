const openMenu = document.querySelector('#menu');
const closeMenu = document.querySelector('#menuX');
const menuCont = document.querySelector('#menuCont');
const ulMenu = document.querySelector('#ulMenu');
const liMenu = document.querySelectorAll('.liMenu');
const logo = document.querySelector('#logo');
const mailIcon = document.querySelector('.mailIcon');
/* const menuX = document.querySelector() */

openMenu.addEventListener('click', () => {
  menuCont.classList.add('responsiveMenu');
  openMenu.classList.add('displayNone');
  closeMenu.classList.add('display', 'xCenter');
  ulMenu.classList.add('ulCenter');
  mailIcon.classList.add('displayN');
  logo.classList.add('displayLogo');
});

closeMenu.addEventListener('click', () => {
  menuCont.classList.remove('responsiveMenu');
  openMenu.classList.remove('displayNone');
  closeMenu.classList.remove('display', 'xCenter');
  logo.classList.remove('displayLogo');
});

logo.addEventListener('click', () => {
  menuCont.classList.remove('responsiveMenu');
  openMenu.classList.remove('displayNone');
  closeMenu.classList.remove('display', 'xCenter');
  logo.classList.remove('displayLogo');
});

liMenu.forEach((each) => {
  each.addEventListener('click', () => {
    menuCont.classList.remove('responsiveMenu');
    openMenu.classList.remove('displayNone');
    closeMenu.classList.remove('display', 'xCenter');
    logo.classList.remove('displayLogo');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    menuCont.classList.remove('responsiveMenu');
    openMenu.classList.remove('displayNone');
    closeMenu.classList.remove('display', 'xCenter');
    ulMenu.classList.remove('ulCenter');
    logo.classList.remove('displayLogo');
  }
});
