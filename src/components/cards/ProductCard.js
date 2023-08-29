import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {AiFillStar} from 'react-icons/ai'
import { BiCartAdd, BiRupee } from 'react-icons/bi'
import { addToCart, getCartItems,addToBuyCart } from '@/utils/cartItems'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
<<<<<<< HEAD
import { useCart } from '@/store/CartContext'

function ProductCard({product}) {
  console.log(getCartItems());
  const router = useRouter(); 
  const { addToBuyCart, isInCart, itemQuantity } = useCart();

  const handleBuyClick = () => {
 
        if (!isInCart(product.id)) {
          addToBuyCart(product, 1); 
        } else {
          const quantityInCart = itemQuantity(product.id);
          addToBuyCart(product, quantityInCart + 1); 
        }
=======

function ProductCard({product}) {
  console.log(getCartItems());

  const router = useRouter(); // Initialize router


  const handleBuyClick = () => {
    console.log('Buy button clicked');
    addToBuyCart(product, 1);
    toast.success('Added in Cart!');
    // Navigate to the BuyProductFile route with the product price as a query parameter
>>>>>>> e18e4f7b47feb6afb12491802fb2f29cdee99fe0
    router.push({
      pathname: '/buyproduct',

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
        <h6 className='card-title d-flex p-2 mb-1 bg-light text-dark align-items-center border border-light rounded-pill'>
        <AiFillStar size={21} color={'yellow'}/> {product?.rating}       
        </h6>
    </div>
    <button className='btn btn-warning btn-sm mx-2' onClick={(e)=>{addToCart(product,1),toast.success('Added in Cart!')}}><BiCartAdd size={22}/></button>
    <button className='btn btn-success btn-sm 'onClick={handleBuyClick} >BUY</button>
  </div>
</div>
  )
}

export default ProductCard

