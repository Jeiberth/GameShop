import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../App';
import './main.css';
import Header from './Header';
import SideMenu from '../components/SideMenu';
import Home from './Home';
import Categories from './Categories';
import MyLibrary from './MyLibrary';
import Bag from './Bag';

function Main() {
  const { library, bag } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const sections = [
    {
      name: 'home',
      ref: homeRef,
      active: true,
    },
    {
      name: 'categories',
      ref: categoriesRef,
      active: false,
    },
    {
      name: 'library',
      ref: libraryRef,
      active: false,
    },
    {
      name: 'bag',
      ref: bagRef,
      active: false,
    },
  ];

  const handleToggleActive = () => {
    setActive(!active);
  };

  const handleSectionActive = target => {
    sections.map(section => {
      section.ref.current.classList.remove('active');
      if (section.ref.current.id === target) {
        section.ref.current.classList.add('active');
      }
      return section;
    });
  };

  const fetchData = () => {
    fetch('https://api.rawg.io/api/games?key=a9b7e19e293d43d29410cd08c99fd2ef')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then(data => {
        // Process the retrieved data (e.g., set it in your state)
        console.log('Fetched data:', data.results);
        // Assuming you have a 'setGames' function to update your state
        setGames(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? 'active' : undefined}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="contain-fluid">
          {games && games.length > 0 && (
            <Home games={games} reference={homeRef} />
          )}
          {games && games.length > 0 && (
            <Categories games={games} reference={categoriesRef} />
          )}
          {games && games.length > 0 && (
            <MyLibrary games={library} reference={libraryRef} />
          )}
          {games && games.length > 0 && <Bag games={bag} reference={bagRef} />}
        </div>
      </div>
    </main>
  );
}

export default Main;
