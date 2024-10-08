const express = require('express');
const Stripe = require('stripe');
const cors = require('cors'); //handling Cross-Origin Resource Sharing.
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL if another than localhost
  credentials: true,
}));

app.use(express.json());
app.options('*', cors()); // Handle preflight requests

app.post('/create-checkout-session', async (req, res) => { //create a Stripe checkout session.
  const { items } = req.body;

  const line_items = items.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/success', //add this to .env 
      cancel_url: 'http://localhost:3000/cancel', //add this to .env 
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;

