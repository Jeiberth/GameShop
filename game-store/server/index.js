const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');
const serverRoutes = require('./server');
const app = express();


//Database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not connected', err))


//middleware
app.use(express.json())
//v.1.2 ( add below)
//app.use(cors());
//v.1.3
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







//routes
//app.use('/', require('./routes/authRoutes'));
//v.1.2
app.use('/auth', require('./routes/authRoutes')); // Changed to '/auth' for better structure
app.use('/payments', serverRoutes); // Use server.js for Stripe payments

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));