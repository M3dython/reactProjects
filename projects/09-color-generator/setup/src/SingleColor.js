import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

//receive from the props color and destructuring
//index is generated trough map
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // state alert to displayed once something is copied to clipboard
  const [alert, setAlert] = useState(false);
  //using util, convert the color rgb to an hex
  const hex = rgbToHex(...rgb);
  //converts the hex color fetch from the api Values to a string
  const hexValue = `#${hexColor.toUpperCase()}`;
  //removes the paragraph every time the alert is changed
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    //clearTimeout clears the time out so it wont accumulate with every change of alert
    return () => clearTimeout(timeout);
  }, [alert]);
  //converts the rgb array into a string with commas in between
  const bcg = rgb.join(',');

  return (
    //if the index is bigger than ten change the color of the text to a visible one, by adding a class called
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        //copies to the clipboard, javascript function
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'> copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
