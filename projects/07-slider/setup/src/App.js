//the class prevSlide is used on CSS on the slides allows the slide to move

import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  //passing the data into the state
  const [people, setPeople] = useState(data);
  //there must be a change of index to pass the slides, starting at zero
  const [index, setIndex] = useState(0);
  //useEffect runs when index changes or people changes
  useEffect(() => {
    //gets the last index as the size of the array
    const lastIndex = people.length - 1;
    //if index becomes index set the index to the last index
    if (index < 0) {
      setIndex(lastIndex);
    }
    //in index is bigger then the array, set the index to the starting
    if (index > lastIndex) {
      setIndex(0);
    }
    //dependency array makes useEffect renders every time there is a change in index or people
  }, [index, people]);

  //after every three seconds move the slide
  //
  useEffect(() => {
    //the value of slider should be cleaned so there is no bug
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    //clear interval clears the interval that was previously saved
    return () => clearInterval(slider);
    //dependency array makes useEffect renders every time there is a change in index
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {/* iterate trough the data data comes from data.js */}
        {/* detructoring the properties data come with data, using the index */}
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          //the class nextSlide is used on CSS on the slides allows the slide to move 100% of its own width to the right
          let position = 'nextSlide';
          //if the index matches the personIndex then the slide should be displayed
          if (personIndex === index) {
            position = 'activeSlide';
          }
          //if the personIndex is index -1 or the last one on the list, change the displayed on center displaying the last or the first item on the list
          // class lastSlide position the slide on CSS as the last, moving to the left
          //if it's time of the slides to be displayed
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              {/* with css there are a lot of name above each other */}
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        {/* when clicked decrease the value of index by 1 */}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        {/* when clicked increase the value of index by 1 */}
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
