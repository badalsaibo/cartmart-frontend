import React from 'react';

import './AddToCartButton.scss';

const AddToCartButton = ({ itemData, addToCart}) => {
  return (
    <button
      className='add-to-cart-button'
      onClick={() => addToCart(itemData)}
    >
        add to cart
    </button>
  );
};

export default AddToCartButton;