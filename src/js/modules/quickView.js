import modals from "./modals";

function quickView(response) {
  modals();

  function bookModalTemplate(bookInfo) {
    return `
    <div class="modal__img">
    <img src="${bookInfo[0].photo}" alt="${bookInfo[0].title}">
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

  document.querySelectorAll("[data-learn-more]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      let target = e.currentTarget;
      let parent = target.closest(".product__card");
      let bookId = parent.dataset.id;

      document.querySelector(".modal__inner").innerHTML = "";

      let bookInfo = response.filter((item) => {
        return item.id == bookId;
      });

      document
        .querySelector(".modal__inner")
        .insertAdjacentHTML("afterbegin", bookModalTemplate(bookInfo));
    });
  });
}

export default quickView;
