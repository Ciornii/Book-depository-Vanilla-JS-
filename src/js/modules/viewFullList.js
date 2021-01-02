import modals from "./modals";

function viewFullList(response) {
  modals();

  function bookModalTemplate(data) {
    return `
    <div class="list-item" data-id="${data.id}">
      <div class="list-item__img">
        <img src="${data.photo}" alt="${data.title}"></img>
      </div>
      <div class="list-item__content">
          <div class="list-item__title">
              <h2>${data.title}</h2>
          </div>
          <div class="list-item__author">
              by ${data.author}
          </div>
          <div class="list-item__btns">
            <button class="btn list-item__book">
              Read book
            </button>
            <button class="btn list-item__summary">
              Read summary
            </button>
          </div>
      </div>
      <button class="list-item__delete">
        <svg>
          <use xlink:href="assets/icons/sprite.svg#close"></use>
        </svg>
      </button>
    </div>
    `;
  }

  document.querySelectorAll(".popup-list__more").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(".modal__inner").innerHTML = "";
      let list = document.createElement("div");
      list.classList.add("modal__list");
      document.querySelector(".modal__inner").appendChild(list);

      let target = e.currentTarget;
      let parent = target.closest(".popup-list");
      let books = parent.querySelectorAll(".popup-list__item");

      books.forEach((book) => {
        let id = book.dataset.id;

        let filteredData = response.filter((item) => {
          return item.id == id;
        });

        list.insertAdjacentHTML(
          "beforeend",
          bookModalTemplate(filteredData[0])
        );
      });
    });
  });
}

export default viewFullList;
