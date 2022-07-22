const headerSectionEl = document.querySelector(".header-section");
const headerContainerEl = document.querySelector(".header-container");
const logoImageEl = document.querySelector(".logo-image");
const navSlideEl = document.querySelector(".nav-link-slides");
const hamburger = document.getElementById("hamburger");

// hamburger icon toggle functionality
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  navSlideEl.classList.toggle("slide-active");
  if (scrollY < 50 && hamburger.classList.contains("change")) {
    logoImageEl.src = "./assests/applify-logo-color.png";
  } else if (scrollY > 50 || hamburger.classList.contains("change")) {
    logoImageEl.src = "./assests/applify-logo-color.png";
  } else {
    logoImageEl.src = "./assests/applify-logo-white.png";
  }
});

// For remove the toggle icon while width exceed the max width of 1024px
const checkWindowWidth = () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      navSlideEl.classList.remove("slide-active");
      hamburger.classList.remove("change");
      logoImageEl.src = "./assests/applify-logo-white.png";
    }
  });
};

checkWindowWidth();

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    headerSectionEl.classList.add("scrolling");
    logoImageEl.src = "./assests/applify-logo-color.png";
  } else {
    headerSectionEl.classList.remove("scrolling");
    logoImageEl.src = "./assests/applify-logo-white.png";
  }
});

// Helper function to get height and boundClientvalue
const innerHeight = () => {
  return (window.innerHeight / 5) * 4;
};
const boundClient = (value) => {
  return value.getBoundingClientRect().top + 50;
};

// // feautes section animation

const featuresSection = document.querySelector(".features-section");
const featuresLeftView = document.querySelector(".features-left-view");
const features = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(featuresSection);
  if (clientRect < triggerBottom) featuresLeftView.classList.add("animate");
  else featuresLeftView.classList.remove("animate");
};

window.addEventListener("scroll", features);

// videos section animation

const videoSection = document.querySelector(".video-section");
const videoContainerRight = document.querySelector(".video-container-right");
const videoFn = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(videoSection);
  if (clientRect < triggerBottom) videoContainerRight.classList.add("animate");
  else videoContainerRight.classList.remove("animate");
};

window.addEventListener("scroll", videoFn);

// available on section animation

const availableOnSection = document.querySelector(".available-on-section");
const availableOnRight = document.querySelector(".available-on-left");
const availableOnFn = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(availableOnSection);
  if (clientRect < triggerBottom) availableOnRight.classList.add("animate");
  else availableOnRight.classList.remove("animate");
};

window.addEventListener("scroll", availableOnFn);

// carausol-section animation

const appScreenSection = document.querySelector(".app-screens-section");
const carausolContainer = document.querySelector(".carausol-container");
const carausolContainerFn = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(appScreenSection);
  if (clientRect < triggerBottom) carausolContainer.classList.add("animate");
  else carausolContainer.classList.remove("animate");
};

window.addEventListener("scroll", carausolContainerFn);

// Integrate section animation

const integrateSection = document.querySelector(".integrate-section");
const integrateContainerRight = document.querySelector(
  ".integrate-container-right"
);
const integrateSectionFn = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(integrateSection);
  if (clientRect < triggerBottom)
    integrateContainerRight.classList.add("animate");
  else integrateContainerRight.classList.remove("animate");
};

window.addEventListener("scroll", integrateSectionFn);

// faq section animation
const faqSection = document.querySelector(".faq-section");
const faqSectionRight = document.querySelector(".faq-section-right");
const faqSectionFn = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(faqSection);
  if (clientRect < triggerBottom) faqSectionRight.classList.add("animate");
  else faqSectionRight.classList.remove("animate");
};

window.addEventListener("scroll", faqSectionFn);

// features slide image function

const featureLinks = document.querySelectorAll(".feature-link");
const featuresScreenEl = document.querySelectorAll(".features-screen-image");
const featuresDotsEl = document.querySelectorAll(".features-dots-item");
const featuresDotsItem = document.querySelectorAll(".features-dots-item");
const featuresContentEl = document.querySelectorAll(".features-right-view-top");

function activeToggler(e, el) {
  if (e.target.dataset.slideImage == "1") {
    featureLinks[0].classList.add("active");
    featuresDotsItem[0].classList.add("active");
    featuresContentEl[0].classList.add("active");
    featuresScreenEl.forEach((screen) => {
      screen.style.transform = "translateX(-0%)";
    });
  } else if (e.target.dataset.slideImage == "2") {
    featureLinks[1].classList.add("active");
    featuresDotsItem[1].classList.add("active");
    featuresContentEl[1].classList.add("active");

    featuresScreenEl.forEach((screen) => {
      screen.style.transform = "translateX(-109%)";
    });
  } else if (e.target.dataset.slideImage == "3") {
    featureLinks[2].classList.add("active");
    featuresDotsItem[2].classList.add("active");
    featuresContentEl[2].classList.add("active");
    featuresScreenEl.forEach((screen) => {
      screen.style.transform = "translateX(-216%)";
    });
  } else if (e.target.dataset.slideImage == "4") {
    featureLinks[3].classList.add("active");
    featuresDotsItem[3].classList.add("active");
    featuresContentEl[3].classList.add("active");
    featuresScreenEl.forEach((screen) => {
      screen.style.transform = "translateX(-325%)";
      el.classList.add("active");
    });
  }
}

const featuresHelperFn = (el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    featureLinks.forEach((item) => {
      item.classList.remove("active");
    });

    featuresDotsItem.forEach((item) => {
      item.classList.remove("active");
    });

    featuresContentEl.forEach((item) => {
      item.classList.remove("active");
    });

    activeToggler(e, el);
  });
};

featureLinks.forEach((el) => {
  featuresHelperFn(el);
});

featuresDotsItem.forEach((el) => {
  featuresHelperFn(el);
});
