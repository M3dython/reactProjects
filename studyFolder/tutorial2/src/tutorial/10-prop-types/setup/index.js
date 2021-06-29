import React from 'react';
import Product from './Product';
//imports the fetch hook to be used
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-prop-types-example';

const Index = () => {
  //using only the products, no loading property of the object received
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {/* for each item of the prop returns the product component passing the props product with the ley produc created */}
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
