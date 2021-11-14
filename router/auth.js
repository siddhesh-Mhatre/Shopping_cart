const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../db/conn");
const User = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");
 
 
 

// using asyn
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz filled data" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "email allredy exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not maching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({ message: "user register sucessfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route
router.post("/signin", async (req, res) => {
  //  console.log(req.body);
  //  res.json({message :"awsome"});
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "plz fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      // console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "invalid Credinatial" });
      } else {
        res.json({ message: "user loging sucessfully" });
      }
    } else {
      res.status(400).json({ error: "invalid Credinatial" });
    }
  } catch (err) {
    console.log(err);
  }
});

// about us page
router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

 
 
// logout us page
router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logout");
});

 
 

module.exports = router;
