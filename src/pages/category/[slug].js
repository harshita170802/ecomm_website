import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ProductCard from '@/components/cards/ProductCard';

function CategoryProducts({products}) {
    const router = useRouter();
    const categoryName=router?.query?.slug;

  return (
    <>
    <Head>
        <title>{categoryName}</title>
    </Head>
    <main className='mb-4 '>
        <Breadcrumb title={`${categoryName?.toUpperCase()}- Products`}/>
        <div className='row'>
        {
          products && products.map((item)=>{
            return(
              <div key={item.id} className='col-md-4'>
              <div className='mt-4'>
              <ProductCard product={item}/>
              </div>
               </div>
            )
          })
        }
       
        </div>
    </main>
    </>
  )
}

export default CategoryProducts

export async function getServerSideProps(context) {
  const category=context.params.slug; 
  let products=[];
  try{
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await res.json();
    products= data.products;
  }catch(error){
    console.error(error);
    return {notFound:true};
  }
  
  return { 
    props: { 
      products 
    } 
  }
}