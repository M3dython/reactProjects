import React, { useState, useReducer } from 'react';
import Modal from './Modal';
//import the data to be displayed
import { data } from '../../../data';
// since reduces will have a lot of functionality it will be in a different file

// import the reducer
import { reducer } from './reducer';

// reducer function
//userReducer is used with a more complicated setup giving more structure to state
//increments steps to add into state
//userReducer is similar to redux
//index.js in any folder will be the main entry, so it cant import only the folder

// reducer is a simple function that gets the state just before updated and the action
//action is what is desired to do
//reducer always should return some kind of state without returning state the functionalities wont work

//state to be passed in the useReducer with multiple properties
//only updates once when called dispatch

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello World',
};

const Index = () => {
  const [name, setName] = useState('');
  // //set data into the array using useState
  // const [people, setPeople] = useState(data);
  // //by default the modal will be hidden with false
  // const [showModal, setShowModal] = useState(false);

  //common practice with useReducer is to call it state and dispatch
  //the reducer function is passed first
  //each time that the whole state must be changed always must use dispatch going trough reducer
  //reducer function takes the old state and take action and spits back the new state
  //the second parameter is the initial state
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // add the item to the people when submitted the form
    //if the name is there showModal and add the item to the list people
    if (name) {
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      //after saving the name clears the name
      // setName('');

      //call the function dispatch that should always have the property with the name of type equals to something
      //common practice is to use value in uppercase and underscore
      //to pass the data, adds more properties inside the object
      //payload is a common name to the passed object
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      //clean the values after it is set
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
      //display the modal with true
      // setShowModal(true);
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {/* {showModal && <Modal />} */}
      {/* responsible to show the modal  
      the property modalContent is coming from the stateValue
      sets the parameter of the component Modal to be modalContent
      reducer will return state*/}
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          {/* the value of the input will be used to set name */}
          <input
            type='text'
            value={name}
            // set on change the value of name to the inside of the input
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {/* displays the list  */}
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            {/* payload says specific which item should be removed */}
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
