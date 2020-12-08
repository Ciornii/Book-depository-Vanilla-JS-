const getResource = () => {

    let pageCounter = 6,
        currentCounter = 0,
        dataLength = 0,
        data = [],
        loadMoreBtn = document.querySelector("#loadMore");

        
    (function req() {
        getResource("http://localhost:3000/books")
            .then(data => filter(data))
            .then(() => {
                loadMore();
            })
            .catch(err => console.error(err));
    }());


    async function getResource(url) {
        const res = await fetch(`${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }


    function filter(response) {

        render(response);

        let triggers = document.querySelectorAll(".products__filter ul li a");
        triggers.forEach((element) => {
            element.addEventListener("click", (e) => {
                e.preventDefault();

                triggers.forEach((link) => {
                    link.classList.remove('active');
                });
                e.target.classList.add('active');

                pageCounter = 6;
                currentCounter = 0;

                const wrapper = document.querySelector(".products__results_items");
                wrapper.innerHTML = '';

                loadMoreBtn.style.display = 'block';

                let keyWord = element.textContent.toLowerCase().trim();

                let filteredData = response.filter((item) => {
                    return Object.keys(item).some((key) => item[key].toLowerCase().trim().includes(keyWord));
                    //return item.category.toLowerCase().trim().includes(keyWord);
                });
                console.log(filteredData);

                render(filteredData);
            });
        });
    }


    function render(response) {
        dataLength = response.length;
        data = response;

        while (currentCounter < pageCounter) {

            template(response);

            currentCounter++;

            if (currentCounter >= dataLength) {
                loadMoreBtn.style.display = 'none';
                break;
            }
        }
    }


    function template(response) {
        let i = currentCounter;

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


    function loadMore() {
        loadMoreBtn.addEventListener("click", (e) => {
            e.preventDefault();

            let remainItems = dataLength - pageCounter;
            if (remainItems > 9) {
                pageCounter = pageCounter + 6;
                render(data);
            } else {
                pageCounter = pageCounter + remainItems;
                render(data);
            }
        });
    }
}

export default getResource;