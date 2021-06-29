import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// only get a unique category from a list
//returns all the values for categories, multiple times
// const allCategories = items.map((item) => item.category);

// New Set()  returns an object of unique values, it returns a string, so join it without commas
//spread operator makes the object an array
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  // useState for the menu items imported from data
  const [menuItems, setMenuItems] = useState(items);
  //set categories with useState passing allCategories
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    // setMenuItems will be used to change the display items, but when looking for items that match a category always use the original list that won't change
    //if the item category property is the same as the category passed, filter it to display
    //filter the original list
    const newItems = items.filter((item) => item.category === category);

    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'> </div>
        </div>
        {/* pass to the prop filterItems the function filterItems, change the component 
        pass to the prop categories the value of categories*/}
        <Categories categories={categories} filterItems={filterItems} />
        {/* items is the props that will receive the menuItems state value passed to be displayed inside the menu */}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
