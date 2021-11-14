import React, { useState } from "react";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from  "../../Redux/Shopping/shopping-actions";
 

const CartItem = ({item, adjustQty, removeFromCart}) => {
 const [input,setInput] = useState(item.qty);
 const onChangeHandler=(e)=>{
   setInput(e.target.value);
   adjustQty(item.id,e.target.value);
 }
  return (
    <div className="row cart_item single_item d-flex col-lg-12 m-0">
      <div className="img_div col-lg-5">
      
      <img class="card-img-top" src={item.image} alt="Card_image" style={{width:"100%",padding:"6px"}}/>
      </div>
      <div className="card-body col-lg-4 d-flex justify-content-center flex-column">
        <p>{item.title}</p>
        <p>
        {item.description}
        </p>
        <p>${item.price}</p>
        <p>{item.rating}</p>
      </div>
      <div className="card_action col-lg-3 d-flex flex-column gap-5 justify-content-center align-items-center">
        <div className="item_qty d-flex justify-content-center align-content-center">
          <label htmlFor="qty" style={{alignSelf:"center",margin:"0"}}>Adjust Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler}/>
        </div>
        <button className="btn btn-outline-warning"
        onClick={()=>removeFromCart(item.id)}
        >
        remove from cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default  connect(null,mapDispatchToProps)(CartItem);
