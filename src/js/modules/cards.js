import {
    getResource
} from '../services/services';

import BooksStorage from './booksStorage';
import modals from './modals';

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
            this.wrapper = document.querySelector(".products__cards");
            this.sorting = document.querySelector('.products__sorting');
        }

        cardTemplate(response, i) {
            let threePoints = "...";
            let title = "";

            if (response[i].title.length > 45) {
                title = response[i].title.slice(0, 44).concat(threePoints);
            } else {
                title = response[i].title;
            }

            let card = document.createElement('li');
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

                let i = this.currentCounter;
                this.cardTemplate(response, i);

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
                    document.querySelector('.scroll-up').click();

                    triggers.forEach((link) => {
                        link.classList.remove('active');
                    });
                    e.target.classList.add('active');

                    this.pageCounter = 6;
                    this.currentCounter = 0;

                    this.wrapper.innerHTML = '';

                    this.loadMoreBtn.style.display = 'block';

                    let keyWord = element.textContent.toLowerCase().trim();

                    let filteredData = response.filter((item) => {
                        return Object.keys(item).some((key) => item[key].toString().toLowerCase().trim().includes(keyWord));
                        //return item.category.toLowerCase().trim().includes(keyWord) || item.author.toLowerCase().trim().includes(keyWord);
                    });

                    this.render(filteredData);
                    this.sorting.style.display = 'inline';
                    allStorages();
                });
            });
        }

        search(response) {
            const searchBar = document.getElementById('searchBar');
            let searchResult = [];

            searchBar.addEventListener('keyup', (e) => {
                if (e.keyCode == 13) {
                    this.wrapper.innerHTML = '';
                    this.loadMoreBtn.style.display = 'none';
                    document.querySelectorAll('.products__filter a').forEach((el) => {
                        el.classList.remove('active');
                    });
                    this.sorting.style.display = 'none';
                    document.querySelector('.scroll-up').click();

                    let searchResultInfo = document.createElement('div');
                    searchResultInfo.classList.add('search__response');
                    this.wrapper.append(searchResultInfo);

                    let keyWord = e.target.value.toLowerCase().trim();

                    if (keyWord) {
                        searchResult = response.filter(item => {
                            return Object.keys(item).some((key) => item[key].toString().toLowerCase().trim().includes(keyWord));
                        });

                        if (searchResult.length > 0) {
                            searchResultInfo.innerHTML = `Search results for: '${e.target.value}'`;

                            for (let i = 0; i < searchResult.length; i++) {
                                this.cardTemplate(searchResult, i);
                            }
                        } else {
                            searchResultInfo.innerHTML = 'Nothing found. </br> Please try again with some different keywords.';
                        }
                    } else {
                        searchResultInfo.innerHTML = 'Nothing found. </br> Please try again with some different keywords.';
                    }

                    allStorages();
                }
            });

            document.querySelector('.navbar__icon').addEventListener('click', () => {
                searchBar.focus();
            });
        }


        bookModalTemplate(author, title, id) {
            return `
              <li class="popup-list__item" data-id="${id}">
                <div class="popup-list__title">${title}</div>
                <div class="popup-list__author">${author}</div>
              </li>
            `;
        }

        quickView(response) {

            document.querySelectorAll('.product__link').forEach(el => {
                el.addEventListener('click', e => {
                    e.preventDefault();

                    modals();

                    let target = e.currentTarget;
                    let parent = target.closest('.product__card');
                    let bookId = parent.dataset.id;

                    document.querySelector('.popup-form').innerHTML = '';

                    let bookInfo = response.filter((item) => {

                        return item.id == bookId;
                    });

                    console.log(bookInfo[0].title);

                    document.querySelector('.popup-form').insertAdjacentHTML('afterbegin',
                        this.bookModalTemplate(bookInfo[0].author, bookInfo[0].title, bookInfo[0].id));

                });
            });
        }

        init(response) {
            try {
                this.render(response);
                this.loadMore();
                allStorages();
                this.filter(response);
                this.search(response);
                this.quickView(response);
            } catch (e) {}
        }
    }

    let getBooks = new BookCard();


    getResource("http://localhost:3000/books")
        .then(data => getBooks.init(data))
        .catch(err => console.error(err));

}

export default cards;