export default class BooksStorage {
  constructor({
    addBtn,
    popupParent,
    popupListWrapper,
    counter,
    storageName
  } = {}) {
    this.addBtn = document.querySelectorAll(addBtn);
    this.addBtnSelector = addBtn;
    this.popupParent = document.querySelector(popupParent);
    this.popupListWrapper = document.querySelector(popupListWrapper);
    this.counter = document.querySelector(counter);
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

      this.popupListWrapper.querySelectorAll('.popup-list__item').forEach(el => {
        let id = el.dataset.id;
        if (document.querySelector(`.product__card[data-id="${id}"]`)) {
          document.querySelector(`.product__card[data-id="${id}"]`).querySelector(this.addBtnSelector).disabled = 'true';
          console.log(document.querySelector(`.product__card[data-id="${id}"]`).querySelector(this.addBtnSelector));
        }
      });
    }
  }

  updateStorage() {
    let html = this.popupListWrapper.innerHTML.trim();
    let moreInfo = this.popupParent.querySelector('.popup-list__more');

    if (html.length) {
      localStorage.setItem(this.storageName, html);
      moreInfo.textContent = ('View full list');
      moreInfo.disabled = false;
    } else {
      localStorage.removeItem(this.storageName);
      moreInfo.textContent = ('List is empty');
      moreInfo.disabled = true;
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