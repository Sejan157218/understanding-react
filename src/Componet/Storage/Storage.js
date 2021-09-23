import React, { useEffect, useState } from 'react';
import ShowStorage from './ShowStorage/ShowStorage';

const Storage = () => {
    const [storages,setStorages] = useState([])

    useEffect(()=>{
        fetch('./Storage.json')
            .then(res=>res.json())
            .then(data=>setStorages(data))
    },[])
    const total = (previous,current)=> previous + current.balance
    const totalBalance = storages.reduce(total,0)
    return (
        <div>
           {
              storages.map(storage=><ShowStorage key={storage._id} data={storage}></ShowStorage>) 
           }
        </div>
    );
};

export default Storage;