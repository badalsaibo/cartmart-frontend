import React from 'react';
import { Link } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';

import './Nav.scss';

const getTotalCartItems = (cartItems) => {
  const total = cartItems.reduce((acc, currentItem) => {
    return acc + currentItem.quantity;
  }, 0);
  return total;
};

const Nav = ({ cartItems }) => {
  const totalCartItems = getTotalCartItems(cartItems);

  return (
    <nav className='nav'>
      <h1 className='heading'>cartmart</h1>
      <div className='cart'>
        <Link to='/cart'>
          <FiShoppingCart
            size='30px'
            color='#60D27E'
          />
        </Link>
        <span className={totalCartItems ? 'cart-number' : 'cart-number-hidden'}>{totalCartItems}</span>
      </div>
    </nav>
  );
};

export default Nav;