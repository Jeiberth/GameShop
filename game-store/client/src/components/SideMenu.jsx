import React, { useState } from 'react';
import './sideMenu.css';
import navListData from '../data/navListData';
import NavListItem from './NavListItem';

function SideMenu({ active, sectionActive }) {
  const [navData, setNavData] = useState(navListData);

  const handleNavOnClick = (id, target) => {
    const newNavData = navData.map(nav => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    sectionActive(target);
    setNavData(newNavData);
  };

  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
      <a href="/" className="logo">
        <i className="bi bi-dpad"></i>
        <span className="brand">gameShop</span>
      </a>
      <ul className="nav">
        {navData.map(item => (
          <NavListItem
            key={item._id}
            item={item}
            navOnClick={handleNavOnClick}
          />
        ))}
      </ul>

      
    </div>
  );
}

export default SideMenu;
