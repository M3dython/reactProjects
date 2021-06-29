import React, { useState, useEffect } from 'react';
import { useFetch } from './2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';
//saving the data into state
const Example = () => {
  //destructuring the received object, passing the url to be fetch trough the fetch hook (custom hook)
  const { loading, products } = useFetch(url);

  console.log(products);
  return (
    <div>
      {/* display loading when there is no data, and data once it was fetch */}
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default Example;
