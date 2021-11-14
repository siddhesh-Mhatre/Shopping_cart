import * as actionTypes from "./shopping-types";
import img1 from "../../img/buy-1.jpg";
import img2 from "../../img/p1.png";
import img3 from "../../img/product-2.jpg";
import img4 from "../../img/product-5.jpg";
import img5 from "../../img/c1.png";
import img6 from "../../img/c2.png";
import img7 from "../../img/c3.png";
import img8 from "../../img/c4.png";
import img9 from "../../img/w1.png";
import img10 from "../../img/w2.png";
import img11 from "../../img/w3.png";
import img12 from "../../img/w4.png";
const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Red T-shirt",
      description:
        "Red T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Tradit from undergarments used in the 19th century",
      price: 15.0,
      rating : "⭐⭐⭐⭐" ,
      
      category :"men",
      image:img1,
    },
    {
      id: 2,
      title: "black T-shirt",
      description:
        "black T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Tradit from undergarments used in the 19th century ",
      price: 20.0,
      rating : "⭐⭐⭐⭐⭐" ,
      category :"men",
      image:img2,
    },
    {
      id: 3,
      title: "spark shoes",
      description:
        "SPARX is a product of RELAXO FOOTWEAR COMPANY LTD. It is the second most populated brand in India the footwear of SPARX is of very premium",
      price: 150.0,
      rating : "⭐⭐⭐⭐" ,
      category :"men",
      image:img3,
    },
    {
      id: 4,
      title: "PUMA white shoes",
      description:
        "PUMA's self-lacing Fit Intelligence Training Shoe responds to athletes and their environment by adapting to the wearer's needs. The shoe automatically adapts to the foot and knows how loose or tight it can lace",
      price: 150.0,
      rating : "⭐⭐⭐" ,
      category :"men",
      image:img4,
    },

    {
      id: 5,
      title: "Orange shirt",
      description:
        "Ace weekend dressing in this orange stripe Polo Neck T-shirt from Allen Solly by Allen Solly. Product Features. Brand : Allen Solly Subbrand : Allen Solly Fit.",
      price: 150.0,
      rating : "⭐⭐" ,
      category :"child",
      image:img5,
    },


    {
      id: 6,
      title: "Smart watch",
      description:
        "Most of them offer fitness and wellness services such as running health applications, tracking steps, tracking heart rate, sleep monitoring and any other sensor-related features. Some provide different mobile functions such scheduling events, app availability, sending messages and answering calls.",
      price: 150.0,
      rating : "⭐⭐⭐⭐⭐" ,
      category :"child",
      image:img6,
    },


    {
      id: 7,
      title: "Drag racer",
      description:
        "The toy car comprises a circuit testing board, a power source device and a toy-car body with a driving mechanism. The circuit testing board and the power source device are detachably mounted onto the toy car body.",
      price: 150.0,
      rating : "⭐⭐⭐" ,
      category :"child",
      image:img7,
    },
    
    {
      id: 8,
      title: "Toy car",
      description:
        "The toy car comprises a circuit testing board, a power source device and a toy-car body with a driving mechanism. The circuit testing board and the power source device are detachably mounted onto the toy car body.",
      price: 150.0,
      rating : "⭐⭐⭐⭐" ,
      category :"child",
      image:img8,
    },
    {
      id: 9,
      title: "gucci purse",
      description:
        "They are small or medium-sized, made of leather, canvas, and suede, and feature zippered compartments and metal locks or magnetic snap closures. Some have adjustable straps, usually made of leather.",
      price: 150.0,
      rating : "⭐⭐⭐⭐" ,
      category :"women",
      image:img9,
    },

    {
      id: 10,
      title: "Gucci handbag",
      description:
        "Gucci handbags come in a range of sizes and styles. They are small or medium-sized, made of leather, canvas, and suede, and feature zippered compartments",
      price: 150.0,
      rating : "⭐⭐⭐⭐" ,
      category :"women",
      image:img10,
    },

    {
      id: 11,
      title: "Women Perfume",
      description:
        "Women Perfume - Buy Women Perfume at India's Best Online Shopping Store. ... from the comfort of your home and get your wishlist delivered to your doorstep!",
      price: 150.0,
      rating : "⭐⭐⭐" ,
      category :"women",
      image:img11,
    },
    {
      id: 12,
      title: "makeup kit",
      description:
        "A makeup kit box is an answer to your prayers if you struggle to pick out various make-up products like a primer, foundation, mascara, lip colour, sealer",
      price: 150.0,
      rating : "⭐⭐⭐" ,
      category :"women",
      image:img12,
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {

    case actionTypes.ADD_TO_CART:
      // find the product
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );

      // check if product in cart or not
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};


export default shopReducer;