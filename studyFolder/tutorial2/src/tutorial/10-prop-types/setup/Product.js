import React from 'react';
//PropTypes is imported from prop-types, it is uppercase, because in order to set PropTypes property on the component
import PropTypes from 'prop-types';
//imports the default image to be used on React apps
import defaultImage from '../../../assets/default-image.jpeg';

//destructuring of the received object product
const Product = ({ image, name, price }) => {
  //only if the image is there, get back the image.url
  const url = image && image.url;
  return (
    <article className='product'>
      {/* since there is an item without a property, there must be a condition */}
      {/* short circuit allows to show the default props */}
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      {/* the last object doesn't have the price to be displayed, so there must be a condition if price is empty */}
      {/* display the property or 3.99 if there is no property */}
      <p>{price || 3.99}</p>
    </article>
  );
};

//setting the PropTypes to be used, pointing if a property in one of the objects is missing
//rafcp
//name:pta
Product.propTypes = {
  //image is required to be am image
  // image is a variable of the type object
  image: PropTypes.object.isRequired,
  //name is a variable of the type string
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

//default property is set to be used when the required item is missing
Product.defaultProps = {
  name: 'default name',
  //default price to be displayed if a price is missing from the fetched price
  price: 3.99,
  //default image to be displayed if a image is missing from the fetched objected
  image: defaultImage,
};

export default Product;
