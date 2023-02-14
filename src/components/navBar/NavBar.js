import React, { useContext } from "react";
import { CartContext } from "../../context/Context";
import {Link} from 'react-router-dom'
import logo from './logoNombre.jpg'

export const NavBar = () => {
    const [cart, setCart] = useContext(CartContext)

    const quantity = cart.reduce((acc, curr) => {
        return (setCart(acc + curr.quantity))
    }, 0)


return(
    <div className="container-fluid">
    <header className="Header-NavBar">
        
        <nav className="navbar navbar-expand-lg">
        <img src={logo} className='img' alt='...' ></img>
        <div className='collapse navbar-collapse'>
        <div className='navbar-nav'>
        <Link to={'/'}>Servican logo</Link>
        <li><Link to={'/productos'}/>Productos</li>
        <li><Link to={'/categoria/Alimento'} >Alimento</Link></li>
        <li><Link to={'/categoria/Accesorios'} >Accesorios</Link></li>
        <li><Link to={'/categoria/Higiene'} >Higiene</Link></li>
        <ul>
        <Link to={'/cart'}>logo carrito
            <li>
                <span>
                    {quantity}
                </span>
            </li>
        </Link>
        </ul>
        </div>
        </div>
        </nav>
    </header>
    </div>

)
}