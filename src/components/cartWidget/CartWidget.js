import React from "react";
//Context
import { useCartContext } from "../../context/Context";
//Styles
import './CartWidget.css'

//Logic
export const CartWidget = () => {
    const {cart} = useCartContext()

    return(
        <div className="div-CartW">
        <i className="bi bi-cart"/>
        <span>
            {cart.length}
        </span>
        </div>
    )
}

//Export
export default CartWidget

