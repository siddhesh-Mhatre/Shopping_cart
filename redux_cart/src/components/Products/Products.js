import React, { useState } from "react";
import Product from "./Product";

import { connect } from "react-redux";
import CartMenu from "../Cart/CartMenu";

const Products = ({ products }) => {
  const allCatValues = [
    ...new Set(
      products.map((curElem) => {
        return curElem.category;
      })
    ),
    "all",
  ];

  //  filter fun
  const [items, setItems] = useState(products);
  const [catItems] = useState(allCatValues);

  const filterItem = (categItem) => {
    if (categItem === "all") {
      return setItems(products);
    }

    const updatedItems = products.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <div className="container-fluid mt-3">
      <CartMenu filterMenu={filterItem} catItems={catItems} />

      <div className="row Product_table d-flex col-lg-12 m-0  justify-content-center align-items-center">
        {items.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
