export const reducer = (state, action) => {
  //if the dispatch function is the same as the action function.type
  //return the new state if it is correct
  if (action.type === 'ADD_ITEM') {
    //copies all the value from state right before the update it with the desired values
    //checking for the type and grab the payload
    const newPeople = [...state.people, action.payload];

    //if the intention is to change only one value, can't forget to pass all the old values
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'please enter value' };
  }
  //function responsible to close the modal
  //closes the modal
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  if (action.type === 'REMOVE_ITEM') {
    // removes the itens that dont pass the criteria, are different between person.id e action.payload
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  // reducer is a simple function that gets the state just before updated and the action
  //action is what is desired to do
  console.log(state, action);
  //throw error if there is no matching action type
  throw new Error('no matching action type ');

  //  return state;
};
