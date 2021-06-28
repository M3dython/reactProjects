import React, { useState } from 'react';
import { data } from '../../../data';

//drilling is not oficial term but it is a side effect with multiple components and a big component tree passing some state from the top component to the bottom of the component, useContext fix that
//prop drilling allow to use props from parent component all the way trough the children
// more components
// fix - context api, redux (for more complex cases)

//each item of the list will have the option of removing itself from the list
const PropDrilling = () => {
  //basic state array
  const [people, setPeople] = useState(data);
  //removePerson should be passed all the way trough the components till SinglePerson
  const removePerson = (id) => {
    setPeople((people) => {
      // removes the person that doesn't have the same id
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>prop drilling</h3>
      {/* take prop a people, equal to people state value */}
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

// List component has to take removePerson to pass to SinglePerson
//destructuring people and removePerson
const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        // display single person and give it the key of id
        // receives props from state, adding all the props to singlePerson
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

//person is an object, single person targets the id and name
//there is no way to access removePerson if it is not passing trough List
//context API and redux helps with that
const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      {/* onClick removePerson using id */}
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
