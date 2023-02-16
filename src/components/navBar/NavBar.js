import React from 'react'
import { NavLink } from 'react-router-dom'
import {CartWidget} from '../cartWidget/CartWidget'
import logo from '../navBar/logoNombre.jpg'


export const NavBar = () => {
    
return(
    <div>
        <nav>
            <div>
            <img src={logo} alt='...'/>
                <NavLink to='/'>Home</NavLink>
            </div>
        <ul>
            <li>
                <NavLink to='/products'>Productos</NavLink>
            </li>
            <li>
                <NavLink to='/category/Alimento'>Alimento</NavLink>
            </li>
            <li>
                <NavLink to='/category/Accesorios'>Accesorios</NavLink>
            </li>
            <li>
                <NavLink to='/category/Higiene'>Higiene</NavLink>
            </li>
            <li>
                <NavLink to='/cart'> 
                    <CartWidget/>
                </NavLink>
            </li>
        </ul>
        
        </nav>

    </div>
)
}

export default NavBar