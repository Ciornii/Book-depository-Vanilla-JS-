import modals from "./modals";

function viewFullList(response) {
  modals();

  function bookModalTemplate(bookInfo) {
    return `
    <div class="modal__img">
    
    </div>
    <div class="modal__content">
        <div class="modal__title">
            <h2>${bookInfo[0].title}</h2>
        </div>
        <div class="modal__author">
            by ${bookInfo[0].author}
        </div>
        <div class="modal__description">
            ${bookInfo[0].description}
        </div>
    </div>
    `;
  }
  //<img src="${bookInfo[0].photo}" alt="${bookInfo[0].title}"></img>
  document.querySelectorAll(".popup-list__more").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      let target = e.currentTarget;
      let parent = target.closest(".popup-list");
      let storage = parent.dataset.popup;

      console.log(storage);

      let booksLocalStorage = localStorage.getItem(storage);
      console.log(booksLocalStorage);
      document.querySelector(".modal__inner").innerHTML = '';
      document.querySelector(".modal__inner").innerHTML = booksLocalStorage;
    });
  });
}

export default viewFullList;
