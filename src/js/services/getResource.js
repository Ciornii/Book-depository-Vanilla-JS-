const getItems = () => {

   function req() {
      getResource("http://localhost:3000/books")                
           .then(data => createCards(data))         
           .catch(err => console.error(err));

       this.remove(); 
   }

   document.querySelector("button").addEventListener("click", req, {"once": true});

   async function getResource(url) {
       const res = await fetch(`${url}`);

       if (!res.ok) {
           throw new Error(`Could not fetch ${url}, status: ${res.status}`);
       }

       return await res.json();
   }

   function createCards(response) {
       response.forEach(item => {
           let card = document.createElement('div');

           console.log(response);

           card.classList.add('products__item');

           card.innerHTML = `
                    <div class="products__item_img">
                       <img src="${item.photo}" alt="${item.title}">
                    </div>
                    <div class="products__item_bottom">
                       <div class="products__item_info">
                            <div class="products__item_title">
                                ${item.title}
                            </div>
                            <div class="products__item_author">
                                ${item.author}
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
       });
   }

}

export default getItems;

  


