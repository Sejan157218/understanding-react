
const AddID = id => {
   const exists = grtId();
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
   setItem(shopping_cart);
};
const grtId = () => localStorage.getItem('shopping_cart');
const setItem =(cart) =>localStorage.setItem('shopping_cart',JSON.stringify(cart))


const removeId = id =>{
    const exists = grtId();
    if(!exists){

    }
    else{
        const cartJson = JSON.parse(exists)
        delete cartJson[id];
        setItem(cartJson);

    }
}
export  {AddID,removeId};