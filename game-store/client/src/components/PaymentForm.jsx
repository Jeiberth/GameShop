import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios'; //axios is imported to handle HTTP request 2 the backend
//component handle entire payment flow

const PaymentForm = ({ amount }) => {
const stripe = useStripe();  //access Stripe's functionality
const elements = useElements();  //access Stripe's functionality
const [success, setSuccess] = useState(false);

const handlePayment = async () => { //function trigger when user clicks the Pay buttin 
    const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: 'card',
    card: elements.getElement(CardElement),
    });

    if (!error) {
    try {
        const { id } = paymentMethod; // make POST request to backend endpoint 
        const response = await axios.post('http://localhost:8000/payments/create-payment-intent', {
          amount: amount * 100, // amount in cents
        });

        if (response.data.clientSecret) { //confirms payment 
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