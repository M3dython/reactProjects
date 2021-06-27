//jsx has to return a value, not an expression

import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // //|| if the first is falsy returns the second value
  // //|| if the first is truthy returns the first value
  // const firstValue = text || 'hello world';
  // //&&if  the first is truthy return the second
  // //&&if the first is falsy returns the returns the first
  // //&&if the first !true returns the first element
  // const secondValue = text && 'hello world';

  //the difference with ternary operator is that it will display something if it is  true and something if it is false
  //&& display if it is true
  return (
    <>
      <h1>{text || 'john doe'}</h1>
      {/* calling setIsError but currently getting it's opposite value toggling it */}
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* if the error is true display the <h1>error</h1> */}
      {isError && <h1>Error...</h1>}
      {/* if is error is true display the paragraph with <p>there is an error...</p> if it is false display  <div><h2>There is no error</h2></div> */}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}

      {/* <h1>{text || 'john doe'}</h1>
      <h1>{text && <h1>'true'</h1>} second</h1>
      <h1>{!text && <h1>'not true'</h1>}</h1> */}
      {/* <h1>{firstValue}</h1>
      <h1>{secondValue}</h1> */}
      {/* if () {console.log('return')}  cant be place here because it has to return a value, not an expression*/}
    </>
  );
};

export default ShortCircuit;
