"use strict";
//Scroll function
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) navbar.classList.add("navbar-scrolled");
  else navbar.classList.remove("navbar-scrolled");
});

//Back to top function
const btn = document.querySelector(".backToTop");
btn.addEventListener("click", function () {
  if (window.scrollY >= 30) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
});
