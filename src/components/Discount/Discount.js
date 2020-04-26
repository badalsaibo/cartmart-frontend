import React from 'react';

import './Discount.scss';

const Discount = ({ discountValue }) => {
  return (
    <div className={discountValue ? 'discount-show' : 'discount-hidden'}>-&nbsp;{discountValue}&nbsp;%</div>
  );
};

export default Discount;