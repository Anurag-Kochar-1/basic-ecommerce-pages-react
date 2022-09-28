import "../App.css";
import React, {useContext, useState, useEffect} from 'react'
import SingleProduct from '../components/SingleProduct'
import CartProduct from '../components/CartProduct';
import { Cart } from "../Context";
import emptyCartImage from "../images/emptycart.svg"

function CartPage(props) {

  const {cart, setCart} = useContext(Cart)
  delete cart[0]

  return (
    <>

      { cart.length > 1 && <div className='cart-container'>
      

          <div className='cart-items'>

            { cart.map((cartProduct) => {

              
              return (
                <CartProduct
                key = {cartProduct.id}
                name = {cartProduct.name}
                photoUrl = {cartProduct.photoUrl}
                price = {cartProduct.price}
                
                />
              )
            })}
          </div>


          { cart.length > 1 && <div className='cart-items-payment-details'>

              <div className="billing-details-container" >

                <div className="cart-total-box">
                  <p>Cart Total</p>
                  <p> ₹ {112} </p>
            
                </div>

                <div className="shipping-charges-box">
                  <p>Shipping charges</p>
                  <p> ₹ 0 </p>
                </div>

                <div className="shipping-charges-box">
                  <p> <strong>Total Payable</strong> (Incl.of all taxes) </p>
                  <p> ₹ 99 </p>
                </div>

                <div className="btn-box">
                <button type="button" className="btn btn-dark w-75">Place Order</button>
                </div>

              </div>
          </div>}
      

      </div>}

      { cart.length == 1 && 
        <div className="empty-cart-page-container" >
    
          <img src={emptyCartImage} />
          <h1> Empty Cart </h1>
        </div>
          } 

    </>
    
  )
}

export default CartPage


