import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import ChackoutForm from '../../../../component/ChackoutForm/ChackoutForm';

const  stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)
const Payment = () => {
    return (
        <div>
            <div>

            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <ChackoutForm></ChackoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;