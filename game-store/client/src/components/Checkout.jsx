

//v.2
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51PVUrwP15xt7Xmf3v6K7Z2NKIET2fE0t3EXPoHImNhoVqI7RGMGW9U3BtajNr8tCrQLxBP29frmR2torKKUkbWYP003FyzLQuK');

const Checkout = ({ items }) => {
const handleCheckout = async () => {
    console.log('pk_test_51PVUrwP15xt7Xmf3v6K7Z2NKIET2fE0t3EXPoHImNhoVqI7RGMGW9U3BtajNr8tCrQLxBP29frmR2torKKUkbWYP003FyzLQuK');

    const stripe = await stripePromise;

    try {
    const response = await axios.post('https://x0m7yww1bl.execute-api.us-east-2.amazonaws.com/payments/create-checkout-session', { items }, {
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
