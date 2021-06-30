import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import Submenu from './Submenu';

const Navbar = () => {
  // get the function that opens sidebar and open&close submenu
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    // e.target is used to see which link in navbar should be displaying its content
    const page = e.target.textContent;
    //getBoundingClientRect is a function in javascript that gives the exact position from the bottom, left and right
    const tempBtn = e.target.getBoundingClientRect();
    //gets the center position of the link in navbar
    const center = (tempBtn.left + tempBtn.right) / 2;
    // gets the bottom position of the link in navbar
    const bottom = tempBtn.bottom - 3;
    console.log('object');
    //passes the page to be displayed, and its position
    openSubmenu(page, { center, bottom });
  };

  //handle submenu when mouse is not over it, but not over navigation links
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          {/* on click toggles the side bar display trough context, trough css */}
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            {/* the value inside buttons, must match the text value of the object property inside data */}
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
