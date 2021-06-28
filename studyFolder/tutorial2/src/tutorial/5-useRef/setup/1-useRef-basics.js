import React, { useEffect, useRef } from 'react';

//most popular use of useRef is to target the DOM element allowing to set up uncontrolled input, similar to javascript
//useRef is similar to useState
// preserves value like useState but doest not trigger re-render
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  //using by default the value of null on the useRef
  // refContainer is an object with the property of current
  //when submitted the value of the input will be saved inside refContainer.current
  //any element can have the useRef and gets the property after "submitted"
  const refContainer = useRef(null);
  // console.log(divContainer.current); will print <div>Hello World</div>
  const divContainer = useRef(null);

  // to focus the input the moment the app is loaded
  useEffect(() => {
    console.log(refContainer.current);
    //focus the refContainer to the input with its as attribute
    refContainer.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* on form the correct syntax is onSubmit={handleSubmit} */}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          {/* the attribute refContainer refers to the useRef */}
          <input type='text' ref={refContainer} />
          {/*on the button the correct syntax is onClick={handleSubmit} */}
          <button className='btn' type='submit'>
            Submit
          </button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
