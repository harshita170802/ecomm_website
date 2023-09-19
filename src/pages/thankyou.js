import React from 'react'
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Head from 'next/head';

export default function ThankYou(){
    const router=useRouter();
    console.log('router',router.query)
    return(
        <>
        <Head>
        <title>Thank You</title>
      </Head>
      <Breadcrumb title={'Thank You'} />
      <h1>Thanks for your order!</h1>
      <p>
      We appreciate your business!
      If you have any questions, please email
      <a href="mailto:orders@example.com">orders@example.com</a>.
      </p>
      </>
    )
}