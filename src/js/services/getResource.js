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
            .then(data => this.render(data))
            .then(this.loadMore())
            .catch(err => console.error(err));
    }


    //TODO
    // alta idee pentru filter:
    // req {.then(data => this.filter(data))}
    // filter (response) {
    // eventlistner -> link -> textcontent(keyword)
    //      if(keyword) {
    //          filtrarea
    //         this.data = filteredData
    //      } else {
    //         this.data = response
    //      }
    // }

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
                this.loadMoreBtn.remove();
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
                this.render(this.data);
            } else {
                this.pageCounter = this.pageCounter + remainItems;
                this.render(this.data);
            }

            this.loadMoreBtn.style.display = 'none';
            setTimeout(() => {
                this.loadMoreBtn.style.display = 'block';
            }, 10);
        });
    }
}