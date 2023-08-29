import React from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import SideBar from './SideBar';
import Banner from '../Banner'
import Footer from './Footer'

export default function Layout({ children }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/'; 

  return (
    <>
      <Header />
      {isHomePage && (
        <div className="banner container-md mt-5">
          <Banner/>
        </div>
      )}
      <div className="container-md mt-4">
        <div className="row g-3">
          <div className="col-md-3 d-none d-md-block">
            <SideBar />
          </div>
          <div className="col-12 col-md-9">{children}</div>
        </div>
      </div>
      <br/>
      <Footer/>
    </>
  );
}


