import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Name() {
    const { name } = useParams();
    const [games, setGames] = useState([]);
  
    useEffect(() => {
      axios.get(`/games/name/${name}`)
        .then(response => {
          setGames(response.data)
          const jsonResponse = new Blob([JSON.stringify(response.data, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(jsonResponse);
          window.location.href = url;
        })
        .catch(error => console.error('Error fetching games by name:', error));
    }, [name]);
  
    return null;
  
}

export default Name;
