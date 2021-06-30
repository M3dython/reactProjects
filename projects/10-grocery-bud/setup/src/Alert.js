import React, { useEffect } from 'react';

//grabbing the alerts from state value
//grabbing the function showAlert
const Alert = ({ type, msg, removeAlert, list }) => {
  // makes it every time the component renders
  useEffect(() => {
    let timeout = setTimeout(() => {
      // removeAlert by default removes the alert
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
    //dependency array is set to {list} so it runs every time there is some update to the list
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
