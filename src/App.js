import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { loadData } from './services/requests';

import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';

import './App.css';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ store, setStore ] = useState([]);
  const [ cartStore, setCartStore ] = useState([]);

  const addToCart = (itemToAdd) => {
    const alreadyExists = cartStore.find((cartItem) => cartItem.id === itemToAdd.id);
    if (alreadyExists) {
      const updatedCart = cartStore.map((cartItem) => {
        if (cartItem.id === itemToAdd.id) {
          cartItem.quantity = cartItem.quantity + 1;
        }
        return cartItem;
      });
      setCartStore(updatedCart);
      return;
    }
    /* -- Else just add it to cartStore -- */
    setCartStore([
      ...cartStore,
      { ...itemToAdd }
    ]);
  };

  const deleteFromCart = (itemToDelete) => {
    const updatedCart = cartStore.filter((cartItem) => {
      return cartItem.id !== itemToDelete.id;
    });
    setCartStore(updatedCart);
  };

  const subtractFromCart = (itemToSubtract) => {
    const itemInCart = cartStore.find((cartItem) => cartItem.id === itemToSubtract.id);
    const quantity = itemInCart.quantity;

    if (quantity === 1) {
      deleteFromCart(itemToSubtract);
      return;
    }

    const updatedCart = cartStore.map((cartItem) => {
      if (cartItem.id === itemToSubtract.id) {
        cartItem.quantity = cartItem.quantity - 1;
      }
      return cartItem;
    });
    setCartStore(updatedCart);
  };

  useEffect(() => {
    (async () => {
      const response = await loadData();
      setStore(response);
      setIsLoading(false);
    })();
  },[]);

  /* -- Logger -- */
  useEffect(() => console.log(cartStore), [cartStore]);

  return (
    <>
      <Nav cartItems={cartStore} />
      {
        isLoading ?
          'Loading...' :
          <Switch>
            <Route
              exact
              path='/'
              render={(props) =>
                <HomePage
                  {...props}
                  items={store}
                  addToCart={addToCart}
                />}
            />
            <Route
              exact
              path='/cart'
              render={(props) =>
                <CartPage
                  {...props}
                  cartItems={cartStore}
                  addToCart={addToCart}
                  deleteFromCart={deleteFromCart}
                  subtractFromCart={subtractFromCart}
                />}
            />
          </Switch>
      }
    </>
  );
}

export default App;
