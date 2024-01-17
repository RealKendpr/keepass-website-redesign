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

// const article = document.querySelectorAll(".article-list article > p");

// for (let i = 0; i < article.length; i++) {
//   const element = article[i];
//   element.innerHTML = element.textContent + "&#x2009;";
// }

const wrapper = document.getElementsByClassName("wrapper")[0];

function positionNav() {
  const navlinksWidth = navLinks.offsetWidth;

  let wrapperMargin =
    wrapper.currentStyle || window.getComputedStyle(wrapper).marginLeft;
  const wrappermarginNumber = parseInt(wrapperMargin);
  navLinks.style.setProperty(
    "left",
    wrappermarginNumber - navlinksWidth + "px"
  );
}

window.addEventListener("resize", function (e) {
  positionNav();
});

positionNav();
