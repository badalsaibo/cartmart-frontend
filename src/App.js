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
  /* const [ cartStore, setCartStore ] = useState([
    {
      _id: "5e7f1d829218b616c2682bfb",
      quantity: 1,
      id: 232958,
      name: "Logo Batman Glow In Dark Half Sleeve T-Shirt (BML) ",
      url: "logo-batman-half-sleeve-t-shirt-for-men",
      gender: "Men",
      mrp: 449,
      all_offer_price: 449,
      price: 349,
      member_price: 331,
      tribe_text: "For TriBe Members",
      tribe_image_url: "",
      status: 1,
      flip_image: "",
      display_image: "logo-batman-glow-in-dark-half-sleeve-t-shirt-bml--men-s-printed-t-shirts-232958-1585370413.gif",
      limited_edition: false,
      color_name: "BLACK 01",
      group_count: 0,
      category_info: {
        gender: "Men",
        subclass: "T-Shirt"
      },
      child_category: {
        id: 160,
        url: "men-printed-t-shirts",
        name: "Men's Printed T-Shirts"
      },
      offer_type: "best_seller",
      sp: null,
      cat_designer: null,
      offer: "22% OFF",
      in_stock: 1,
      material: "100% Cotton",
      brand: "-1",
      model: "-1",
      experiment_id: "plp_sorting;default;v1",
      stock_comment: "ALMOST GONE",
      tags: {
        stock_indicator_tag: {
          label: "FEW LEFT"
        }
      }
    },
    {
      _id: "5e7f1d829218b616c2682c02",
      quantity: 10,
      id: 229506,
      name: "Deep Purple Half Sleeve T-Shirt",
      url: "deep-purple-half-sleeve-t-shirt-for-men",
      gender: "Men",
      mrp: 399,
      all_offer_price: 399,
      price: 399,
      member_price: 319,
      tribe_text: "For TriBe Members",
      tribe_image_url: "",
      status: 1,
      flip_image: "deep-purple-half-sleeve-t-shirt-men-s-plain-t-shirts-229506-1567078788.jpg",
      display_image: "deep-purple-half-sleeve-t-shirt-men-s-plain-t-shirts-229506-1583727185.jpg",
      limited_edition: false,
      color_name: "PURPLE 09",
      group_count: 24,
      category_info: {
        gender: "Men",
        subclass: "T-Shirt"
      },
      child_category: {
        id: 88,
        url: "men-plain-t-shirts",
        name: "Men's Plain T-Shirts"
      },
      offer_type: "all_offer",
      sp: null,
      cat_designer: null,
      offer: "",
      in_stock: 1,
      material: "100% Cotton",
      brand: "-1",
      model: "-1",
      experiment_id: "plp_sorting;default;v1"
    }
  ]); */

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
              render={(props) => <HomePage {...props} items={store} addToCart={addToCart}/>}
            />
            <Route
              exact
              path='/cart'
              render={(props) => <CartPage {...props} cartItems={cartStore} addToCart={addToCart} />}
            />
          </Switch>
      }
    </>
  );
}

export default App;
