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

//routes
app.use('/', require('./routes/authRoutes'))
app.use('/payments', serverRoutes); // Use server.js for Stripe payments

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));