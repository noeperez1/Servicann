import React from 'react';
//Components
import {CartWidget} from '../cartWidget/CartWidget'
import logo from '../navBar/logoNombre.jpg'
//Routes
import {Link} from 'react-router-dom';
//Styles
import './NavBar.css'

//Logic
export const NavBar = () => {
    
return(
    <div className="container-fluid">
    <header className="Header-NavBar">
        <nav className="navbar navbar-expand-lg">
            <Link to={'/'} className="links">
                <img src={logo} className='img-navBar' alt='...'/>
            </Link>
        <div className='collapse navbar-collapse'>
        <div className='navbar-nav'>
            <li><Link to={'/products'} className="links">Productos</Link></li>
            <li><Link to={'/category/Alimento'} className="links2">Alimento</Link></li>
            <li><Link to={'/category/Accesorios'} className="links2">Accesorios</Link></li>
            <li><Link to={'/category/Higiene'} className="links2">Higiene</Link></li>
            <li><Link to={'/cart'} className="links"><CartWidget /></Link></li>
        </div>
        </div>
        </nav>
    </header>
    </div>
)
}

//Export
export default NavBar
