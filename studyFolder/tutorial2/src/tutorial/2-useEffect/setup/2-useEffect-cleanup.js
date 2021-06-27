//imports useState and useEffect
import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  //saves the window size inside size
  const [size, setSize] = useState(window.innerWidth);

  //set the new value of size, with the window width
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // call the function checkSize every time the window is resized
    window.addEventListener('resize', checkSize);
    //all the useEffects are being saved by the browser

    // returns a function that clean the saved effects

    return () => {
      //removes the event listener added by the useEffect
      window.removeEventListener('resize', checkSize);
    };
    //the empty dependency array will alow useState to run only one time and in this case could do the work of the cleanup function
  }, []);

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
