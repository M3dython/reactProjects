import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  //used to make the toggle nicely and dynamically work
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // every time the value to showLinks changes, run useRef
  //the height of the links will be used to adjusts the links container
  useEffect(() => {
    //with java script getBoundingClientRect() gets the height for links
    const linksHeight = linksRef.current.getBoundingClientRect();
    // when showLinks is true
    if (showLinks) {
      //set the property of te links container to the height of all the links
      linksContainerRef.current.style.height = `${linksHeight}px`;
      //.links-container should have height changed to auto !important, so when there is a windows resized the nav bar is fixed
    }
    //if showLinks is not true hides the nav
    else {
      linksContainerRef.current.style = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          {/* toggles the value of showLinks to make te nav visi ble */}
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {/* if showLinks is true display the nav, but without animation {showLinks && (<div></div>)}*/}
        {/* the heigh is not dynamic so it can break the display
         // className={`${showLinks ? 'links- container show-container ' : 'links-container' }`} */}

        {/* to use useRef the most be an enclosing div , there must be a parent to access the parents inside of it and get its height*/}
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {/* iterate trough links to get the data to be displayed dynamically, so it becomes reactive to the data */}
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {/* iterate trough social to get the data to be displayed dynamically, so it becomes reactive to the data */}
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
