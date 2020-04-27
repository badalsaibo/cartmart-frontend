import React from 'react';
import { Link } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';

import './Nav.scss';

const Nav = () => {
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
        <span className='cart-number'>12</span>
      </div>
    </nav>
  );
};

export default Nav;