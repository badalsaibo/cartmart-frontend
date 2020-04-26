import React from 'react';

import AddToCartButton from '../AddToCartButton/AddToCartButton';

import './ItemCard.scss';

const ItemCard = ({ name, mrp, price, discount, imageUrl }) => {
  return (
    <div className='item'>
      <div className='item__image'>
        <img src={imageUrl} alt={name} />
      </div>
      <h5 className='item__name'>{name}</h5>
      <div className='item-price-box'>
        <div className='item-price-box__price'>{price}</div>
        <div className='item-price-box__mrp'>{mrp}</div>
      </div>
      <div className='item__discount'>
        {discount}
      </div>
      <AddToCartButton />
    </div>
  );
};

export default ItemCard;