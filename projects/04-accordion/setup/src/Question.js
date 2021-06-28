import React, { useState } from 'react';
//icons to be used imported from the react-icon library
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  //use state to display or hidden info inside paragraph
  //when useState is true the paragraph will be displayed
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        {/* onClick toggle the value of showInfo  */}
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {/* if show info is true returns + icon if its false returns - icon */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {
        //if showInfo is true displays the paragraph
        showInfo && <p>{info}</p>
      }
    </article>
  );
};

export default Question;
