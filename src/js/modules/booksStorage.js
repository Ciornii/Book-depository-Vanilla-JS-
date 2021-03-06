export default class BooksStorage {
  constructor({
    addBtn,
    popupParent,
    popupListWrapper,
    counter,
    storageName,
    changeListBtn,
  } = {}) {
    this.addBtn = document.querySelectorAll(addBtn);
    this.addBtnSelector = addBtn;
    this.popupParent = document.querySelector(popupParent);
    this.popupListWrapper = document.querySelector(popupListWrapper);
    this.counter = document.querySelector(counter);
    this.storageName = storageName;
    this.changeListBtn = document.querySelectorAll(changeListBtn);
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

  listenerAddItems() {
    this.addBtn.forEach((el) => {
      el.addEventListener("click", (e) => {
        let target = e.currentTarget;
        let parent = target.closest(".product__card");
        let id = parent.dataset.id;
        let title = parent.querySelector(".product__title").textContent;
        let author = parent.querySelector(".product__author").textContent;

        let alreadyInList = [];
        this.popupListWrapper
          .querySelectorAll(".popup-list__title")
          .forEach((el) => {
            let existentTitle = el.textContent.toString().toLowerCase().trim();

            alreadyInList.push(existentTitle);
          });

        let exist = alreadyInList.includes(
          title.toString().toLowerCase().trim()
        );

        if (!exist) {
          this.popupListWrapper.insertAdjacentHTML(
            "afterbegin",
            this.createListItem(author, title, id)
          );
          this.itemsCounter();
          this.updateStorage();
          target.disabled = true;
        }
      });
    });
  }

  deleteItems(itemParent) {
    let id = itemParent.dataset.id,
      selector = document.querySelector(`.product__card[data-id="${id}"]`);
    if (selector) {
      selector.querySelector(this.addBtnSelector).disabled = false;
      selector.querySelector(this.addBtnSelector).classList.remove("active");
    }
    itemParent.remove();
    this.itemsCounter();
    this.updateStorage();
  }

  listenerDeleteItems() {
    this.popupListWrapper.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.target.closest(".popup-list__delete")) {
        this.deleteItems(e.target.closest(".popup-list__item"));
      }
    });

    document.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.target.closest(".list-item__delete")) {
        let id = e.target.closest(".list-item").dataset.id,
        selector = document.querySelector(`.popup-list__item[data-id="${id}"]`);

        this.deleteItems(e.target.closest(".list-item"));
        this.deleteItems(selector);
      }
    });
  }

  initialState() {
    let booksLocalStorage = localStorage.getItem(this.storageName);
    if (booksLocalStorage !== null) {
      this.popupListWrapper.innerHTML = booksLocalStorage;
      this.itemsCounter();

      this.popupListWrapper
        .querySelectorAll(".popup-list__item")
        .forEach((el) => {
          let id = el.dataset.id,
            selector = document.querySelector(
              `.product__card[data-id="${id}"]`
            );

          if (selector) {
            selector.querySelector(this.addBtnSelector).disabled = "true";
            selector.querySelector(this.addBtnSelector).classList.add("active");
          }
        });
    }
  }

  updateStorage() {
    let html = this.popupListWrapper.innerHTML.trim();
    let moreInfo = this.popupParent.querySelector(".popup-list__more");

    if (html.length) {
      localStorage.setItem(this.storageName, html);
      moreInfo.textContent = "View full list";
      moreInfo.disabled = false;
    } else {
      localStorage.removeItem(this.storageName);
      moreInfo.textContent = "List is empty";
      moreInfo.disabled = true;
    }
  }

  moveToAnotherList() {
    this.changeListBtn.forEach((el) => {
      el.addEventListener("click", (e) => {
        let target = e.currentTarget,
          parent = target.closest(".product__card"),
          id = parent.dataset.id,
          selector = document.querySelector(`.product__card[data-id="${id}"]`);

        if (selector) {
          selector.querySelector(this.addBtnSelector).disabled = false;
          selector
            .querySelector(this.addBtnSelector)
            .classList.remove("active");
          target.classList.add("active");
        }

        let existingOne = this.popupListWrapper.querySelector(
          `.popup-list__item[data-id="${id}"]`
        );

        if (existingOne) {
          existingOne.remove();
        }

        this.itemsCounter();
        this.updateStorage();
      });
    });
  }

  init() {
    try {
      this.listenerAddItems();
      this.listenerDeleteItems();
      this.initialState();
      this.updateStorage();
      this.moveToAnotherList();
    } catch (e) {}
  }
}
