import React from 'react';

import Filters from '../Filters/Filters';
import FilterCard from '../FilterCard/FilterCard';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Filters />
      <FilterCard
        filterType='gender'
        checkboxes={['male', 'female']}
      />
      <FilterCard
        filterType='price'
        checkboxes={['< ₹399', '₹400 - ₹699', '₹700 - ₹999', '₹1000 - ₹2999']}
      />
      <FilterCard
        filterType='color'
        checkboxes={['Red', 'Blue', 'Green', 'Yellow']}
      />
    </div>
  );
};

export default Sidebar;