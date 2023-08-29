import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useCart } from '../store/CartContext';
<<<<<<< HEAD
import Breadcrumb from '@/components/layout/Breadcrumb'
import Head from 'next/head'
import Image from 'next/image';
import { BiRupee } from 'react-icons/bi'
=======

>>>>>>> e18e4f7b47feb6afb12491802fb2f29cdee99fe0
const stripePromise = loadStripe(
  'pk_test_51Nhl13SFL8XbMgVaZuFHfPQwTC0AfE9XRViBvETns4NKHTEmHL0jr9Zg1xCmMNskzC5htzULUfrebHEt3pEyW7Nm00q9SvKUXL'
);

function Buyproduct() {
  const { cart } = useCart();
<<<<<<< HEAD
  const items = cart?.map((item) => ({
=======
  const items = cart.map((item) => ({
>>>>>>> e18e4f7b47feb6afb12491802fb2f29cdee99fe0
    name: item.title,
    price: item.price,
    id: item.id,
    category: item.category,
    image: item.thumbnail,
  }));
<<<<<<< HEAD
 console.log(items)
=======

>>>>>>> e18e4f7b47feb6afb12491802fb2f29cdee99fe0
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    
    const checkoutSession = await axios.post('/api/create-checkout-session', {

      items: items,
      
    });
    console.log(items)
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,

<<<<<<< HEAD
    });
    console.log(sessionId)
=======
>>>>>>> e18e4f7b47feb6afb12491802fb2f29cdee99fe0
    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <>
    <Head>
        <title>
            Checkout
        </title>
    </Head> 
    <Breadcrumb title={'Buy Product '}/>
      <br />
      
      <div className='card mb-3 d-flex' style={{ width: '45rem' }}>
  {items?.map((item) => (
    <div key={item?.id} className='card-body d-flex gap-4 border-top py-3'>
      <h4>Product {item?.id} :</h4>
      <Image
        src={item?.image} 
        alt={item?.name}  
        width={100}
        height={100}   
        className='rounded-circle mr-4'
      />
      <div>
        <h3 className='mb-1'>{item?.name}</h3>
        <p className='mb-0 d-flex align-items-center'><BiRupee size={21} />{item?.price}</p>
      </div>
    </div>
  ))}
</div>
     <br/>
     <p className='text-color-red fst-italic'>
       *** Note : For payment use card number- 4242 4242 4242 4242, cvv and doe could be whatever ***
      </p>
      <br />
      <button onClick={createCheckoutSession} className='btn btn-danger'>
        Proceed to Buy Product
        <span className='bg' />
      </button>
      <br/>
    

    </>
  );
}

export default Buyproduct;
<<<<<<< HEAD
=======

>>>>>>> e18e4f7b47feb6afb12491802fb2f29cdee99fe0
