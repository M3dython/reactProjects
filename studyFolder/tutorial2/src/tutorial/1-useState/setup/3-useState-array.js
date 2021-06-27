import React from 'react';
//imports the array data
import { data } from '../../../data';

const UseStateArray = () => {
  // with React.useState there is no need to import {useState}
  //useState() returns an array, and in this case receives data from data
  //setPeople is the function that controls the parameter people
  const [people, setPeople] = React.useState(data);

  //only runs when the button is clicked
  const removeItem = (id) => {
    //using filters to remove every item that matches the id passed as parameter
    //item with id passed from the different ids as the one passed as parameter are true and will be filtered

    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople); this is an ok use, but it is also ok to keep track of the most updated value, in some cases it is necessary

    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      //set function should always return something
      return newPeople;
    });
  };
  return (
    <>
      {people.map((person) => {
        //deconstructs the object person into id and name
        const { id, name } = person;
        return (
          //using the map method there should be an id for each item of the array
          <div key={id} className='item'>
            <h4>{name}</h4>
            {/* shouldn't use onClick={removeItem(id)} */}
            {/* without ()=> function() the function runs at the begining of the rendering not when the button is clicked */}
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* inside onClick={setPeople[]} won't work, there should be a function calling setPeople, so it only clear one */}
      {/* with setPeople([]) the newvalue of people is an empty array */}

      <button className='btn' onClick={() => setPeople([])}>
        Clear Itens
      </button>
    </>
  );
};

export default UseStateArray;
