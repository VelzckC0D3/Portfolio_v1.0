const openMenu = document.querySelector('#menu');
const closeMenu = document.querySelector('#menuX');
const menuCont = document.querySelector('#menuCont');
const liMenu = document.querySelectorAll('#liMenu');
/* const menuX = document.querySelector() */

openMenu.addEventListener('click', () => {
  menuCont.classList.add('responsiveMenu');
  openMenu.classList.add('displayNone');
  closeMenu.classList.add('display');
});

closeMenu.addEventListener('click', () => {
  menuCont.classList.remove('responsiveMenu');
  openMenu.classList.remove('displayNone');
  closeMenu.classList.remove('display');
});

liMenu.forEach((each) => {
  each.addEventListener('click', () => {
    menuCont.classList.remove('responsiveMenu');
    openMenu.classList.remove('displayNone');
    closeMenu.classList.remove('display');
  });
});