import React, { useState } from 'react';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Head from 'next/head';
import { toast } from 'react-hot-toast';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Message:', message);
    toast.success('Response is Sent!');
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Breadcrumb title={'Contact Us'} />
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Our Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
              </div>
              <button onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body bg-primary bg-opacity-10 rounded .bg-navbar-top-bg.bg-navbar-bg">
              <h4 className="card-title">Our Details</h4>
              <p className="card-text">
                Give us a call or drop by anytime, we endeavor to answer all enquiries within 24 hours on business days.
                We will be happy to answer your questions.
              </p>
              <br />
              <div className="mb-3">
                <div className="justify-content-between">
                  <h5 className="my-0">
                    <AiOutlineMail size={25} color={'black'} /> : xyz@gmail.com
                  </h5>
                  <br />
                  <h5 className="my-0">
                    <AiFillPhone size={25} /> : +91 8755423546
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
