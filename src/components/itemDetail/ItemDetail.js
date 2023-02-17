import React, { useState } from "react"
//Routes
import { Link } from "react-router-dom"
//Components
import { ItemCount } from "../itemCount/ItemCount"
//Context
import { useCartContext } from "../../context/Context"
//Styles
import './ItemDetail.css'

//Logic
export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext()
console.log(data.stock)

    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(data,quantity)
    }

    return(
        <div>
            <div><img className="img" src={data.image} alt='...'></img></div>
            <div>
                <p className="title">|{data.title}</p>
                <p className="description">{data.description}</p>
                <p className="price">Precio: ${data.price}
                </p>
            </div>
            {
                goToCart ? 
                    <Link className="Link" to={'/cart'}>Terminar compra</Link>
                : 
                <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
            }
        </div>
    )
}

//Export
export default ItemDetail