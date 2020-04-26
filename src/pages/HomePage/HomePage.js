import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <nav className='nav'>
        <h1 className='heading'>cartmart</h1>
        <div className='cart'>
          <FiShoppingCart
            size='30px'
            color='#60D27E'
          />
          <span className='cart-number'>12</span>
        </div>
      </nav>
      <div className='sidebar'></div>
      <main>
        <div className='items'>
          Item 1. Item 2.
        </div>
      </main>
    </div>
  );
};

export default HomePage;