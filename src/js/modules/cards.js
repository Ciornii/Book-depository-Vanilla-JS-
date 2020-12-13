import {
    getResource
} from '../services/services';

import LocalStorage from '../utils/localStorage';

function cards() {
    class BookCard {
        constructor() {
            this.pageCounter = 6;
            this.currentCounter = 0;
            this.dataLength = 0;
            this.data = [];
            this.loadMoreBtn = document.querySelector("#loadMore");
            this.localStorage = new LocalStorage();
        }

        filter(response) {

            this.render(response);
            this.loadMore();
            this.handlerSetLocalStorage();

            let triggers = document.querySelectorAll(".products__filter ul li a");
            triggers.forEach((element) => {
                element.addEventListener("click", (e) => {
                    e.preventDefault();

                    triggers.forEach((link) => {
                        link.classList.remove('active');
                    });
                    e.target.classList.add('active');

                    this.pageCounter = 6;
                    this.currentCounter = 0;

                    const wrapper = document.querySelector(".products__results_items");
                    wrapper.innerHTML = '';

                    this.loadMoreBtn.style.display = 'block';

                    let keyWord = element.textContent.toLowerCase().trim();

                    let filteredData = response.filter((item) => {
                        return Object.keys(item).some((key) => item[key].toString().toLowerCase().trim().includes(keyWord));
                        //return item.category.toLowerCase().trim().includes(keyWord);
                    });

                    this.render(filteredData);
                });
            });
        }


        render(response) {
            this.dataLength = response.length;
            this.data = response;

            while (this.currentCounter < this.pageCounter) {

                this.createCards(response);

                this.currentCounter++;

                if (this.currentCounter >= this.dataLength) {
                    this.loadMoreBtn.style.display = 'none';
                    break;
                }
            }
        }

        handlerSetLocalStorage() {
            document.addEventListener("click", (e) => {
                e.preventDefault();

                if (e.target.matches('[data-id]')) {

                    let id = e.target.getAttribute("data-id");

                    const {
                        pushProduct,
                        books
                    } = this.localStorage.putBooks(id);

                    if (pushProduct) {
                        e.target.classList.add('active');
                    } else {
                        e.target.classList.remove('active');
                    }
                }
            });
        }

        createCards(response) {
            const booksStore = this.localStorage.getBooks();
            let activeClass = '';
            let threePoints = "...";
            let title = "";

            let i = this.currentCounter;

            if (booksStore.indexOf(response[i].id) === -1) {
                activeClass = '';
            } else {
                activeClass = 'active';
            }

            if (response[i].title.length > 45) {
                title = response[i].title.slice(0, 44).concat(threePoints);
            } else {
                title = response[i].title;
            }

            let card = document.createElement('div');
            card.classList.add('products__item');
            card.innerHTML = `
                <div class="products__item_img">
                   <img src="${response[i].photo}" alt="${response[i].title}">
                </div>
                <div class="products__item_bottom">
                   <div class="products__item_info">
                        <div class="products__item_title">
                            ${title}
                        </div>
                        <div class="products__item_author">
                            by ${response[i].author}
                        </div>
                   </div>
                   <a href="#" class="products__item_view">
                       Quick View 
                       <svg>
                           <use xlink:href="assets/icons/sprite.svg#eye"></use>
                       </svg>
                   </a>
                   <div class="products__item_btns">
                       <button class="btn btn--green">+ My Books</button>
                       <button class="btn ${activeClass}" data-id="${response[i].id}">
                            + Wishlist
                       </button>
                   </div>
                </div>
               `;
            document.querySelector('.products__results_items').appendChild(card);
        }

        loadMore() {
            this.loadMoreBtn.addEventListener("click", (e) => {
                e.preventDefault();

                e.target.classList.add("active");
                setTimeout(() => {
                    e.target.classList.remove("active");
                }, 1000);

                let remainItems = this.dataLength - this.pageCounter;
                if (remainItems > 9) {
                    this.pageCounter = this.pageCounter + 6;
                    this.render(this.data);
                } else {
                    this.pageCounter = this.pageCounter + remainItems;
                    this.render(this.data);
                }
            });
        }
    }

    let getBooks = new BookCard();


    getResource("http://localhost:3000/books")
        .then(data => getBooks.filter(data))
        .catch(err => console.error(err));

}

export default cards;