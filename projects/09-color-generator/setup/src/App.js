import React, { useState } from 'react';
import SingleColor from './SingleColor';

// using external library value to generate different shades of colors
import Values from 'values.js';

function App() {
  //state values
  //color input, to be mapped
  const [color, setColor] = useState('');
  // error if the input is incorrect
  //boolean states are used with a function isBoolean
  const [error, setError] = useState(false);
  //list of colors to be displayed
  const [list, setList] = useState(new Values('#324567').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
    //try to get the shades of color, if there is no such color generates an error
    try {
      //divide 100% by 10 and returns the shades of arrays
      let colors = new Values(color).all(10);
      //set the shades into state colors
      setList(colors);
    } catch (error) {
      // set error state to true if there is an error
      setError(true);
      console.log(error);
    }
  };
  return (
    //reactFragment is used, because return can only return one element in jsx
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          {/* passes the value of the input to the state color */}
          <input
            type='text'
            value={color}
            placeholder='#324567 '
            onChange={(e) => setColor(e.target.value)}
            //adds the class of error to the input if there is an error, the class makes the border red
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      {/* iterate over the list and display colors fetch from the api Values */}
      <section className='colors'>
        {list.map((color, index) => {
          //SingleColor receives the prop colors with destructuring
          //passes the prop hexColor with the value of the object color.hex
          return (
            <SingleColor
              key={index}
              {...color}
              //the index is used to change the color of the hex text, once the colors start to get to dark
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
