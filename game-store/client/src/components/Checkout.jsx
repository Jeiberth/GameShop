

//v.2
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Checkout = ({ items }) => {
const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
    const response = await axios.post('http://localhost:8000/payments/create-checkout-session', { items }, {
        headers: {
        'Content-Type': 'application/json',
        },
    });

    const { id } = response.data;

    const result = await stripe.redirectToCheckout({
        sessionId: id,
    });

    if (result.error) {
        console.error(result.error.message);
    }
    } catch (error) {
    console.error('Error creating checkout session', error);
    }
};

return (
    <button onClick={handleCheckout}>
    Check out
    </button>
);
};

export default Checkout;
