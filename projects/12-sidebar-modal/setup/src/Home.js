import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';

const Home = () => {
  // grabs the value passed
  // const data = useContext(AppContext);
  // const data = useGlobalContext();
  // gets the functions from the context
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      {/* on click set the modal to true*/}
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      {/* on click set the modal to true */}
      <button className='btn' onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
