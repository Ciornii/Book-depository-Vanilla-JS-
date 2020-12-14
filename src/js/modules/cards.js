import {
    getResource
} from '../services/services';

function cards() {
    class BookCard {
        constructor() {
            this.pageCounter = 6;
            this.currentCounter = 0;
            this.dataLength = 0;
            this.data = [];
            this.loadMoreBtn = document.querySelector("#loadMore");
        }

        filter(response) {

            this.render(response);
            this.loadMore();

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
                   <a href="#" class="product__link">
                       Quick View 
                       <svg>
                           <use xlink:href="assets/icons/sprite.svg#eye"></use>
                       </svg>
                   </a>
                   <div class="product__btns">
                       <button class="btn btn--green my-books-btn">+ My Books</button>
                       <button class="btn wishlist-btn">
                            + Wishlist
                       </button>
                   </div>
                </div>
               `;
            document.querySelector('.products__cards').appendChild(card);
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