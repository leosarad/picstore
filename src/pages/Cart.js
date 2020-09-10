import React, {useState, useContext} from "react"
import {PhotosContext} from "../PhotosContext"

function Cart(){
     let [btnText,steBtnText] = useState("Checkout")
    let {cart,setCart} = useContext(PhotosContext)
    let List = cart.map( item => 
          <div className="cart-item" key={item.id}>
               <img src={item.url}></img>
               <span>$8</span>
               <span>
               <i className="ri-delete-bin-line" onClick={()=>removeProduct(item.id)} ></i>
               </span>
          </div>
     )
     const calculateTotal = ()=>{
          let total = 0;
          cart.forEach(item => {
               total += 8
          });
          return total
     }
     const cartCheckout = ()=>{
          console.log("Checkout")
          steBtnText("Checking Out...")
          setTimeout(()=>{
               setCart([])
               steBtnText('Checkout')
          },3000)
     }
     const removeProduct = (id)=>{
          let updatedCart = cart.filter(item=>id!=item.id)
          setCart(updatedCart);
     }
    return (
     <div className="cart-list">
          <h2>Cart Products</h2>
          {
               (cart.length>0) &&
               <div className="cart-item header">
                    <span>Products</span>
                    <span>Price</span>
                    <span>Remove</span>
               </div>
          }
          {List}
          {
               (cart.length>0) &&
               <div>
                    <div className="cart-item footer">
                         <span></span>
                         <span></span>
                         <span>Total: ${calculateTotal()}</span>
                    </div>
                    <div>
                         <button className="checkout" onClick={cartCheckout}>
                            {btnText}
                         </button>
                    </div>
               </div>
          }
          {
               (cart.length==0) &&
                    <span>No products in cart</span>
          }
     </div>
    )
}

export default Cart