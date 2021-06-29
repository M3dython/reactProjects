import { useState, useEffect } from 'react';

// this will be a hook that receives the url to be fetch
// a custom Hook must have use on the beginning
// either the function is a component or a custom hook

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  //fetch the data
  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  //the fetch runs by default the moment it is rendered
  //call useEffect when the dependency array [url] is changed
  useEffect(() => {
    getProducts();
  }, [url]);
  //return the object to make it used as a fetch hook
  return { loading, products };
};
