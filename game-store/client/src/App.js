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
import Success from './pages/Success'; // Import Success page
import Cancel from './pages/Cancel'; // Import Cancel page
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
axios.defaults.baseURL = 'http://localhost:8000'
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
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
