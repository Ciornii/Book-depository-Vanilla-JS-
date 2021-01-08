import { DB } from "../db";
import BooksStorage from "./booksStorage";
import quickView from "./quickView";
import viewFullList from "./viewFullList";

function cards() {
  function allStorages() {
    const wishlist = new BooksStorage({
      addBtn: '[data-add-to="Wish List"]',
      popupParent: '.popup-list[data-popup="Wish List"]',
      popupListWrapper: '.popup-list__wrapper[data-popup="Wish List"]',
      counter: '[data-counter="Wish List"]',
      storageName: "Wish List",
      changeListBtn: '[data-add-to="My Books"]',
    });
    wishlist.init();
    const mybooks = new BooksStorage({
      addBtn: '[data-add-to="My Books"]',
      popupParent: '.popup-list[data-popup="My Books"]',
      popupListWrapper: '.popup-list__wrapper[data-popup="My Books"]',
      counter: '[data-counter="My Books"]',
      storageName: "My Books",
      changeListBtn: '[data-add-to="Wish List"]',
    });
    mybooks.init();
  }

  class BookCard {
    constructor() {
      this.wrapper = document.querySelector(".products__cards");
      this.data = [];
      this.dataLength = 0;
      this.loadMoreBtn = document.querySelector("#loadMore");
      this.itemsPerPage = 6;
      this.pageCounter = this.itemsPerPage;
      this.currentCounter = 0;
      this.sorting = document.querySelector(".products__sorting");
      this.sortingInput = document.querySelector("select[data-sort-items]");
      this.title = "";
      this.description = "";
    }

    cardTemplate(response, i) {
      if (response[i].title.length > 45) {
        this.title = response[i].title.substr(0, 44) + "...";
      } else {
        this.title = response[i].title;
      }

      let card = document.createElement("li");
      card.classList.add("product__card");
      card.setAttribute("data-id", `${response[i].id}`);
      card.innerHTML = `
                <div class="product__img" data-learn-more>
                   <img src="${response[i].photo}" alt="${response[i].title}">
                </div>
                <div class="product__bottom">
                   <div class="product__info" data-learn-more>
                        <div class="product__title">
                            ${this.title}
                        </div>
                        <div class="product__author">
                            by ${response[i].author}
                        </div>
                        <div class="product__description">
                            ${response[i].description}
                        </div>
                        <div class="product__read-more">...</div>
                   </div>
                   <div class="product__actions">
                        <a href="#" class="product__link" data-learn-more>
                            Quick View 
                            <svg>
                                <use xlink:href="assets/icons/sprite.svg#eye"></use>
                            </svg>
                        </a>
                        <div class="product__btns">
                            <button data-add-to="My Books" title='My Books'>
                                    <svg>
                                        <use xlink:href="assets/icons/sprite.svg#book-fill"></use>
                                    </svg>
                            </button>
                            <button data-add-to="Wish List" title='Wish List'>
                                    <svg>
                                        <use xlink:href="assets/icons/sprite.svg#heart-fill"></use>
                                    </svg>
                            </button>
                        </div>
                   </div>
                </div>
               `;
      document.querySelector(".products__cards").appendChild(card);
    }

    render(response) {
      this.dataLength = response.length;
      this.data = response;

      while (this.currentCounter < this.pageCounter) {
        let i = this.currentCounter;
        this.cardTemplate(response, i);

        this.currentCounter++;

        if (this.currentCounter >= this.dataLength) {
          this.loadMoreBtn.style.display = "none";
          break;
        }
      }

      allStorages();
      quickView(this.data);
    }

    loadMore() {
      this.loadMoreBtn.addEventListener("click", (e) => {
        e.preventDefault();

        e.target.disabled = true;
        setTimeout(() => {
          e.target.disabled = false;
          let remainItems = this.dataLength - this.pageCounter;
          if (remainItems >= this.itemsPerPage + this.itemsPerPage / 2) {
            this.pageCounter = this.pageCounter + this.itemsPerPage;
            this.render(this.data);
          } else {
            this.pageCounter = this.pageCounter + remainItems;
            this.render(this.data);
          }
        }, 300);
      });
    }

    filter(response) {
      let triggers = document.querySelectorAll(".products__filter ul li a");
      triggers.forEach((element) => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(".scroll-up").click();

          triggers.forEach((link) => {
            link.classList.remove("active");
          });
          e.target.classList.add("active");

          this.pageCounter = this.itemsPerPage;
          this.currentCounter = 0;

          this.wrapper.innerHTML = "";
          this.loadMoreBtn.style.display = "block";
          this.sorting.style.display = "inline";

          let keyWord = element.textContent.toLowerCase().trim();

          let filteredData = response.filter((item) => {
            return Object.keys(item).some((key) =>
              item[key].toString().toLowerCase().trim().includes(keyWord)
            );
          });
          this.data = filteredData;

          this.sortItems();
          this.render(this.data);
        });
      });
    }

    search(response) {
      const searchBar = document.getElementById("searchBar");
      let searchResult = [];

      searchBar.addEventListener("keyup", (e) => {
        if (e.keyCode == 13) {
          this.wrapper.innerHTML = "";
          this.loadMoreBtn.style.display = "none";
          document.querySelectorAll(".products__filter a").forEach((el) => {
            el.classList.remove("active");
          });
          this.sorting.style.display = "none";
          document.querySelector(".scroll-up").click();

          let searchResultInfo = document.createElement("div");
          searchResultInfo.classList.add("search__response");
          this.wrapper.append(searchResultInfo);

          let keyWord = e.target.value.toLowerCase().trim();

          if (keyWord) {
            searchResult = response.filter((item) => {
              return Object.keys(item).some((key) =>
                item[key].toString().toLowerCase().trim().includes(keyWord)
              );
            });

            if (searchResult.length > 0) {
              if (searchResult.length == 1) {
                searchResultInfo.innerHTML = `(${searchResult.length}) Search result for: '${e.target.value}'`;
              } else {
                searchResultInfo.innerHTML = `(${searchResult.length}) Search results for: '${e.target.value}'`;
              }

              for (let i = 0; i < searchResult.length; i++) {
                this.cardTemplate(searchResult, i);
              }
            } else {
              searchResultInfo.innerHTML =
                "Nothing found. </br> Please try again with some different keywords.";
            }
          } else {
            searchResultInfo.innerHTML =
              "Nothing found. </br> Please try again with some different keywords.";
          }

          const lostFocus = () => {
            searchBar.value = "";
          };
          searchBar.addEventListener("blur", lostFocus, { once: true });

          quickView(response);
          allStorages();
        }
      });

      document.querySelector(".navbar__icon").addEventListener("click", () => {
        searchBar.focus();
      });
    }

    selectItemsPerPage() {
      const select = document.querySelector("select[data-items-perpage]");
      select.addEventListener("change", (e) => {
        let value = parseInt(select.value);
        this.itemsPerPage = value;
        this.pageCounter = value;
        this.currentCounter = 0;
        this.wrapper.innerHTML = "";
        this.render(this.data);

        if (this.dataLength <= this.pageCounter) {
          this.loadMoreBtn.style.display = "none";
        } else {
          this.loadMoreBtn.style.display = "block";
        }
      });
    }

    sortItems() {
      let valueSort = this.sortingInput.value;
      if (valueSort == "a-z") {
        this.data.sort(function (a, b) {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });
      } else if (valueSort == "z-a") {
        this.data.sort(function (a, b) {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        });
      }
    }

    sortItemsListener() {
      this.sortingInput.addEventListener("change", (e) => {
        this.currentCounter = 0;
        this.wrapper.innerHTML = "";
        this.sortItems();
        this.render(this.data);
      });
    }

    init(data) {
      try {
        this.render(data);
        this.loadMore();
        viewFullList(data);
        this.filter(data);
        this.search(data);
        this.selectItemsPerPage();
        this.sortItemsListener();
      } catch (e) {}
    }
  }

  let getBooks = new BookCard();
  getBooks.init(DB.books);
}

export default cards;
