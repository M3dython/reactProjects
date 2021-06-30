import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  //receives states from context
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  //refs container
  const container = useRef(null);
  //every time location changes set the useEffect
  //set state with the amount of columns accordingly to the size of links, by default being 2
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    //gets the node
    const submenu = container.current;
    // saves the value of center and bottom that comes from location
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length > 3) {
      setColumns('col-4');
    }

    //dependency array is location
  }, [location, links]);

  return (
    // displays submenu only when the button in navbar is hovered
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page} </h4>
      {/* once the data  */}
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
