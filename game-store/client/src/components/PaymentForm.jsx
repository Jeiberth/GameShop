import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = ({ amount }) => {
const stripe = useStripe();
const elements = useElements();
const [success, setSuccess] = useState(false);

const handlePayment = async () => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: 'card',
    card: elements.getElement(CardElement),
    });

    if (!error) {
    try {
        const { id } = paymentMethod;
        const response = await axios.post('http://localhost:8000/payments/create-payment-intent', {
          amount: amount * 100, // amount in cents
        });

        if (response.data.clientSecret) {
        const confirmPayment = await stripe.confirmCardPayment(response.data.clientSecret, {
            payment_method: id,
        });

        if (confirmPayment.paymentIntent.status === 'succeeded') {
            setSuccess(true);
        }
        }
    } catch (error) {
        console.error('Error:', error);
    }
    } else {
    console.error('Error:', error.message);
    }
};

return (
    <div>
    <fieldset>
        <div>
        <CardElement />
        </div>
    </fieldset>
    <button onClick={handlePayment} disabled={!stripe}>
        Pay ${amount}
    </button>
    {success && <div>Payment successful!</div>}
    </div>
);
};

export default PaymentForm;