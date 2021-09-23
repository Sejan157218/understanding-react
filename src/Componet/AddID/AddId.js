
const AddID = id => {
   const exist = localStorage.getItem(id);
   if(!exist){
    localStorage.setItem(id,1);
   }
   else{
       const newValue = parseInt(exist) +1;
       localStorage.setItem(id,newValue);
   }
};

export default AddID;