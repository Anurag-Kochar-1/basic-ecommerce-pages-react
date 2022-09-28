import React, {useState, useContext} from "react";
import { Cart } from "../Context";


function SingleProduct (props) {

  const {cart, setCart} = useContext(Cart)


  return (
    <div>
      <div className="card m-2" style={{ width: "18rem" }}  >
        <img src={props.photoUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {props.name} </h5>
          <p className="card-text">{props.price}</p>

          { cart &&  <button 
          className="btn btn-primary" 
          onClick={() => setCart([...cart, props.obj])  }
          >Add to cart
          </button>}


          {/* <button onClick = { () => console.log(props.obj) } > Check obj </button>
          <button onClick = { () => console.log(cart.cart) } > Check Cart State </button> */}

        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
