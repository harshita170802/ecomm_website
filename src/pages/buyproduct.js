import React, { useState,useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const stripePromise = loadStripe(
  'pk_test_51Nhl13SFL8XbMgVaZuFHfPQwTC0AfE9XRViBvETns4NKHTEmHL0jr9Zg1xCmMNskzC5htzULUfrebHEt3pEyW7Nm00q9SvKUXL'
);
// const stripePromise = loadStripe(process.env.stripe_public_key);
import { cart, CartState, useCart } from '../store/CartContext';


function Buyproduct() {
  useEffect(() => {
    // Client-side logic that uses the `price` query parameter
    const price = new URLSearchParams(window.location.search).get('price');
    // ... do something with the `price`
  }, []);

<<<<<<< HEAD
  const { getTotalItems, getTotalPrice, cart } = useCart();
  const items = cart.map((item) => ({
    name: item.title,
    price: item.price,
    id: item.id,
    category: item.category,
    image: item.image,
  }));
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    //backend:
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    // redirect to stripe checkout
    if (result.error) {
      alert(result.error.message);
    }
=======
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
>>>>>>> 62e76ebfdd53caff6b791096759efdfc337685ad
  };

  return (
    <>
      <br />
      <h1>Checkout Page</h1>
      <h1>
        For payment use card number- 4242 4242 4242 4242, cvv and doe could be
        whatever
      </h1>
      <br />
      <button onClick={createCheckoutSession} className='btn'>
        Proceed to Checkout
        <span className='bg' />
      </button>
    </>
  );
}

<<<<<<< HEAD
export default Buyproduct;
=======


>>>>>>> 62e76ebfdd53caff6b791096759efdfc337685ad
