import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { BiCartAdd, BiRupee } from 'react-icons/bi'
import { addToCart, getCartItems } from '@/utils/cartItems'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
function ProductCard({product}) {
  console.log(getCartItems());
  const router = useRouter(); // Initialize router

  const handleBuyClick = () => {
    addToCart(product, 1);
    toast.success('Added in Cart!');

    // Navigate to the BuyProductFile route with the product price as a query parameter
    router.push({
      pathname: '/buyproduct',
      query: { price: product.price },
    });
  };
  return (
    <div className = 'card' >
        <Link href={`/product/${product?.id}`}>
        <div className='object-fit-cover'>
            <Image src={product?.thumbnail} width={200} height={200} className="card-img-top" alt={product?.title}/>
        </div>
        </Link>
    
    <div className="card-body">
        <Link href={`/product/${product?.id}`} className='text-decoration-none'>
        <h5 className="card-title">{product?.title}</h5>
        </Link>
    <div className='d-flex justify-content-between align-items-center'>
        <h6 className='card-title d-flex align-items-center'>
            <BiRupee size={21}/>
            {product?.price}
        </h6>
        <div className='d-flex'>
            <button className='btn btn-warning btn-sm mx-2' onClick={(e)=>{addToCart(product,1),toast.success('Added in Cart!')}}><BiCartAdd size={22}/></button>
            <button className='btn btn-success btn-sm 'onClick={handleBuyClick} >BUY</button>
        </div>
    </div>
    
  </div>
</div>
  )
}

export default ProductCard
