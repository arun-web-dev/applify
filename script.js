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

const navLinks = document.querySelectorAll(".nav-link");
const navLinksSlide = document.querySelectorAll(".nav-link-slide");

function navLinksActiveClassRemove() {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
}

function navLinksSlideAcitveClassRemove() {
  navLinksSlide.forEach((link) => {
    link.classList.remove("active");
  });
}
// // feautes section animation

const featuresSection = document.querySelector(".features-section");
const featuresLeftView = document.querySelector(".features-left-view");
const features = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(featuresSection);
  if (clientRect < triggerBottom) {
    featuresLeftView.classList.add("animate");
    navLinksActiveClassRemove();
    navLinksSlideAcitveClassRemove();
    navLinksSlide[0].classList.add("active");
    navLinks[0].classList.add("active");
  } else {
    featuresLeftView.classList.remove("animate");
    navLinks[0].classList.remove("active");
    navLinksSlide[0].classList.remove("active");
  }
};

window.addEventListener("scroll", features);

// videos section animation

const videoSection = document.querySelector(".video-section");
const videoContainerRight = document.querySelector(".video-container-right");
const videoFn = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(videoSection);
  if (clientRect < triggerBottom) {
    videoContainerRight.classList.add("animate");
    navLinksActiveClassRemove();
    navLinksSlideAcitveClassRemove();
    navLinks[1].classList.add("active");
    navLinksSlide[1].classList.add("active");
  } else videoContainerRight.classList.remove("animate");
};

window.addEventListener("scroll", videoFn);

// Steps section animation
// available on section animation

const stepsSection = document.querySelector(".steps-section");

const stepsSectionFn = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(stepsSection);
  if (clientRect < triggerBottom) {
    navLinksActiveClassRemove();
    navLinksSlideAcitveClassRemove();
    navLinks[2].classList.add("active");
    navLinksSlide[2].classList.add("active");
  } else availableOnRight.classList.remove("animate");
};

window.addEventListener("scroll", stepsSectionFn);

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
  if (clientRect < triggerBottom) {
    integrateContainerRight.classList.add("animate");
    navLinksActiveClassRemove();
    navLinks[3].classList.add("active");
    navLinksSlideAcitveClassRemove();
    navLinksSlide[3].classList.add("active");
  } else integrateContainerRight.classList.remove("animate");
};

window.addEventListener("scroll", integrateSectionFn);

// faq section animation
const faqSection = document.querySelector(".faq-section");
const faqSectionRight = document.querySelector(".faq-section-right");
const faqSectionFn = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(faqSection);
  if (clientRect < triggerBottom) {
    faqSectionRight.classList.add("animate");
    navLinksActiveClassRemove();
    navLinks[4].classList.add("active");
    navLinksSlideAcitveClassRemove();
    navLinksSlide[4].classList.add("active");
  } else faqSectionRight.classList.remove("animate");
};

window.addEventListener("scroll", faqSectionFn);

//Testimonal scroll function for nav links
// faq section animation
const testimonialSection = document.querySelector(".testimonials-section");

const testimonialSectionFn = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(testimonialSection);
  if (clientRect < triggerBottom) {
    navLinksActiveClassRemove();
    navLinks[5].classList.add("active");
    navLinksSlideAcitveClassRemove();
    navLinksSlide[5].classList.add("active");
  }
};

window.addEventListener("scroll", testimonialSectionFn);

// Download Section
const downloadSection = document.querySelector(".download-section");

const downloadSectionFn = () => {
  const triggerBottom = innerHeight();
  const clientRect = boundClient(downloadSection);
  if (clientRect < triggerBottom) {
    navLinksActiveClassRemove();
    navLinks[6].classList.add("active");
  }
};

window.addEventListener("scroll", downloadSectionFn);

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

// Show-close modal function

const videoModalSection = document.querySelector(".video-model-section");

const videoElementLink = document.querySelector(".video-container-link");

const videoModalContainerEl = document.querySelector(".video-modal-container");

const closeModalBtn = document.querySelector(".modal-close-btn");

const videoModalIframe = document.querySelector(".video-modal-iframe");

const iframeHtml = ` <iframe
class="video-modal-content"
src="https://www.youtube-nocookie.com/embed/1C75bKax4Eg?rel=0&showinfo=0&autoplay=1"
title="Videoframe"
allowfullscreen
></iframe>`;

videoElementLink.addEventListener("click", (e) => {
  e.preventDefault();

  videoModalSection.style.display = "flex";
  document.body.style.overflow = "hidden";
  videoModalIframe.innerHTML = "";
  videoModalIframe.insertAdjacentHTML("afterbegin", iframeHtml);
});

videoModalSection.addEventListener("click", (e) => {
  if (e.target.closest(".video-modal-container")) {
    e.preventDefault();
    return;
  }
  document.body.style.overflow = "unset";

  videoModalSection.style.display = "none";
});

closeModalBtn.addEventListener("click", () => {
  document.body.style.overflow = "unset";
  videoModalSection.style.display = "none";
});

// Slder Function

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
});

// faq Section

const faqSectionLeft = document.querySelector(".faq-section-left");

const faqToggleContainerBottom = document.querySelectorAll(
  ".faq-toggle-container-bottom"
);

const faqToggleContainer = document.querySelectorAll(".faq-toggle-container");

function clearFaqActiveClass() {
  faqToggleContainer.forEach((item) => {
    item.classList.remove("active");
  });
}

faqSectionLeft.addEventListener("click", (e) => {
  console.log(e.target.closest(".faq-toggle-container-top"));

  const faqToggleElement = e.target.closest(".faq-toggle-container-top");

  if (!faqToggleElement) return;

  clearFaqActiveClass();
  e.target.closest(".faq-toggle-container").classList.add("active");
});
