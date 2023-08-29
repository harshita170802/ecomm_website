/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Footer = () => {
  return (
    <div className="navbar-top-bg text-white ">
      <div className="container ">
        <br/>
        <div className="row ">

          <div className='col-sm-8 '>
            <h5 className="text-uppercase font-weight-bold text-warning">NextWebGuru</h5>
            <p>
            I'm excited to present my final project,<br/>
            which features robust user authentication through Firebase and offers seamless purchasing capabilities powered by Stripe payment integration.<br/>
           Please check out my website. <br/>
          I hope you enjoy exploring it!
            </p>
          </div>
          

                <div className='col-sm-2 '>
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                    <p>
                        <i class="fas fa-home mr-3"></i> Haldwani, Uttarakhand, India
                    </p>
                    <p>
                        <i class="fas fa-envelope mr-3"></i> harshitamehra1723@gmail.com
                    </p>
                    <p>
                        <i class="fas fa-phone mr-3"></i> +91 6636636534
                    </p>
                </div>
            

      

        </div>
        <hr className="mb-4" />
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 col-lg-8">
            <p>
              Copyright 2023 All rights reserved by:{' '}
              <a href="#" className="text-decoration-none">
                <strong className="text-warning">The Providers</strong>
              </a>
            </p>
          </div>
          
          </div>
        </div>
      </div>
  
  );
};

export default Footer;

