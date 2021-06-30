// must important context
import React, { useState, useContext } from 'react';
import App from './App';

const AppContext = React.createContext();

//without the children there is error
const AppProvider = ({ children }) => {
  //passes the value property
  // for every component the value  is accessible

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSideBarOpen(true);
  };
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //pass as value the state values
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideBarOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook is created so it is easier to import all the context
export const useGlobalContext = () => {
  return useContext(AppContext);
};

//export the context to be used in other components
export { AppContext, AppProvider };
