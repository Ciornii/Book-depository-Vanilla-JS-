function popup({ popupWrapper, trigger, activeClass, close }) {
  const popup = document.querySelector(popupWrapper);

  document.addEventListener("click", (e) => {
    if (e.target.closest(close)) {
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

export default popup;
