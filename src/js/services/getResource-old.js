import LocalStorage from '../utils/localStorage';

const getResource = () => {

    let pageCounter = 6,
        currentCounter = 0,
        dataLength = 0,
        data = [],
        loadMoreBtn = document.querySelector("#loadMore");

        let localStorage = new LocalStorage();
        
    (function req() {
        getResource("http://localhost:3000/books")
            .then(data => filter(data))
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
        loadMore();

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
                    return Object.keys(item).some((key) => item[key].toString().toLowerCase().trim().includes(keyWord));
                    //return item.category.toLowerCase().trim().includes(keyWord);
                });

                render(filteredData);
            });
        });
    }


    function render(response) {
        dataLength = response.length;
        data = response;

        while (currentCounter < pageCounter) {

            createCards(response);

            currentCounter++;

            if (currentCounter >= dataLength) {
                loadMoreBtn.style.display = 'none';
                break;
            }
        }
    }


    function handleSetLocationStorage() {
        console.log('test');
    }


    function createCards(response) {
        const booksStore = localStorage.getBooks();
        let activeClass = '';
        let threePoints = "...";
        let title = "";

        let i = currentCounter;

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
                       <button class="btn ${activeClass}" onclick="handleSetLocationStorage();">
                            + Wishlist
                       </button>
                   </div>
                </div>
               `;
        document.querySelector('.products__results_items').appendChild(card);
    }


    function loadMore() {
        loadMoreBtn.addEventListener("click", (e) => {
            e.preventDefault();

            e.target.classList.add("active");
            setTimeout(() => { e.target.classList.remove("active"); }, 1000);

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