import React from 'react';

import './Discount.scss';

const Discount = ({ discountValue }) => {
  return (
    <div className={discountValue ? 'discount-show' : 'discount-hidden'}>-&nbsp;{discountValue}</div>
  );
};

export default Discount;