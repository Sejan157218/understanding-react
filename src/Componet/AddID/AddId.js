
const AddID = id => {
   const exists = localStorage.getItem('shopping_cart');
   let shopping_cart = {}
   if(!exists){
    shopping_cart[id] = 1;
   }
   else{
    shopping_cart = JSON.parse(exists);
       if(shopping_cart[id]){
           const newValue = shopping_cart[id] +1;
           shopping_cart[id] = newValue;
       }
       else{
        shopping_cart[id] = 1;
       }
   }
   localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart))
};

export default AddID;