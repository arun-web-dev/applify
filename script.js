const headerSectionEl = document.querySelector(".header-section");
const headerContainerEl = document.querySelector(".header-container");
const logoImageEl = document.querySelector(".logo-image");

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
});

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    headerSectionEl.classList.add("scrolling");
    logoImageEl.src = "./assests/applify-logo-color.png";
  } else {
    headerSectionEl.classList.remove("scrolling");
    logoImageEl.src = "./assests/applify-logo-white.png";
  }
});
