import moduleTest from './modules/moduleTest';

document.addEventListener("DOMContentLoaded", function (event) {
    'use strict';

    moduleTest('test-title');
   
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

});