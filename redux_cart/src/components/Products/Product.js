import React, {useState } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  loadCurrentItem,
  addToCart,
} from "../../Redux/Shopping/shopping-actions";
const Product = ({ product, addToCart, loadCurrentItem }) => {

  
 const [show,setShow]=useState(false);
 
 const animation=(id)=>{
  setShow(true);
   document.getElementById(id).classList.add("slide-out-tr");  
  
 }
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column" style={{position:"realtive"}}>
      <div
        class="card justify-content-center align-items-center "
        style={{ width: "285px" }}
      >
        <img
          class="img-fluid"
          src={product.image}
          alt="Card_img"
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
        />
    

        <div class="card-body">
          <h5 class="card-title text-center" >{product.title}</h5>
          <p class="card-text">{product.description.length > 70 ?product.description.slice(0,70) + "..."  : product.description}</p>
          <p className="text-center price m-0">${product.price}</p>
          <p className="text-center ">{product.rating}</p>
          <div className="row d-flex col-lg-12 m-0 p-0">
            <button
              onClick={() => addToCart(product.id)}
              className="btn   addTocart col-lg-6"
            >
             <span onClick={()=>animation(product.id)}>Add To cart </span> 
            </button>
            <Link
              to={`/product/${product.id}`}
              class="btn btn-secondary ViewItem col-lg-6"
              onClick={() => loadCurrentItem(product)}
            >
              View Item
            </Link>
          </div>
        </div>
  
      </div>
      <img
          class="img-thumbnail"
          id={`${product.id}`}
          src={product.image}
          alt="Card_img"
          style={{maxWidth:"180px",position:"absolute",display:show?"block":"none"}}  //display none asel ani click kely vr display block 
        />
   
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
