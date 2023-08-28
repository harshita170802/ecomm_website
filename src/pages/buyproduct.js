import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useCart } from '../store/CartContext';

const stripePromise = loadStripe(
  'pk_test_51Nhl13SFL8XbMgVaZuFHfPQwTC0AfE9XRViBvETns4NKHTEmHL0jr9Zg1xCmMNskzC5htzULUfrebHEt3pEyW7Nm00q9SvKUXL'
);

function Buyproduct() {
  const { cart } = useCart();
  const items = cart.map((item) => ({
    name: item.title,
    price: item.price,
    id: item.id,
    category: item.category,
    image: item.image,
  }));

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
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

export default Buyproduct;

