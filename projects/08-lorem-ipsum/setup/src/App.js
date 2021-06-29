import React, { useState } from 'react';
import data from './data';
function App() {
  //saves in state how many paragraphs must be generated
  const [count, setCount] = useState(0);
  //saves in text the text to be displayed
  const [text, setText] = useState([]);

  //when the button is clicked, fetch data into text
  const handleSubmit = (e) => {
    e.preventDefault();

    //converts the string count to number
    //in the devTool numbers are blue and strings are black
    let amount = parseInt(count);
    //displays one paragraph if it is negative
    if (count <= 0) {
      amount = 1;
    }
    //display the max of 8 itens
    if (count > 8) {
      amount = 8;
    }

    //selects from the start of the array 0, to the end amount. the end is NOT included
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          //set to  count has the value inside the input, remember that value inside input is a string
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {/* display text when the button in clicked the value of data, selected the amount of paragraphs to be displayed */}
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
