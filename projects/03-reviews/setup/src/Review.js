import React, { useState } from 'react';
import people from './data';
//to install react-icons npm install react-icons --save
//to use the icon, import specific icon from a specific library
//the component imported is an svg so it is possible to style it with css
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  //default is 0 because arrays in javascript starts at zero
  const [index, setIndex] = useState(0);
  //people[index] is used so it can shows different persons when index changes
  const { name, job, image, text } = people[index];

  // check if the value of the index is within the data.length -1
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // function that increases index so it calls the next person
  const nextPerson = () => {
    // function updating allows state to get the most recent value of state, using it to the desired
    //()=>  is different than ()=>{} because the curly braces returns the block, to return specific elements do ()=>{return}
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    // function updating allows state to get the most recent value of state, using it to the desired
    //()=>  is different than ()=>{} because the curly braces returns the block, to return specific elements do ()=>{return}
    //there must be a control form when the index is bigger than the number of content
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  //generates a random index so it is displayed a random person
  // let is purposefully used
  const randomPerson = () => {
    // randomNumber will be from 0 to the length of array -1, because Math.random generates random number from 0 to 0.99. Math.floor rounds it to the next bottom integer
    let randomNumber = Math.floor(Math.random() * people.length);
    //if the random number is equal to the current index, subtract one so there is no repetitive review displayed
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    // calls setIndex(checkNumber()) to see if the new index is within the range
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        {' '}
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          {/* quote icon imported from the react-icons library */}
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
