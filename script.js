const openMenu = document.getElementsByClassName("open-menu")[0];
const closeMenu = document.getElementsByClassName("close-menu")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
const voidMenu = document.getElementsByClassName("void-menu")[0];

openMenu.addEventListener("click", () => {
  navLinks.classList.add("openedMenu");
  voidMenu.classList.add("openedMenu");
});
closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("openedMenu");
  voidMenu.classList.remove("openedMenu");
});
voidMenu.addEventListener("click", () => {
  navLinks.classList.remove("openedMenu");
  voidMenu.classList.remove("openedMenu");
});
