import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './services/firebase';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import {Cart} from './components/cart/Cart'
import {NavBar} from './components/navBar/NavBar'
import {Footer} from './components/footer/Footer'
import {ItemDetailContainer} from './components/itemDetailContainer/ItemDetailContainer'
import {CartProvider} from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>

  <BrowserRouter>
  <CartProvider>
  <NavBar/>
    <Routes>
          <Route exact path='/' element={<ItemListContainer/>}></Route>
          <Route exact path='/products' element={<ItemListContainer greeting="Lista de productos"/>}></Route>
          <Route exact path='/product/:productId' element={<ItemDetailContainer/>}></Route>
          <Route exact path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route exact path='/cart' element={<Cart/>}></Route>
    </Routes>
    <Footer/>
  </CartProvider>
  </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
