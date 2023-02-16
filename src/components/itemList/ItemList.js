import React from "react";
import {Item} from '../item/Item'

export const ItemList = ({data}) => {
    return(
        data.map(prod => <Item key={prod.id} data={prod} />)
    )
}

export default ItemList