import Banner from '@/components/Banner'
import ProductCard from '@/components/cards/ProductCard'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Head from 'next/head'

//
export default function Home({products  }) {
  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Banner/>
       <div className='my-2 bg-light'>
        <h4 className='text-center p-2 text-uppercase'>Products</h4>
       </div>
      
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
      
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  let products=[];
  try{
    const res = await fetch(`https://dummyjson.com/products`);
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
