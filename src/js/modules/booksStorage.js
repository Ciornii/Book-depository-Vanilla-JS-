export default class BooksStorage {
  constructor({
    addBtn,
    popupListWrapper,
    popupTrigger,
    counter,
    storageName
  } = {}) {
    this.addBtn = document.querySelectorAll(addBtn); // '[data-wishlist-btn]'
    this.addBtnSelector = addBtn;
    this.popupListWrapper = document.querySelector(popupListWrapper); // '.popup-list__wrapper'
    this.popupTrigger = document.querySelector(popupTrigger); // '.navbar__wishlist'
    this.counter = document.querySelector(counter); // '[data-wishlist-counter]'
    this.storageName = storageName;
  }

  createListItem(author, title, id) {
    return `
      <li class="popup-list__item" data-id="${id}">
        <div class="popup-list__title">${title}</div>
        <div class="popup-list__author">${author}</div>
        <button class="popup-list__delete">
          <svg>
            <use xlink:href="assets/icons/sprite.svg#delete"></use>
          </svg>
        </button>
      </li>
    `;
  }

  itemsCounter() {
    let length = this.popupListWrapper.children.length;
    this.counter.innerHTML = length;
  }

  deleteItems(itemParent) {
    let id = itemParent.dataset.id;
    if (document.querySelector(`.product__card[data-id="${id}"]`)) {
      document.querySelector(`.product__card[data-id="${id}"]`).querySelector(this.addBtnSelector).disabled = false;
    }
    itemParent.remove();
    this.itemsCounter();
    this.updateStorage();
  }

  listenerAddItems() {
    this.addBtn.forEach(el => {
      el.addEventListener('click', e => {
        let target = e.currentTarget;
        let parent = target.closest('.product__card');
        let id = parent.dataset.id;
        let title = parent.querySelector('.product__title').textContent;
        let author = parent.querySelector('.product__author').textContent;

        this.popupListWrapper.insertAdjacentHTML('afterbegin', this.createListItem(author, title, id));
        this.itemsCounter();
        this.updateStorage();
        target.disabled = true;
      });
    });
  }

  listenerDeleteItems() {
    this.popupListWrapper.addEventListener('click', e => {
      e.stopPropagation();

      if (e.target.closest('.popup-list__delete')) {
        this.deleteItems(e.target.closest('.popup-list__item'));
      }
    });
  }

  initialState() {
    let booksLocalStorage = localStorage.getItem(this.storageName);
    if (booksLocalStorage !== null) {
      this.popupListWrapper.innerHTML = booksLocalStorage;
      this.itemsCounter();

      document.querySelectorAll('.popup-list__item').forEach(el => {
        let id = el.dataset.id;
        if (document.querySelector(`.product__card[data-id="${id}"]`)) {
          document.querySelector(`.product__card[data-id="${id}"]`).querySelector(this.addBtnSelector).disabled = true; // TODO
        }
      });
    }
  }

  updateStorage() {
    let html = this.popupListWrapper.innerHTML;
    html = html.trim();

    if (html.length) {
      localStorage.setItem(this.storageName, html);
    } else {
      localStorage.removeItem(this.storageName);
      this.popupListWrapper.innerText = 'Your list is empty'; // TODO
    }
  }

  init() {
    try {
      this.listenerAddItems();
      this.listenerDeleteItems();
      this.initialState();
      this.updateStorage();
    } catch (e) {}
  }

}