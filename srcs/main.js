let toggle = document.getElementById("menu_toggle");
let aside = document.querySelector("aside");
toggle.addEventListener("click", () => {
  aside.classList.toggle("show_aside");
});
let themeToggle = document.querySelector("#theme_toggler");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("change_mode");
});
//  I'm a junior web developer
let span = document.querySelector(".second_text");
const animatetext = () => {
  setTimeout(() => {
    span.textContent = "Mechanical Engineer";
  }, 10000);
  setTimeout(() => {
    span.textContent = "Software with Autocade";
  }, 20000);
  setTimeout(() => {
    span.textContent = "Software with Office ";
  }, 0);
};
setInterval(animatetext, 30000);
animatetext();
// ...............................home active
// colorsSwitcher;
//  the btn up
let btnUp = document.querySelector(".btn-up");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    btnUp.classList.add("show___btn");
  } else {
    btnUp.classList.remove("show___btn");
  }
});
btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//  the swipper of the cards
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 15,
  effect: "coverflow",
  // effect: "cards",

  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // parallax: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  disableOnInteraction: "false",
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 850px
    750: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});
/* the swiper ======================================================= */
/* the swiper cards of the slider */
// the part of intersection observer
const observerElements = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show__element");
    } else {
      entry.target.classList.remove("show__element");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observerElements.observe(el));
// random images
let image = document.getElementById("aya_rehan");
let images = ["asset/abd1.jpg", "asset/abd2.jpg", "asset/abd3.jpg"];
setInterval(() => {
  let random = Math.floor(Math.random() * 3);
  image.src = images[random];
}, 3000);
// the popup icon
window.addEventListener("load", () => {
  setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "block";
  }, 2000);
});
document.getElementById("close_popup").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
});
