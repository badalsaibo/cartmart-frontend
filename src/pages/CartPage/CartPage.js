import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import CheckoutButton from '../../components/CheckoutButton/CheckoutButton';

import './CartPage.scss';

const getTotalPrice = (cartItems) => {
  const total = cartItems.reduce((acc, cartItem) => {
    return (cartItem.price * cartItem.quantity) + acc;
  }, 0);
  return total.toFixed(2);
};

const CartPage = ({ cartItems, addToCart, history }) => {

  if (!cartItems.length) {
    return null;
  }

  const total = getTotalPrice(cartItems);
  return (
    <div className='cart-page'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CheckoutItem
            key={cartItem._id}
            cartItem={cartItem}
            addToCart={addToCart}
          />
        ))}
      </div>

      <div className='cart-total'>
        <span className='cart-total__text'>total</span>
        <span className='cart-total__price'>₹{total}</span>
      </div>

      <div className='cart-checkout'>
        <div
          className='cart-checkout__goback'
          onClick={history.goBack}
        >
          <BsArrowLeft
            className='cart-checkout__goback--arrow'
            size='2.2rem'
            color='hsl(256, 39%, 44%)'
          />
          <span className='cart-checkout__goback--text'>continue shopping</span>
        </div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default CartPage;