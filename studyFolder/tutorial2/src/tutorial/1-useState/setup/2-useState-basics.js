//useState is a function that comes from react
//since it is a named import it must be in curly braces
import React, { useState } from 'react';

//useState() return a undefined without a parameter
//useState() returns an array <<
//useState() return a function that will control the parameter

//array destruction allows everything to be in the same line
//setState usually gets a function with the start of set
const UseStateBasics = () => {
  //setText is a function that controls the parameter text
  // evert new parameter passed to setText will be the value of text
  const [text, setText] = useState('random title');
  //when the button is click the setText function receives the parameter and changes the text
  const handleClick = () => {
    text === 'random title' ? setText('hello world') : setText('random title');
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

//every hook starts with use
//components that invokes the hooks must be Uppercase
//the hook must be inside the function or the component body
// hooks cannot be called conditionally if(hook) is not possible
