import React from "react";
import { useCartContext } from "../../context/Context";

export const CartWidget = () => {
    const {totalProducts} = useCartContext()

    return(
        <div>
            <p>ITEM</p>
            <span>{totalProducts() || ''}</span>
        </div>
    )
}

export default CartWidget