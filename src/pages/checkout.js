import Breadcrumb from '@/components/layout/Breadcrumb'
import Head from 'next/head'
import React ,{ useState ,useEffect}from 'react'
import { BiRupee } from 'react-icons/bi'
import {useForm} from 'react-hook-form'
import { getCartItems } from '@/utils/cartItems'
import { useRouter } from 'next/router';
import Cookies from "js-cookie";

function Checkout() {
  const [cart,setCart]=useState(getCartItems());
  const [yourCart,setYourCart]=useState({});
  const [cartItems,setCartItems]=useState(0);
  const router = useRouter();
  const {register,handleSubmit,watch,formState:{errors}}=useForm();
  
  const checkoutHandler=(data)=>{
    console.log(data);
    router.push({
      pathname:'/thankyou',
      query:{
        cart:JSON.stringify(cart),
        yourCart:JSON.stringify(yourCart),
        shipping:JSON.stringify(data)
      }
    })
    Cookies.remove('yourCart');
    Cookies.remove('cartItems');
  }

  useEffect(()=>{
    const tempYourCart=Cookies.get('yourCart');
    if(!tempYourCart){
      router.push('/')
    }
   setYourCart(JSON.parse(Cookies.get('yourCart')))
   setCartItems(cart?.length)
  },[cart])

  return (
    <>
     <Head>
        <title>
            Checkout
        </title>
    </Head> 
    <Breadcrumb title={'Checkout'}/>
   
<form onSubmit={handleSubmit(checkoutHandler)} >
  <div className="row g-4">
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Your cart</span>
        <span className="badge badge-secondary rounded-pill">{cartItems}</span>
      </h4>
      
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between ">
          
            <div className="my-0">Subtotal (<BiRupee size={21}/>)</div>
            <strong >{yourCart?.subTotal?.toFixed(2)}</strong>
        </li>

        <li className="list-group-item d-flex justify-content-between ">
            <div className="my-0">GST 18% (<BiRupee size={21}/>)</div>
            <strong >{yourCart?.gstAmount?.toFixed(2)}</strong>
        
        </li>

        <li className="list-group-item d-flex justify-content-between ">
            <div className="my-0">Total (<BiRupee size={21}/>)</div>
            <strong >{yourCart?.grandTotal?.toFixed(2)}</strong>
        </li>
      </ul>

      <div className="card p-2">
        <div className="input-group">
            <button type="submit" className="w-100 btn btn-primary btn-lg">Order Place</button>
        </div>
      </div>
    </div>


    <div className="col-md-7 col-lg-8 ">
      <h4 className="mb-3">Billing address</h4>
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName">First name</label>
            <input type="text" className="form-control" id="firstName" placeholder="" {...register('firstName',{required:true})} required/>
            {errors.firstName && <div className="text-danger">
              Valid first name is required.
            </div>}
          </div>
          <div className="col-sm-6">
            <label for="lastName">Last name</label>
            <input type="text" className="form-control" id="lastName" placeholder="" {...register('lastName',{required:true})}  required/>
            {errors.lastName && <div className="text-danger">
              Valid last name is required.
            </div>}
          </div>
          <div className="col-12">
          <label for="mobile">Mobile Number</label>
            <input type="text" className="form-control" id="mobile" placeholder="+91"  {...register('mobile',{required:true})} required/>
            {errors.mobile && <div className="text-danger">
              Valid mobile number is required.
            </div>}
        </div>

        <div className="col-12">
          <label for="email">Email </label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com" {...register('email',{required:true})} />
          {errors.email && <div className="text-danger">
              Valid email address is required.
            </div>}
        </div>
        <div className="col-12">
          <label for="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" {...register('address',{required:true})}/>
          {errors.address && <div className="text-danger">
              Valid address is required.
            </div>}
        </div>
        <div className="col-12">
          <label for="address2">Landmark </label>
          <input type="text" className="form-control" id="landmark" placeholder="Apartment or suite" {...register('landmark',{required:true})}/>
          {errors.landmark && <div className="text-danger">
              Valid landmark is required.
            </div>}
        </div>
        <div className="col-md-5 ">
            <label for="country">Country</label>
            <input type="text" className="form-control" value='India' id="country" placeholder="India"  {...register('country',{required:true})}/>
            {errors.country && <div className="text-danger">
              Valid country is required.
            </div>}
          </div>
          <div className="col-md-4">
            <label for="state">State</label>
            <input type="text" className="form-control" id="state" placeholder=""  {...register('state',{required:true})}/>
            {errors.state && <div className="text-danger">
              Valid state is required.
            </div>}
          </div>
          <div className="col-md-4">
            <label for="zip">Zip</label>
            <input type="text" className="form-control" id="zip" placeholder=""  {...register('zip',{required:true})}/>
            {errors.zip && <div className="text-danger">
              Valid zip is required.
            </div>}
          </div>
        </div>

        <hr className="mb-4"/>
        <h4 className="mb-3">Payment</h4>
        <div className="my-3">
          <div className="form-check">
            <input id="cod" name="paymentMethod" type="radio" {...register('paymentMethod',{required:true})} className="form-check-input" checked="true" required/>
            <label className="form-check-label" for="cod">Cash on Delivery</label>
          </div>
        </div>
        <hr className="my-4"/>
    </div>
  </div>
</form>

    </>
  )
}

export default Checkout
