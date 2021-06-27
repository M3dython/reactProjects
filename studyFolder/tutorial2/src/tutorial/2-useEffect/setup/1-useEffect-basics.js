import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
//setEffect(()=>{})

// second parameter
//setEffect(()=>{},[]) array of dependencies, list of dependency
//a blank array will only run setEffect on the initial render
//setEffect(()=>{},[change]) array of dependencies, list of dependency
//or runs useEffect after every time the parameter inside the array is updated

// useEffect is used for any functionality outside of the component "side effect"
// useEffect is work outside of the component

const UseEffectBasics = () => {
  //will run after every render
  const [value, setValue] = useState(0);
  //hooks cannot be used conditionally
  //if(){useEffect()} is not possible

  //it is possible to set as many useEffect as desired
  useEffect(() => {
    console.log('call useEffect');
    //after every clicks, after every render, sets the title of the page to a new value
    //conditional can be placed inside hooks
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
    //runs useEffect after every time the parameter inside the array is updated
  }, [value]);
  useEffect(() => {
    console.log('hello world');
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick={() => {
          //after every click the button invokes a new render trough setValue running useEffect after every render
          setValue(value + 1);
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
