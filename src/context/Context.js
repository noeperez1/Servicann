import React from "react"
import { useContext, useState } from "react"


export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product=> product.id !== id))
    }

    const addProduct = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        }else{
            setCart ([...cart, {...item, quantity}])
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => {
        cart.reduce((acc, productoActual)=> acc + productoActual.quantity, 0);
    }

    return(
        <div>

            <CartContext.Provider 
            value={{
                clearCart, 
                isInCart, 
                removeProduct, 
                addProduct, 
                totalPrice, 
                totalProducts, 
                cart}}>

                    {children}
            </CartContext.Provider>
        </div>
    
    )
}

export default CartProvider