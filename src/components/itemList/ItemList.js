import React from "react";
//Components
import {Item} from '../item/Item'
//Styles
import './ItemList.css'

//Logic
export const ItemList = ({data}) => {
    console.log(data)
    
    return(
        <div className="itemlist">
            {data.map(prod => <Item key={prod.id} data={prod} />)}
        </div>
    )
}

//Export
export default ItemList