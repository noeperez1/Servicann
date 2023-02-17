import React from "react"
//Context
import { useCartContext } from "../../context/Context"
//Styles
import './ItemCart.css'

//Logic
export const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
console.log(product.quantity, product.price)

    return(
        <div className="div" >
            <img className="img-cart" src={product.image} alt='...'/>
            <div className="div2">
                <p className="title">|{product.title}</p>
                <p className="quantity">Cantidad: {product.quantity}</p>
                <p className="subtotal">Subtotal: ${product.quantity * product.price} </p>
                <button className="button" onClick={() => removeProduct(product.id)}>Eliminar Producto</button>
                <button className="button2">Comprar</button>
            </div>
        </div>
    )
}

//Export
export default ItemCart