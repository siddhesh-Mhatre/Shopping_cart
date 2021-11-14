import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/Shopping/shopping-actions";
const Singleitem = ({ current, addToCart }) => {
  return (
    <div className="container mt-5">
      <div className="row single_item cart_item d-flex col-lg-12 m-0">
        <div className="img_div col-lg-5">
          <img
            className="card-img-top"
            src={current.image}
            alt="card_img"
            style={{ width: "100%" }}
          />
        </div>
        <div className="card-body col-lg-4 d-flex justify-content-center flex-column">
          <p className="h4">{current.title}</p>
          <p className="text-muted">{current.description}</p>
          <p>${current.price}</p>
          <p>{current.rating}</p>
        </div>
        <div className="card_action col-lg-3 d-flex flex-column gap-5 justify-content-center align-items-center">
          <button
            onClick={() => addToCart(current.id)}
            class="btn   addTocart col-lg-6"
          >
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Singleitem);
