import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Genre() {
  const { genre } = useParams();
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(`/games/genre/${genre}`)
      .then(response => {
        setGames(response.data)
        const jsonResponse = new Blob([JSON.stringify(response.data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(jsonResponse);
        window.location.href = url;
      })
      .catch(error => console.error('Error fetching games by genre:', error));
  }, [genre]);

  return null;
}

export default Genre;
