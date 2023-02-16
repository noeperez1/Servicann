import React from "react"
import { useCartContext } from "../../context/Context"


export const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();

    return(
        <div>
            <img src={product.image} alt='...'/>
            <div>
                <p>{product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Subtotal: ${product.quantity * product.price} </p>

                <button onClick={() => removeProduct(product.id)}>Eliminar Producto</button>
            </div>
        </div>
    )
}

export default ItemCart