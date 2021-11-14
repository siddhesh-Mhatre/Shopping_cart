import React from "react";

const CartMenu = ({ filterMenu, catItems }) => {
    
  return (
    <div
      className="row d-flex container-fluid mx-auto col-lg-12 justify-content-center align-items-center mb-3"
      style={{ backgroundColor: "grey" }}
    >
      <div className="filter row d-flex col-lg-6 ">
 
        {catItems.map((curElem, index) => {
            return (
              <button
                className="col-lg-3 filter_btn btn btn-outline-secondary"
                key={index}
                onClick={() => filterMenu(curElem)}
              >
                {curElem}
              </button>
            );
          })}
     
        
      </div>
    </div>
  );
};

export default CartMenu;
