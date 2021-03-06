import React from 'react';
import { AddID,removeId } from '../../AddID/AddId';

const ShowStorage = (props) => {
    // console.log(props.data._id);
   let {_id,balance,name,gender,company,email} = props.data
   const handler=Id=>{
       AddID(Id);
   }
   const removeHandler= id=>{
       removeId(id);
   }

    return (
        <div>
            <h5>Id : {_id}</h5>
            <h5>Name : {name}</h5>
            <h5>Balance : $ {balance} </h5>
            <h5>Gender :{gender} </h5>
            <h5>email : {email}</h5>
            <h5>company : {company}</h5>
            <button onClick={()=>handler(_id)}>Add Purchase</button>
            <button onClick={()=>removeHandler(_id)}>Remove Item</button>
        </div>
    );
};

export default ShowStorage;