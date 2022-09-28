import React, { useContext } from "react";
import { Cart } from "../Context";

function CartProduct(props) {
  const { cart, setCart } = useContext(Cart);

  

  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.photoUrl}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> {props.name} </h5>
              <p className="card-text">{props.price}</p>

              <div className="btn-group m-1">
                <button
                  type="button"
                  className="btn btn-outline-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Size
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      S
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      M
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      L
                    </a>
                  </li>
                  <li>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      XL
                    </a>
                  </li>
                </ul>
              </div>

              <div className="btn-group m-1">
                <button
                  type="button"
                  className="btn btn-outline-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Quantity
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      3
                    </a>
                  </li>
                  <li>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Contact for bulk order
                    </a>
                  </li>
                </ul>
              </div>

              <button 
              type="button" 
              className="btn btn-outline-danger m-1"
              onClick={() => setCart(cart.filter((c) =>
                c.id !== cart.id
                )) }
              
              >Remove</button>

              {/* <button onClick={() => console.log(1) } >Log Total </button> */}

            </div>
          </div>
        </div>
      </div>

        
      

    </div>
  );
}

export default CartProduct;
