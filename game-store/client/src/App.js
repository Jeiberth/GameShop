// // import Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Bootstrap Icons
// import 'bootstrap-icons/font/bootstrap-icons.css';

// import React, { useState } from 'react';
// import './App.css';
// import Main from './pages/Main';
// // import { Routes, Route } from 'react-router-dom';

// export const AppContext = React.createContext();

// function App() {
//   const [library, setLibrary] = useState([]);
//   const [bag, setBag] = useState([]);
//   return (
//     <>
//       <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
//         <Main />
//       </AppContext.Provider>
//     </>
//   );
// }

// export default App;

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Register from './pages/Register'; 
import Login from './pages/Login';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true;

export const AppContext = React.createContext();

function App() {
  const [library, setLibrary] = useState([]);
  const [bag, setBag] = useState([]);

  return (
    <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
