import React, { useState, useEffect, useCallback, useMemo } from 'react';
//custom fetch hook
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
      //returns a number
    }, 0) / 100
  );
};
const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  //use call back hook sees if anything changed and if yes, call back the function
  const addToCart = useCallback(() => {
    setCart(cart + 1);
    //the dependency array will create the function every time it is activated
  }, [cart]);

  // with useMemo the function will only recalculate( could be a problem for big calculations) only when there is a change in the value
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    //[products is a dependency array]
    [products]
  );

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}> cart : {cart} </h1>
      {/* <h1>Most Expensive : ${calculateMostExpensive(products)}</h1> */}
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};
//memo is checking if the props, products changed, since it is not changed there will be no re render
//react.memo looks for the props, use memo looks for the value
const BigList = React.memo(({ products, addToCart }) => {
  //every time a component is called useEffect and the page is refreshed
  useEffect(() => {
    console.log('refresh');
  });
  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      {/* every time the button is clicked there is a new page refresh, because props or state changes, triggering an event useCallbackk will avoice it */}
      <button onClick={addToCart}>add to cart</button>
    </article>
  );
};
export default Index;
