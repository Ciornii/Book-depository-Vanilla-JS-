function popup() {
  function bindPopup({ popupWrapper, trigger, activeClass, close }) {
    const popup = document.querySelector(popupWrapper);

    document.addEventListener("click", (e) => {
      if (e.target.closest(close) || e.target.closest('.popup-list__more')) {
        popup.classList.remove(activeClass);
      } else if (e.target.closest(trigger)) {
        popup.classList.toggle(activeClass);
      } else if (e.target == popup || popup.contains(e.target)) {
        popup.classList.add(activeClass);
      } else {
        popup.classList.remove(activeClass);
      }
    });
  }

  bindPopup({
    popupWrapper: '.popup-list[data-popup="My Books"]',
    trigger: ".navbar__btn--my-books",
    activeClass: "popup-list--active",
    close: ".popup-list__close",
  });
  bindPopup({
    popupWrapper: '.popup-list[data-popup="Wish List"]',
    trigger: ".navbar__btn--wishlist",
    activeClass: "popup-list--active",
    close: ".popup-list__close",
  });
}

export default popup;
