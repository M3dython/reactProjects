import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  //to access the values from the input set the state
  //using value and onChange event listener
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    // by default browser will submit the form and refresh the page

    e.preventDefault();
    //log the first name and email when submit is clicked
    console.log(firstName, email);
    //when submit the form add the new people to the array on state
    // only add item to the array if both values are true (not empty)
    if (firstName && email) {
      //create a new object
      // if the property value matches the variable that is assigned to one step can be skipped
      // const person = { firstName: firstName, email: email };
      //if the key matches the variable that holds the value

      //there is package that creates unique ids
      //with new date every time a person is created there is also a new id
      const person = { id: new Date().getTime().toString(), firstName, email };

      // adding the new person to the array
      setPeople((people) => {
        // return the already existing items to the array and the new object person
        return [...people, person];
        //after saved the itens as empty string
        setFirstName('');
        setEmail('');
      });
    } else console.log('empty values');
  };
  return (
    <>
      <article>
        {/* classes are added just for style, action will be implemented trough react */}
        {/* can work with submit on the form or submit on the button */}
        <form action='' className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            {/* using camel case in react */}
            <label htmlFor='firstName'>Name :</label>
            {/* the attribute value is passed to the state firstName */}
            {/* react complain if there is no onChange handler */}
            {/* the input will stay with the value of the state if there is no onChange */}
            {/* within the function inside onChange sets the value of the state with the value of the input */}
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              // must come with the arrow function, inline reference
              //access the event object and look for the event target value to set it inside the state
              //the state value will update with the input value trough the onChange handler trough the State function
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            {/* using camel case in react */}
            <label htmlFor='firstName'>Email :</label>
            {/* the attribute value is passed to the state firstName */}

            <input
              type='text'
              id='email'
              name='firstName'
              value={email}
              // must come with the arrow function, inline reference
              //access the event object and look for the event target value to set it inside the state
              //the state value will update with the input value trough the onChange handler trough the State function
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* can work with submit on the form or submit on the button */}
          {/* <button className='btn' type='submit'  onClick={handleSubmit}> */}
          <button className='btn' type='submit'>
            add person
          </button>
        </form>
        {/* display the people inside the array */}
        {
          //using index will be a problem when the itens are removed map((x,index)=>{})
          people.map((person) => {
            // deconstruct the array
            const { id, firstName, email } = person;
            return (
              <div className='item' key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            );
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
