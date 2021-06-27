import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    // passes values directly to the set function
    setValue(0);
  };
  const complexIncrease = () => {
    //set timeout requires a callback function and the delay time
    setTimeout(() => {
      // setValue(value + 1);
      //the set function is asynchronous so it wont use the "current" value on state, it will get the grabbed one
      //to grab the updated value it should be passed as a function
      //prev state gets the current value
      //if it returns undefined the whole function will break, thats why it need a if statement
      //gets the value right before the update
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}></section>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      {/* passes the function inline */}
      <button className='btn' onClick={() => setValue(value - 1)}>
        decrease
      </button>
      {/* calls for the function reset */}
      <button className='btn' onClick={reset}>
        reset
      </button>
      <button className='btn' onClick={() => setValue(value + 1)}>
        increase
      </button>
      <section style={{ margin: '4rem 0' }}></section>
      <h2>more complex counter</h2>
      <h1>{value}</h1>
      {/* add with a delay */}
      <button className='btn' onClick={complexIncrease}>
        increase later
      </button>
    </>
  );
};

export default UseStateCounter;
