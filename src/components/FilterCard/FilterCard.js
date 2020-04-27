import React from 'react';

import './FilterCard.scss';

const FilterCard = (props) => {
  const { filterType, checkboxes } = props; // checkboxes will be an array of objects. { }
  return (
    <div className='filter-card'>
      <div className='filter-card__name'>{filterType}</div>
      <div className='filter-card__checkbox'>
        {
          checkboxes.map((checkbox, idx) => (
            <div className='filter-card__checkbox-group' key={idx}>
              <input
                className='filter-card__checkbox-group--checkbox'
                type='checkbox'
                id={checkbox}
              />
              <label
                className='filter-card__checkbox-group--label'
                htmlFor={checkbox}
              >
                <span className='filter-card__checkbox-group--dummy'></span>
                <span className='filter-card__checkbox-group--text'>{checkbox}</span>
              </label>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FilterCard;