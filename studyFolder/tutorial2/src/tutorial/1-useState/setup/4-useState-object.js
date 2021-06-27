import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'random message',
  });
  const [names, setName] = useState('Euler');
  const [age, setAge] = useState(34);
  const [message, setMessage] = useState('Maroon message');

  const changeMessage = () => {
    //when setPerson('hello world'); it will wipe all the values because it is passing a string and in return it is expecting an object
    // setPerson({message:'hello world'}); will change only the message but will erase all the other properties of the object
    //a spread operator will first copy all the values and then change the desired ones
    // setPerson({...person, message: 'hello world' }); leave the values of the object that were not passed as parameters unchanged, changing only the desired message

    //without using an object, passing the items to an array it is easier to set
    //with objects and useState always preserve the unchanged values

    setPerson({ ...person, message: 'hello world' });
  };

  const changeMessageTwo = () => {
    //there is no rule to prevent to set as many state values as desired
    setName('New Name');
    setAge(24);
    setMessage('New Message');
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
      {/* receives the elements from an array */}
      <h3>{names}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessageTwo}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
