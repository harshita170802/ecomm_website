/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Breadcrumb from '@/components/layout/Breadcrumb';
import Head from 'next/head';
import Image from 'next/image';
import aboutus from '../../public/images/aboutus.jpg'

function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Breadcrumb title={'About Us'} />

      <div className=" d-flex">
        <div >
          <h2>Welcome to our website</h2>
          <p>
          Hello, I'm Harshita Mehra. 
          I'm excited to present my final project, which features robust user authentication through Firebase and offers seamless purchasing capabilities powered by Stripe payment integration. 
          Please check out my website by clicking the button below. 
          I hope you enjoy exploring it!
          </p>
          <button className="btn btn-primary ">Website Link</button>
        </div>
        <div className="rounded">
          <Image className='rounded-circle'src={aboutus} alt="image" width={300} height={300}/>
        </div>
      </div>

    </>
  )
}

export default AboutUs
