export default class GetResource {
    constructor() {
        this.pageCounter = 6;
        this.currentCounter = 0;
        this.dataLength = 0;
        this.data = [];
        this.loadMoreBtn = document.querySelector("#loadMore");
    }

    req() {
        this.getResource("http://localhost:3000/books")
            .then(data => this.filter(data))
            .then(this.loadMore())
            .catch(err => console.error(err));
    }

    filter(response) {
        let filter = false;
        let filteredData = [];

        let triggers = document.querySelectorAll(".products__categories ul li a");
        triggers.forEach((element) => {
            element.addEventListener("click", (e) => {
                e.preventDefault();

                this.pageCounter = 6;
                this.currentCounter = 0;
                
                const wrapper = document.querySelector(".products__results_items");
                wrapper.innerHTML = '';

                this.loadMoreBtn.style.display = 'block';

                let keyWord = element.textContent.toLowerCase().trim();

                filteredData = response.filter((item) => {
                    return Object.keys(item).some((key) => item[key].toLowerCase().trim().includes(keyWord));
                });

                this.render(filteredData);
            });
        });

//TODO 1)block below 2)why 2 books business?

        if (filter) {
            this.render(filteredData);
        } else {
            this.render(response);
        }
    }

    async getResource(url) {
        const res = await fetch(`${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    render(response) {
        this.dataLength = response.length;
        this.data = response;

        while (this.currentCounter < this.pageCounter) {

            this.template(response);

            this.currentCounter++;

            if (this.currentCounter >= this.dataLength) {
                this.loadMoreBtn.style.display = 'none';
                break;
            }
        }
    }

    template(response) {
        let i = this.currentCounter;
        let card = document.createElement('div');

        card.classList.add('products__item');

        card.innerHTML = `
                <div class="products__item_img">
                   <img src="${response[i].photo}" alt="${response[i].title}">
                </div>
                <div class="products__item_bottom">
                   <div class="products__item_info">
                        <div class="products__item_title">
                            ${response[i].title}
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
                       <button class="btn">+ Wishlist</button>
                   </div>
                </div>
               `;
        document.querySelector('.products__results_items').appendChild(card);
    }

    loadMore() {
        this.loadMoreBtn.addEventListener("click", () => {

            let remainItems = this.dataLength - this.pageCounter;
            if (remainItems > 9) {
                this.pageCounter = this.pageCounter + 6;
                // this.loadMoreBtn.style.display = 'none';
                // setTimeout(() => {
                //     this.loadMoreBtn.style.display = 'block';
                // }, 10);
                this.render(this.data);
            } else {
                this.pageCounter = this.pageCounter + remainItems;
                // this.loadMoreBtn.style.display = 'none';
                // setTimeout(() => {
                //     this.loadMoreBtn.style.display = 'block';
                // }, 10);
                this.render(this.data);
            }


        });
    }
}