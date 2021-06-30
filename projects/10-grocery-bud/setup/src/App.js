import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  //get the items from local storage to display
  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    //if the list exists
    if (list) {
      //it is saved with a key set as list
      return JSON.parse(localStorage.getItem('list'));
    } else {
      return [];
    }
  };

  //name to be added
  const [name, setName] = useState('');
  //list of items saved of local storage, set to the list
  const [list, setList] = useState(getLocalStorage());
  // flag used when itens are being edited
  const [isEditing, setIsEditing] = useState(false);
  //used to manipulated the edited item
  const [editID, setEditID] = useState(null);
  // set the alert with different texts and properties
  //the type danger or success will make it display in the correct way
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  // after submit the do
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
    //if name is falsy, an empty input
    if (!name) {
      //display alert
      //set the alert to be displayed
      // setAlert({ show: true, msg: 'please enter value', type: 'danger' });
      showAlert(true, 'danger', 'please enter value');
    }
    //check if there is something in value and it is editing, so there is no edit with an empty value
    else if (name && isEditing) {
      //deal with edit
      // the the list to a new value,if the item id matches the editIt
      setList(
        list.map((item) => {
          if (item.id === editID) {
            //id will be the same but the input will be edited into the item
            return { ...item, title: name };
          }
          return item;
        })
      );
      //empty the input
      setName('');
      //reset the id to null
      setEditID(null);
      //finishes the edit routine
      setIsEditing(false);
      //show the alert after edit was successful
      showAlert(true, 'success', 'value changed');
    } else {
      //show alert
      showAlert(true, 'success', 'item added do the list');
      // create a new item with unique ids, and a property title that will contains the value of the input, captured by the value name
      const newItem = { id: new Date().getTime().toString(), title: name };
      //get the previous values of the list and add a newItem with the input,
      setList([...list, newItem]);
      //empty the array after saving the content
      setName('');
    }
  };

  // function to show alert with the passed values
  //looking for the show parameter, by default it will be false, type and msg will be empty
  const showAlert = (show = false, type = '', msg = '') => {
    // setAlert({show:show, type:type, msg:msg}) is the same as setAlert({show, type,msg})
    setAlert({ show, type, msg });
  };

  //clear all the items, sending an alert an setting the state list to an empty array
  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  //removes an item from the list, using it's id
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    // if the list id matches to the id passed to remove item don't return it trough the filter
    setList(list.filter((item) => item.id !== id));
  };

  //edit the item desired trough its id
  const editItem = (id) => {
    //if the item id matches, return  the item to be edited
    const specificItem = list.find((item) => item.id === id);
    //set the button to edit
    setIsEditing(true);
    //sets the edit id to be edited
    setEditID(id);
    //passes to the item with the id found the input saved in title
    setName(specificItem.title);
  };

  // saves the content to localStorage
  // loads every time there is a change to the list
  useEffect(() => {
    //saves in local storage with the key of list
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {/* if the alert is true display the alert component, passes all the properties from state alert value*/}
        {/* removeAlert calls useEffect to set the time to remove the alert */}
        {/* passes list to work as dependency array every time useEffect has to be removed*/}
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            //onChange change the value to the value of the input
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {/* display edit if it is editing and submit to create a new item */}
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {/* only show the list if there are some items in the list */}
      {list.length > 0 && (
        <div className='grocery-container'>
          {/* passes to list the props items, with list object, the function removeItem, and the function editItem*/}
          <List items={list} removeItem={removeItem} editItem={editItem} />
          {/* wont be displayed if there is no item */}
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
