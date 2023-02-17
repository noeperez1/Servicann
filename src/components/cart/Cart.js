import React from "react";
//Routes
import { Link } from "react-router-dom";
//Context
import { useCartContext } from "../../context/Context";
//Components
import { ItemCart } from "../itemCart/ItemCart";
//Styles
import './Cart.css';

//Logic
export const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if(cart.length === 0) {
        return(
            <div>
                <p className="carrito">¡Ups! No hay nada por aquí</p>
                <Link className="Link" to='/products'>
                <i class="bi bi-arrow-bar-left">
                </i>
                Ir a productos
                </Link>
            </div>
        )
    }

    return(
        <div className="Cart-div">
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p className="Cart-price">
                Total: ${totalPrice()}
            </p>
        </div>
    )
}

//Export
export default Cart