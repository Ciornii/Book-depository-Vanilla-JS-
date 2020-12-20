import {
    getResource
} from '../services/services';

import BooksStorage from './booksStorage';

function cards() {

    const allStorages = () => {
        const wishlist = new BooksStorage({
            addBtn: '[data-add-to="Wish List"]',
            popupParent: '.popup-list[data-popup="Wish List"]',
            popupListWrapper: '.popup-list__wrapper[data-popup="Wish List"]',
            counter: '[data-counter="Wish List"]',
            storageName: 'Wish List',
            changeListBtn: '[data-add-to="My Books"]'
        });
        wishlist.init();
        const mybooks = new BooksStorage({
            addBtn: '[data-add-to="My Books"]',
            popupParent: '.popup-list[data-popup="My Books"]',
            popupListWrapper: '.popup-list__wrapper[data-popup="My Books"]',
            counter: '[data-counter="My Books"]',
            storageName: 'My Books',
            changeListBtn: '[data-add-to="Wish List"]'
        });
        mybooks.init();
    };
    class BookCard {
        constructor() {
            this.pageCounter = 6;
            this.currentCounter = 0;
            this.dataLength = 0;
            this.data = [];
            this.loadMoreBtn = document.querySelector("#loadMore");
        }

        createCards(response) {
            let threePoints = "...";
            let title = "";
            let i = this.currentCounter;

            if (response[i].title.length > 45) {
                title = response[i].title.slice(0, 44).concat(threePoints);
            } else {
                title = response[i].title;
            }

            let card = document.createElement('div');
            card.classList.add('product__card');
            card.setAttribute("data-id", `${response[i].id}`);
            card.innerHTML = `
                <div class="product__img">
                   <img src="${response[i].photo}" alt="${response[i].title}">
                </div>
                <div class="product__bottom">
                   <div class="product__info">
                        <div class="product__title">
                            ${title}
                        </div>
                        <div class="product__author">
                            by ${response[i].author}
                        </div>
                   </div>
                   <div class="product__actions">
                        <a href="#" class="product__link">
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
            document.querySelector('.products__cards').appendChild(card);
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

                allStorages();
            });
        }

        filter(response) {
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

                    const wrapper = document.querySelector(".products__cards");
                    wrapper.innerHTML = '';

                    this.loadMoreBtn.style.display = 'block';

                    let keyWord = element.textContent.toLowerCase().trim();

                    let filteredData = response.filter((item) => {
                        return Object.keys(item).some((key) => item[key].toString().toLowerCase().trim().includes(keyWord));
                        //return item.category.toLowerCase().trim().includes(keyWord);
                    });

                    this.render(filteredData);
                    allStorages();
                });
            });
        }

        init(response) {
            try {
                this.render(response);
                this.loadMore();
                allStorages();
                this.filter(response);
            } catch (e) {}
        }
    }

    let getBooks = new BookCard();


    getResource("http://localhost:3000/books")
        .then(data => getBooks.init(data))
        .catch(err => console.error(err));

}

export default cards;