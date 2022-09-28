
import "../App.css";
import React, {useState, useContext} from "react";
import Navbar from "../components/Navbar";
import SingleProduct from "../components/SingleProduct";

// Importing JSON DATA
import productJsonData from "../Data/AllProductsDetails"

import { Cart } from "../Context";



function Products(props) {

  // const {cart, setCart} = useContext(Cart)

  return (
    
    <div className="products-page-container">

      {/* <Navbar /> */}

      <div className="products-container">
        {productJsonData.map((prod) => {

          const productObj = {
            id : prod.id,
            name : prod.name,
            photoUrl : prod.photoUrl,
            price : prod.price
          }

          return (<SingleProduct 
          key={prod.id}
          name = {prod.name}
          photoUrl = {prod.photoUrl}
          price = {prod.price}
          
          
          // cart = {cart.cart}
          // setCart = {setCart.setCart}
          obj = {productObj}

          />)
        })}  
      </div>



      {/* testing state output */}
      {/* {cart.map((ter) => {
        return <h1> {ter.name} </h1>
      })} */}

    
    </div>
  );
}

export default Products;
