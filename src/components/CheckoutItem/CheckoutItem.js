import React from 'react';
import { FaPlusCircle, FaMinusCircle, FaTimesCircle } from 'react-icons/fa';

import Discount from '../Discount/Discount';

import './CheckoutItem.scss';

const checkoutItemTotal = (quantity, price) => (quantity * price).toFixed(2);

const CheckoutItem = ({ cartItem, addToCart }) => {
  const { name, price, offer, display_image, quantity, gender, color_name } = cartItem;
  const color = color_name.split(' ')[0].toLocaleLowerCase();
  const total = checkoutItemTotal(quantity, price);
  const imageUrl = `https://images.bewakoof.com/t320/${display_image}`;
  return (
    <div className='checkout-item'>
      <div className='checkout-item__card'>

        <div className='checkout-item__image' style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>

        <div className='checkout-item__info'>
          <h5 className='checkout-item__name'>{name}</h5>
          <div className='checkout-item__others'>
            <span className='checkout-item__gender-color'>{gender} | {color}</span>
            <Discount discountValue={offer}/>
          </div>
        </div>

        <div className='checkout-item__quantity'>
          <FaMinusCircle size='1.5rem' color='#5D5D5D'/>
          <span className='checkout-item__quantity--amount'>{quantity}</span>
          <FaPlusCircle
            size='1.5rem' 
            color='#5D5D5D'
            onClick={() => addToCart(cartItem)}
          />
        </div>

        <div className='checkout-item__price'>
          ₹{total}
        </div>
      </div>

      <div className='checkout-item__remove'>
        <FaTimesCircle
          size='2.0rem'
          color='B44B63'
        />
      </div>
    </div>
  );
};

export default CheckoutItem;