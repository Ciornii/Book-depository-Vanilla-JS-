import GetResource from './getResource';

export default class FilterByCategories extends GetResource {
   constructor() {
      super();
      this.pageCounter = 6;
      this.currentCounter = 0;
      this.dataLength = 0;
      this.data = [];
   }

   req() {
      this.getResource("http://localhost:3000/books")
         .then(data => this.filter(data))
         .then(this.render(this.data))
         .then(this.loadMore())
         .catch(err => console.error(err));
   }

   filter(response) {

      console.log("this.data before foreach");
      console.log(this.data );
      console.log(typeof this.data);
      
      let triggers = document.querySelectorAll(".products__categories ul li a");
      triggers.forEach((element) => {
         element.addEventListener("click", (e) => {
            e.preventDefault();

            this.pageCounter = 6;
        this.currentCounter = 0;
        this.dataLength = 0;
        this.data = [];
            
            const wrapper = document.querySelector(".products__results_items");
            wrapper.innerHTML = '';
           
            let keyWord = element.textContent.toLowerCase().trim();
            
            let filteredData = response.filter((item) => {
               return Object.keys(item).some((key)=>item[key].includes(keyWord));
            });
            
            console.log("inner foreach");
            console.log(response);
            console.log(typeof response);
            console.log(filteredData );
            console.log(typeof filteredData);
            console.log("end inner foreach");
        
            this.data = filteredData;
            
         });
      });
   
      console.log("this.data after foreach");
      console.log(this.data );
      console.log(typeof this.data);

     
   }
}