import React from 'react';

import { FaFilter } from 'react-icons/fa';

import './Filters.scss';

const Filters = () => {
  return (
    <div className='filters'>
      <div className='filters__header'>filters &nbsp;
        <FaFilter
          size='12px'
        />
      </div>

    </div>
  );
};

export default Filters;