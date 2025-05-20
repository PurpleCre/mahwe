// scroll hooks
let lastScroll = 0;
const header = document.getElementById("main-header");
const logo = document.querySelector(".logo");
const ham = document.querySelector("#menu");
const nav = document.querySelector("nav");

// header scroll listener
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add light theme if scrolled down 50px
  if (currentScroll > 50) {
    header.classList.add("scrolled");
    logo.src = "./images/mahwe-dark.jpg";
  } else {
    header.classList.remove("scrolled");
    // logo.src = "./images/mahwe-light.jpg";
  }

  // Hide on scroll down, show on scroll up
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

// responsive ham and nav
ham.addEventListener("click", () => {
  ham.classList.toggle("show");
  nav.classList.toggle("show");
});