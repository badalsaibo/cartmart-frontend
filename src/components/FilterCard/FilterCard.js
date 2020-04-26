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
            <React.Fragment key={idx}>
              <input
                className='filter-card__checkbox--checkbox'
                type='checkbox'
                id={checkbox}
              />
              <label
                className='filter-card__checkbox--label'
                htmlFor={checkbox}
              >
                <span className='filter-card__checkbox--dummy'></span>
                {checkbox}
              </label>
            </React.Fragment>
          ))
        }
      </div>
    </div>
  );
};

export default FilterCard;