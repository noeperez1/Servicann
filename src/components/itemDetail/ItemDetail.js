import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "../itemCount/ItemCount"
import { useCartContext } from "../../context/Context"

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext()


    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(data,quantity)
    }

    return(
        <div>

            {
                goToCart ? 
                    <Link to={'/cart'}>Terminar compra</Link>
                : 
                <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            }
        </div>
        
    )
}

export default ItemDetail