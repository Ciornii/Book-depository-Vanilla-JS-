import cards from "./modules/cards";
import popup from "./modules/popup";
import scrolling from "./modules/scrolling";

document.addEventListener("DOMContentLoaded", function (event) {
  "use strict";

  cards();
  popup();
  scrolling(".scroll-up");

  //==============================================================================================
  //============================================================ Preloader

  const preloader = document.querySelector(".preloader");
  if (preloader) {
    setTimeout(function () {
      preloader.classList.add("show");

      setTimeout(function () {
        document.querySelector(".loader-element").classList.add("hide");
      }, 200);
    }, 1000);
  }

  //==============================================================================================
  //============================================================  NavBar on Scroll

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const navbar = document.querySelector(".navbar");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.classList.add("on-scroll");
    } else {
      navbar.classList.remove("on-scroll");
    }
  }

  //==============================================================================================
  //============================================================ Mobile Menu

  let menuToggle = document.querySelectorAll(".menu-toggle svg"),
    menu = document.querySelector(".mmenu");

  menuToggle.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.toggle("mmenu-hide");
    });
  });
  
});

window.addEventListener("load", (event) => {
  document.querySelector(".loader").style.display = "none";
});
