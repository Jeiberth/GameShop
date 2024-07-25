import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Developers() {
    const [games, setGames] = useState([]);
  
    useEffect(() => {
      axios.get(`/developers`)
        .then(response => {
          setGames(response.data)
          const jsonResponse = new Blob([JSON.stringify(response.data, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(jsonResponse);
          window.location.href = url;
        })
        .catch(error => console.error('Error fetching games by developers:', error));
    }, []);
  
    return null;
}

export default Developers;
