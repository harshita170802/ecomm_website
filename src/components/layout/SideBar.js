import React from 'react'
import Link from 'next/link'
import {MdCategory} from 'react-icons/md'
import { BsDash } from 'react-icons/bs'
import { useState, useEffect } from 'react'


export default function SideBar() {
  const [data, setData] = useState(null);
   const categories =[1,2,3,4,5,6,7];
  
   useEffect(()=> {
    const getData= async()=>{
      const response = await fetch('https://dummyjson.com/products/categories');
      const result = await response.json();
      setData(result);
    }
    getData();
  }, []);
  
   return (
    <div className='w-100'>
      <ul className='list-group'>
        <li className='list-group-item d-flex align-items-center navbar-top-bg'>
            <h5 className='text-white mt-2 text-uppercase'>
                <MdCategory/> Categories
            </h5>
        </li>
        {
          data?.map((category,i)=>{
            return(
            <Link key={i} href={`/category/${category}`} className='text-decoration-none'>
            <li className='list-group-item list-group-item-action d-flex align-items-center text-capitalize'>
            <BsDash size={24} className='m-2'/>
            {category}
            </li>
            </Link>
            )
          })
        }
        

      </ul>
    </div>
  )
}