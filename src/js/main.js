import GetResource from './services/getResource';
//import FilterByCategories from './services/filterByCategories';

document.addEventListener("DOMContentLoaded", function (event) {
    'use strict';

    new GetResource().req();
    //new FilterByCategories().req();
   
  
  
   
    // --------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------- Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(function () {
            preloader.classList.add('show');

            setTimeout(function () {
                document.querySelector('.loader-element').classList.add('hide');
            }, 200);
        }, 1000);
    }


    // --------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------  NavBar on Scroll
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        const navbar = document.querySelector(".navbar");
        if (document.body.scrollTop > 50|| document.documentElement.scrollTop > 50) {
            navbar.classList.add('on-scroll');
        } else {
            navbar.classList.remove('on-scroll');
        }
    }


    // --------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------- Mobile Menu

    let menuToggle = document.querySelectorAll('.menu-toggle svg'),
        menu = document.querySelector('.mmenu');

    menuToggle.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('mmenu-hide');
        });
    });


    // --------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------- Smooth scroll

    const upElem = document.querySelector('.pageUp');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 500) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });


    // --------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------- Pop up
    const popup = document.querySelector(".wishlist-popup");
   
    document.addEventListener("click", (e) => {
        if(e.target.closest('.wishlist-popup__close')) {
            popup.classList.remove("show");  
        } else if(e.target.closest('.navbar__icons__wishlist')){
            popup.classList.toggle("show");
        } else if(e.target.closest('.wishlist-popup')) {
            popup.classList.add("show");
        } else {
            popup.classList.remove("show");
        }
    });

});