const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cookieparser=require("cookie-parser");
app.use(cookieparser());

dotenv.config({path:'./config.env'});
require('./db/conn');
// const User = require('./model/userSchema');


app.use(express.json());

// we link the router files to make our router easy
app.use(require('./router/auth'));



const PORT = process.env.PORT || 5000;


if(process.env.NODE_ENV=="production"){
  app.use(express.static("redux_cart/build"));
}
  


 
app.listen(PORT, () => {
  console.log(`server is runnig ${PORT}`);
});
