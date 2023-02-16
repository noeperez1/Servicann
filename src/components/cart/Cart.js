import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/Context";
import { ItemCart } from "../itemCart/ItemCart";

export const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if(cart.length === 0) {
        return(
            <div>
                <p>No hay elementos en el carrito</p>
                <Link to={'/'}>Hacer compras </Link>
            </div>
        )
    }

    return(
        <div>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                Total: ${totalPrice()}
            </p>
        </div>
    )
}

export default Cart