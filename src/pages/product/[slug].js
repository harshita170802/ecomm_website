import Breadcrumb from '@/components/layout/Breadcrumb';
import { addToCart } from '@/utils/cartItems';
import Head from 'next/head'
import Image from 'next/image';
import React, { useState } from 'react'
import { BiRupee } from 'react-icons/bi';
import { toast } from 'react-hot-toast';


function SingleProduct ({product}) {
  const [quantity, setQuantity]= useState(1);
  return (
    <>
     <Head>
      <title>Product Name</title>
      </Head> 
      <main>
        <Breadcrumb title={'Product'}/>
      <div className='row '>
        <div className='col-lg-6'>
          <div className='p-2'>
          <Image src={product?.thumbnail} className='border' alt={product?.title} width={350} height={300}/>
          </div>   
        </div>

        <div className='col-lg-6'>
          <h2>{product?.title}</h2>
          <h4 className='card-title d-flex align-items-center'><BiRupee size={21}/>{product?.price}</h4>
          <h5 className='mt-2'>Description</h5>
          <p>{product?.description}</p>

          <div className='d-flex gap-3'>
          <b>Qty: </b>
          <div className="input-group input-group-sm w-25 border mb-3">
          <button className="input-group-text btn btn-sm btn-outline-dark" onClick={()=>setQuantity((quantity>1)?quantity-1:1)}>-</button>
          <input type="tel" value={quantity} className="form-control"/>
          <button className="input-group-text btn btn-sm btn-outline-dark" onClick={()=>setQuantity(quantity+1)}>+</button>
          </div>
          </div>

          <div className='d-flex gap-3 mt-4'>
            <button type='button' className='btn btn-sm btn-warning' onClick={(e)=>{addToCart(product,quantity),toast.success('Added to Cart!')}}>Add to Cart</button>
            <button type='button' className='btn btn-sm btn-success'>Buy Now</button>
          </div>

        </div>
      </div>
      </main>
    </>
  )
}

export default SingleProduct



export async function getServerSideProps(context) {
  const product_id=context.params.slug; 
  let product=[];
  try{
    const res = await fetch(`https://dummyjson.com/products/${product_id}`);
    const data = await res.json();
    product= data;
  }catch(error){
    console.error(error);
    return {notFound:true};
  }
  
  return { 
    props: { 
      product
    } 
  }
}