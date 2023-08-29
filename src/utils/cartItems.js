import Cookies from "js-cookie";

const getCartItems=()=>{
  const cartItems=Cookies.get('cartItems');
  return cartItems?JSON.parse(cartItems):[];
}

const setCartItems=(cartItems)=>{
    Cookies.set("cartItems",JSON.stringify(cartItems));
}

const addToCart=(product,quantity)=>{
  const cartItems=getCartItems();
  const existingItem=cartItems.find((item)=>item.id===product.id);
  if(existingItem){
    existingItem.qty += quantity;
  }else{
    cartItems.push({id:product?.id, title:product?.title, price:product?.price, image:product?.thumbnail, qty:quantity})
  }
  setCartItems(cartItems);
}
<<<<<<< HEAD

=======
>>>>>>> e18e4f7b47feb6afb12491802fb2f29cdee99fe0
const addToBuyCart=(product,quantity)=>{
  const cartItems=getCartItems();
  const existingItem=cartItems.find((item)=>item.id===product.id);
  if(existingItem){
    existingItem.qty += quantity;
  }else{
    cartItems.push({id:product?.id, title:product?.title, price:product?.price, image:product?.thumbnail, qty:quantity})
  }
  setCartItems(cartItems);
}
<<<<<<< HEAD

=======
>>>>>>> e18e4f7b47feb6afb12491802fb2f29cdee99fe0
const removeFromCart=(productId)=>{
    const cartItems=getCartItems().filter((item)=>item.id !== productId)
     setCartItems(cartItems);    
}

const updateCartItems=(productId,quantity)=>{
    const cartItems=getCartItems().map((item)=>{
        if(item.id===productId){
          return{...item,qty:quantity}
        }else{
          return item
        }
    })
    setCartItems(cartItems);
}

<<<<<<< HEAD
export {getCartItems,addToCart,removeFromCart,updateCartItems,addToBuyCart}
=======
export {getCartItems,addToCart,removeFromCart,updateCartItems,addToBuyCart}
>>>>>>> e18e4f7b47feb6afb12491802fb2f29cdee99fe0
