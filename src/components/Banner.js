import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src="/images/slider3.jpg" className="d-block w-100" width={500} height={410}  alt="slide_img_1"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Welcome to Our Ecommerce Store</h5>
        <p>Explore our wide range of cutting-edge electronics, from smartphones and laptops to smart home devices and accessories. Elevate your tech game with top-notch gadgets and stay connected with the latest innovations.</p>
      </div>
    </div>
    <div className="carousel-item">
      <Image src="/images/slider2.jpg" className="d-block w-100" width={500} height={410} alt="slide_img_2"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Elevate Your Tech Style with Accessories</h5>
        <p>Complete your tech ensemble with our stylish and functional accessories. From sleek phone cases to ergonomic laptop stands, our collection is designed to complement your devices and enhance your overall tech lifestyle.</p>
      </div>
    </div>
    <div className="carousel-item">
      <Image src="/images/slider1.jpg" className="d-block w-100" width={500} height={410}  alt="slide_img_3"/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Stay Ahead with the Latest Gadgets</h5>
      <p>Explore our collection of cutting-edge technology gadgets that will redefine your digital experience. From smart wearables to immersive gaming gear, we have the tools to keep you connected, entertained, and empowered.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Banner
