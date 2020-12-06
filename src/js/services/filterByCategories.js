import GetResource from './getResource';

export default class FilterByCategories extends GetResource {
   constructor() {
      super();
    
   }

   req() {
      this.getResource("http://localhost:3000/books")
         .then(data => this.filter(data))
         .then(this.loadMore())
         .catch(err => console.error(err));
   }

   filter(response) {
      
     

      let triggers = document.querySelectorAll(".products__categories ul li a");
      triggers.forEach((element) => {
         element.addEventListener("click", (e) => {
            e.preventDefault();
            
            const wrapper = document.querySelector(".products__results_items");
            wrapper.innerHTML = '';
           
            let keyWord = element.textContent.toLowerCase().trim();
            
            let filteredData = response.filter((item) => {
               return Object.keys(item).some((key)=>item[key].includes(keyWord));
            });
            
            console.log(response);
            console.log(typeof response);
            console.log(filteredData );
            console.log(typeof filteredData);
        
            this.render(filteredData);
            
         });
      });
   

     
   }
}