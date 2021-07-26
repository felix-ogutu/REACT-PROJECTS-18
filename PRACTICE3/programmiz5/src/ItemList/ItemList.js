import './ItemList.css';
import React from 'react'
const ItemList=(props)=>{
    let {Items,deleteitem}=props;
    if(Items.length>0){

        let List=Items.map(item=>{
            return(
                <div key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.id}</span>
                    <span onClick={()=>deleteitem(item.id)}>&times;</span>
                </div>

            )
        })
    }else{
        let List=<div>no items</div>
    }


    return(
        <div>{ItemList}</div>
    )
}

export default ItemList;