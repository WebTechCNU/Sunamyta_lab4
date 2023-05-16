
 class Products {

     constructor() {

         this.classNameActive = 'products-element__btn_active';

         this.labelAdd = 'Добавить в корзину';

        this.labelRemove = 'Удалить из корзины';

    }




     handleSetLocationStorage(element, name) {

        let { pushProduct, products } = localStorageUtil.putProducts(name);

        

        if (pushProduct) {

            element.classList.add(this.classNameActive);

            element.innerHTML = this.labelRemove;

        } else {

            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;

         }




         headerPage.render(products.length);

     }




     render() {

         let productsStore = localStorageUtil.getProducts();

         out = '';




        arr.forEach(({ name, link , description ,price ,category }) => {

             let activeClass = '';

             let activeText = '';




            if (productsStore.indexOf(id) === -1) {

                 activeText = this.labelAdd;

             } else {

                 activeClass = ' '+this.classNameActive;

                 activeText = this.labelRemove;

             }




            out += `

                 <li class="products-element">

                     <span class="products-element__name">${description}</span>
                     <span class="products-element__name">${name}</span>
                     <img class="products-element__img" src="${link}" />

                     <span class="products-element__price">

                        ⚡️ ${price.toLocaleString()} USD

                   </span>

                   <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">

                        ${activeText}
                            </button>

                </li>
            `;

       });




     let out=`

            <ul class="products-container">

               ${out}

            </ul>

        `;




         ROOT_PRODUCTS.innerHTML = out;

     }

 }




 let productsPage = new Products();

 productsPage.render();
class LocalStorageUtil{
    constructor(){
            this.keyName='products';
    }
     getProducts(){
         let productsLocalStorage = localStorage.getItem(this.keyName);
         if (productsLocalStorage !==null){
                return JSON.parse(productsLocalStorage);

         }
         return[];
     }
     putProducts(id){
         let products = this.getProducts();
         let pushProduct = false;
       const index = products.indexOf(id);
         if(index===-1){
             products.push(id)
             pushProduct = true;
        }
         else{
             products.splice(index,1);
         }
        localStorage.setItem(this.keyName,JSON.stringify(products));
        return{ pushProduct,products}
     }
}
 let LocalStorageUtil = new LocalStorageUtil();