import React from 'react';

import AddToCartButton from '../AddToCartButton/AddToCartButton';
import Discount from '../Discount/Discount';

import './ItemCard.scss';

const ItemCard = ({ itemData, addToCart }) => {
  const { name, mrp, price, offer, display_image } = itemData;
  const imageUrl = `https://images.bewakoof.com/t320/${display_image}`;
  return (
    <div className='item'>
      <div className='item__image' style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
      <h5 className='item__name'>{name}</h5>
      <div className='item__price-discount'>
        <div className='item-price-box'>
          <div className='item-price-box__price'>₹{price}</div>
          <div className='item-price-box__mrp'>₹{mrp}</div>
        </div>
        <Discount discountValue={offer}/>
      </div>
      <AddToCartButton
        itemData={itemData}
        addToCart={addToCart}
      />
    </div>
  );
};

export default ItemCard;