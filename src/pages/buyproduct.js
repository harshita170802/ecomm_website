/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';

const BuyProduct = ({ products }) => {
  const router = useRouter();
  const [stripe, setStripe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeStripe = async () => {
      const stripePublicKey = 'pk_test_51Nhl13SFL8XbMgVaZuFHfPQwTC0AfE9XRViBvETns4NKHTEmHL0jr9Zg1xCmMNskzC5htzULUfrebHEt3pEyW7Nm00q9SvKUX';
      const stripeInstance = await loadStripe(stripePublicKey);
      setStripe(stripeInstance);
    };
    initializeStripe();
  }, []);

  const handleBuyClick = async () => {
    if (!stripe) {
      return;
    }

    setLoading(true);

    // Extract price from the query parameter
    const queryPrice = parseInt(router.query.price);

    // Create a payment intent on your backend using the extracted price
    const paymentIntentResponse = await fetch('/create-payment-intent', {
      method: 'POST',
      body: JSON.stringify({ price: queryPrice }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Rest of your code...
  };

  return (
    <div>
      <h1>Buy Product</h1>
      <p>Price: ${router.query.price}</p>
      <button onClick={handleBuyClick} disabled={!stripe || loading}>
        Buy Now
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default BuyProduct;




