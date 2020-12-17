const booksStorage = () => {
  const productsBtn = document.querySelectorAll('[data-wishlist-btn]');
  const productsList = document.querySelector('.popup-list__wrapper');
  const listIcon = document.querySelector('.navbar__wishlist');
  const counter = document.querySelector('[data-wishlist-counter]');

  const createListItem = (author, title, id) => {
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
  };

  productsBtn.forEach(el => {
    el.addEventListener('click', e => {
      let target = e.currentTarget;
      let parent = target.closest('.product__card');
      let id = parent.dataset.id;
      let title = parent.querySelector('.product__title').textContent;
      let author = parent.querySelector('.product__author').textContent;

      productsList.insertAdjacentHTML('afterbegin', createListItem(author, title, id));
      itemsCounter();
      updateStorage();
      target.disabled = true;
    });
  });

  productsList.addEventListener('click', e => {
    e.stopPropagation();

    if (e.target.closest('.popup-list__delete')) {
      deleteItems(e.target.closest('.popup-list__item'));
    }
  });

  const itemsCounter = () => {
    let length = productsList.children.length;
    counter.innerHTML = length;
  };

  const deleteItems = (itemParent) => {
    let id = itemParent.dataset.id;
    if (document.querySelector(`.product__card[data-id="${id}"]`)) {
      document.querySelector(`.product__card[data-id="${id}"]`).querySelector('[data-wishlist-btn]').disabled = false;
    }
    itemParent.remove();
    itemsCounter();
    updateStorage();
  };

  const initialState = () => {
    let booksLocalStorage = localStorage.getItem('wishlist');
    if (booksLocalStorage !== null) {
      productsList.innerHTML = booksLocalStorage;
      itemsCounter();

      document.querySelectorAll('.popup-list__item').forEach(el => {
        let id = el.dataset.id;
        if (document.querySelector(`.product__card[data-id="${id}"]`)) {
          document.querySelector(`.product__card[data-id="${id}"]`).querySelector('[data-wishlist-btn]').disabled = true;
        }
      })
    }
  };
  initialState();

  const updateStorage = () => {
    let html = productsList.innerHTML;
    html = html.trim();

    if (html.length) {
      localStorage.setItem('wishlist', html);
    } else {
      localStorage.removeItem('wishlist');
    }
  };

};

export default booksStorage;