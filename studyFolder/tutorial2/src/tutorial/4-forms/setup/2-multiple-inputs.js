import React, { useState } from 'react';
// JS to get the value from input
// const input = document.getElementById('myText');
// const inputValue = input.value

// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  //instead of referencing each property, name, email and age, just refer the object person
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);

  //event parameter allows access to the object
  //handleChange allows input to be changed, for that person must be changed
  const handleChange = (e) => {
    // get the name attribute of the target from the html input
    const name = e.target.name;
    // get the value of the target
    const value = e.target.value;

    //when the name and the value is known dynamic object properties can be used
    //must copy the old values from the object person
    //when updating one, won't delete the others
    //update the property with  value

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if all three of them are more then an empty string, update
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      //adds the newPerson inside person
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', age: '' });
    }
  };

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          {/* calls handle submit on the button */}
          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      <article>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
