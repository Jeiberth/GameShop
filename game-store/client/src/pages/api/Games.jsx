import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('/games')
      .then(response => {
        setGames(response.data);
        // Return JSON response
        const jsonResponse = new Blob([JSON.stringify(response.data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(jsonResponse);
        window.location.href = url;
      })
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  return null; // No need to render anything
}

export default Games;
