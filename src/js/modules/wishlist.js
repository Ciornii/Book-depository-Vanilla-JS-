const wishlist = () => {
  const productsBtn = document.querySelectorAll('.wishlist-btn');
  const productsList = document.querySelectorAll('.popup-list__list');
  const listIcon = document.querySelector('.navbar__wishlist');
  const counter = document.querySelector('.navbar__counter');


  const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const createListItem = (author, title, id) => {
    return `
      <div class="popup-list__item" data-id="${id}">
        <div class="popup-list__title">${title}</div>
        <div class="popup-list__author">${author}</div>
      </div>
    `;
  };

  console.log('tst');

  productsBtn.forEach(el => {
    el.closest('.product__card').setAttribute('data-id', randomId());

    el.addEventListener('click', e => {

    });
  });

};

export default wishlist;