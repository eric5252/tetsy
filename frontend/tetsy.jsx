import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import { fetchCartItems, addToCart, updateCartItem, removeCartItem } from './actions/cart_items_actions';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    
    let store= configureStore();

    ReactDOM.render(<Root store={store}/>, root);
    
});
