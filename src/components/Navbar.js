import React, {useState, useContext} from "react";
import "../App.css";
import Home from "../pages/Home"
import Products from "../pages/Products";
import CartPage from "../pages/Cart";
import { Routes, Route, Link } from "react-router-dom";
import { Cart } from "../Context";

function Navbar() {
  const {cart, setCart} = useContext(Cart)
  


  return (
    <div>
      
        <nav className="navbar navbar-expand-lg bg-primary p-3">
          <div className="container-fluid">

            <Link to={'/'} className="navbar-brand text-light" > Amazoooo </Link> 
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/products"} className="nav-link active text-light">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/cart"} className="nav-link text-light">
                    Cart
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav> 

      <Routes>
        <Route path="/" element={ <Products /> } />

        <Route path="/products"> 
            {/* <Products cart={cart} setCart = {setCart} />  */}
            <Route path="/products" element={ <Products  />  } />
        </Route>

        <Route path="/cart">
            {/* <Cart cart={cart} setCart = {setCart} />   */}
            <Route path="/cart" element={ <CartPage  />  } />
        </Route>

      </Routes>

    </div>

    
  );
}

export default Navbar;
