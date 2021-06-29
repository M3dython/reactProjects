import React from 'react';

//receives the prop with the name of filterItems and categories, destructing them
const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {/* creates the button that will call the function that will filter the items */}
      {/* for each item of the categories, create the button */}
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
