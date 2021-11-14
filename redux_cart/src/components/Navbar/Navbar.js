import React, { useEffect, useState } from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <div className="container-fluid">
      <nav className="navbar   navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand " to="/">
          S-Mart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Redux-cart <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <form className="form-inline  my-2 my-lg-0 d-flex">
            <div className="cart_link">
              <Link
                className="mx-2 cart_btn btn heartbeat"
                to="/cart"
                style={{ color: "#6a35ff" }}
              >
                cart ({cartCount})
              </Link>
            </div>

            <button
              className="btn login_link btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <Link to="/Register" className="text-decoration-none text-light">Register</Link>
            </button>
        
         
         
          </form>
          <Link to="/logout" className="btn login_link d-block">Logout</Link>
        </div>
      </nav>

 
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
