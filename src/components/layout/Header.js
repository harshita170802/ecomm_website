import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState, useContext } from 'react'
import {BsCart4} from 'react-icons/bs'
import { getCartItems } from '@/utils/cartItems';
import { useSelector } from 'react-redux'; 
import { Context } from "../../context/authContext";
import { useSnackbar } from "notistack";


export default function Header() {
  const [cart,setCart]=useState(10);
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  const { enqueueSnackbar } = useSnackbar();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    enqueueSnackbar("Successfully logged out", {
      variant: "success",
      autoHideDuration: 1700,
    });
  };


  useEffect(()=>{
    setInterval(()=>{
      const cartItems=getCartItems();
      setCart(cartItems.length)
    },1000)
  },[])

  return (
    <>
    <nav className="navbar navbar-top-bg text-white d-none d-md-block">
    <div className="container-md">
    <i className='nav-item navbar-nav'>Get Up to 70% Discount Everyday</i>
    <div className='d-flex p-0'>
  {user !== null ? (
    <>
      <Link href="/profile" legacyBehavior>
        <a className="btn btn-light me-2">Profile</a>
      </Link>
      <a
        href="#"
        className="btn btn-light"
        onClick={logoutHandler}
      >
        Logout
      </a>
    </>
  ) : (
    <>
      <Link href="/login" legacyBehavior>
        <a className="btn btn-light me-2">Login</a>
      </Link>
      <Link href="/register" legacyBehavior>
        <a className="btn btn-light">Register</a>
      </Link>
    </>
  )}
</div>

    </div>
    </nav>

      {/**Second Navbar */}

    <nav className="navbar navbar-bg text-white">
    <div className="container-md">
    <Link href='/'className='navbar-brand'>
      <Image src='/images/logo.png' width={200} height={50} alt="company-logo"/>
    </Link>
    <Link href='/cart' className='nav-item nav-link d-flex gap-1 align-items-center text-white'>
      <span className='p-1 rounded-circle bg-primary'>
       <BsCart4 size={21} className='pb-1'/>
      </span>
      {cart} items
    </Link> 
    </div>
    </nav>

  <nav className="navbar navbar-expand-lg shadow-sm mb-2 rounded container px-2">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" href="/">Home</Link>
      <Link className="nav-item nav-link" href="/aboutus">About Us</Link>
      <Link className="nav-item nav-link" href="/contactus">Contact Us</Link>

    </div>
  </div>
  </nav>
    </>
  )
}


