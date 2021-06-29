import React from 'react';

// Menu receives an object
const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        // destruction of each object inside the array from data
        const { id, title, img, desc, price } = menuItem;

        return (
          // there must be a unique id when using map
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
