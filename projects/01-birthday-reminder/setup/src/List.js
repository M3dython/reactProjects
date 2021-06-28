//List component receives the prop people, an array of objects
import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        //deconstruct the array people and display each item person
        const { id, name, age, image } = person;

        return (
          // when using map, there must be an attribute key for each item
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
