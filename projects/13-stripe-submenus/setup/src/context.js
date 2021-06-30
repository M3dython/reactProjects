import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  // universal state values the makes visible the navbar and sidebar

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  // location to display the submenu
  const [location, setLocation] = useState({});
  //set the page to be displayed
  const [page, setPage] = useState({ page: '', links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    // get me the page that matches the coordinates
    //if the link page is equal to the text, if the text that comes from the button matches the page
    const page = sublinks.find((link) => link.page === text);
    // set the page to the page of the text
    setPage(page);
    // openSubmenu is looking for the text and coordinates to position the submenu
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  //pass the state as props to tall the other components

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//set a custom hook to expor the function elsewhere
export const useGlobalContext = () => {
  return useContext(AppContext);
};
