// index.js
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const serverRoutes = require('./server');
const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log('Database not connected', err));

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true,
}));

// Manually add CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Routes
app.use('/auth', require('./routes/authRoutes')); // Changed to '/auth' for better structure
app.use('/payments', serverRoutes); // Use server.js for Stripe payments


const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

///////////////////////////////////////////////////////////////

let games = [];

const fetchData = () => {
  fetch('https://api.rawg.io/api/games?key=a9b7e19e293d43d29410cd08c99fd2ef')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response as JSON
    })
    .then(data => {
      // Process the retrieved data and filter the required fields
      games = data.results.map(game => ({
        name: game.name,
        genre: game.genres[0]?.name, // Use optional chaining to avoid errors if genres is empty
        rating: game.rating,
        price: game.metacritic,
        background_image: game.background_image
      }));    
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

fetchData(); // Call fetchData to populate the games array

app.get('/games', (req, res) => {
    res.json(games);
});

app.get('/games/name/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(name));
    res.json(filteredGames);
});
  
app.get('/games/genre/:genre', (req, res) => {
    const genre = req.params.genre.toLowerCase();
    const filteredGames = games.filter(game => game.genre?.toLowerCase() === genre);
    res.json(filteredGames);
});
  
app.get('/games/rating/:rating', (req, res) => {
    const rating = parseFloat(req.params.rating);
    const filteredGames = games.filter(game => game.rating >= rating);
    res.json(filteredGames);
});

// New routes for /name and /studies
app.get('/developers', (req, res) => {
  res.json({ Developers: ['David', 'Honsa', 'Jeiberth'] });
});


