export default class getResource {
    constructor() {
        this.pageCounter = 6;
        this.currentCounter = 0;
        this.dataLength = 0;
    }

    req() {
        this.getResource("http://localhost:3000/books")
            .then(data => this.render(data))
            .then(this.loadMore())
            .catch(err => console.error(err));
    }

    async getResource(url) {
        const res = await fetch(`${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    render(response) {

        while (this.currentCounter < this.pageCounter) {
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

            this.currentCounter++;
            this.dataLength = response.length;
        }
    }

     loadMore() {
        const loadMore = document.querySelector("#loadMore");
         loadMore.addEventListener("click", () => {

            let remainItems = this.dataLength - this.pageCounter;
            if (remainItems < 6) {
                this.pageCounter = this.pageCounter + remainItems;
                this.req();
                loadMore.remove();
            } else {
                this.pageCounter = this.pageCounter + 6;
                this.req();
            }
            loadMore.style.display = 'none';
            setTimeout(() => {
                loadMore.style.display = 'block';
            }, 10);

            console.log('pageCounter =' + this.pageCounter);
            console.log('currentCounter =' +this.currentCounter);
            console.log('dataLength =' +this.dataLength);
            
        });
    }


}