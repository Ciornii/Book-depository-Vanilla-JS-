export default class Popup {
  constructor({
    popup,
    trigger,
    activeClass,
    close
  } = {}) {
    this.activeClass = activeClass;
    this.trigger = trigger;
    this.popup = document.querySelector(popup);
    this.close = close;
  }

  init() {
    document.addEventListener("click", (e) => {
      if (e.target.closest(this.close)) {
        this.popup.classList.remove(this.activeClass);
      } else if (e.target.closest(this.trigger)) {
        this.popup.classList.toggle(this.activeClass);
      } else if (e.target == this.popup || this.popup.contains(e.target)) {
        this.popup.classList.add(this.activeClass);
      } else {
        this.popup.classList.remove(this.activeClass);
      }
    });
  }
}