const popupList = () => {
  const productsBtn = document.querySelectorAll('[data-wishlist-btn]');
  const productsList = document.querySelector('.popup-list__wrapper');
  const listIcon = document.querySelector('.navbar__wishlist');
  const counter = document.querySelector('[data-wishlist-counter]');


  const itemsCounter = () => {
    let length = productsList.children.length;
    counter.innerHTML = length;
  };

  const createListItem = (author, title, id) => {
    return `
      <li class="popup-list__item" data-id="${id}">
        <div class="popup-list__title">${title}</div>
        <div class="popup-list__author">${author}</div>
        <button class="popup-list__delete"></button>
      </li>
    `;
  };

  const deleteItems = (itemParent) => {
    let id = itemParent.dataset.id;
    document.querySelector(`.product__card[data-id="${id}"]`).querySelector('[data-wishlist-btn]').disabled = false;
    itemParent.remove();
    itemsCounter();
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
      target.disabled = true;
    });
  });

  productsList.addEventListener('click', e => {
    if (e.target.classList.contains('popup-list__delete')) {
      deleteItems(e.target.closest('.popup-list__item'));
    }
  });


};

export default popupList;