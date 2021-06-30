import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      //if isSidebarOpen is true display slide bar by adding the CSS Property show
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <div className='sidebar'>
        {/* when button is clicked close the sidebar */}
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>

        {/* there is a iteration inside another, because in data there is an object inside another */}
        {sublinks.map((item, index) => {
          const { links, page } = item;
          return (
            <article key={index}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {links.map((link, index) => {
                  const { url, icon, label } = link;
                  return (
                    <a key={index} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
