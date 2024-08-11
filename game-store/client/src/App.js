
// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Register from './pages/Register'; 
import Login from './pages/Login';
import Success from './pages/Success'; // Import Success page
import Cancel from './pages/Cancel'; // Import Cancel page
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Games from './pages/api/Games';
import Name from './pages/api/name.jsx';
import Genre from './pages/api/Genre';
import Rating from './pages/api/Rating';
import Developers from './pages/api/Developers';
axios.defaults.baseURL = 'https://x0m7yww1bl.execute-api.us-east-2.amazonaws.com/'
axios.defaults.withCredentials = true;

export const AppContext = React.createContext();

function App() {
  const [library, setLibrary] = useState([]);
  const [bag, setBag] = useState([]);



  return (
    <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} /> {/* Add Success route */}
        <Route path="/cancel" element={<Cancel />} /> {/* Add Cancel route */}
        <Route path="/games" element={<Games />} />
        <Route path="/games/name/:name" element={<Name />} />
        <Route path="/games/genre/:genre" element={<Genre />} />
        <Route path="/games/rating/:rating" element={<Rating />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
