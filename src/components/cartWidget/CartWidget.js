import React from "react";
import { useCartContext } from "../../context/Context";


export const CartWidget = () => {
    const {totalProducts} = useCartContext()

    return(
        <>
            <i className="bi bi-cart">
                <span>{totalProducts() || ''}</span>
            </i>
        
        </>
    )
}

export default CartWidget