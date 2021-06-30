import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
  };
  //looks for the reducer function  and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  //to remove all items from the cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  //remove a specific item from the cart
  const remove = (id) => {
    //pass the id trough payload
    dispatch({ type: 'REMOVE', payload: id });
  };

  //increase the number of items in the cart
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  //decrease the number of items in the cart
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };
  // fetch the data from an API to be displayed
  // must be an async function because it fetch a promise
  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    // whatever comes from the API is passed as a payload into the reducer
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  };
  //increase and decrease as one function only
  const toggleAmount = (id, type) => {
    // payload passed is an object with id and type
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // every time the value in state car changes, call useEffect
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        //spread the state value inside value coming from initialState
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
