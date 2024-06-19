import React, {useState} from 'react'
import './sideMenu.css'
import navListData from '../data/navListData';
import NavListItem from './NavListItem';

function SideMenu({ active }) {
    const [navData, setNavData] = useState(navListData)
  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
        <a href="#" className='logo'>
            <i className="bi bi-dpad"></i>
            <span className='brand'>gameShop</span>
        </a>
        <ul className="nav">
            {navData.map(item => ( 
              <NavListItem key={item._id} item={item}/>
            ))}
            
          
        </ul>
    </div>
  );
}

export default SideMenu