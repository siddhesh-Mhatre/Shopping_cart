const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;  //get token form browser
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);//comapre token got from browser with secret key // also store user data in it
    const rootUser = await User.findOne({   // find user by id and token // for check user geniuen or not
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if(!rootUser){
        throw new Error('User not found')
    }

    req.token = token; // for feature use
    req.rootUser = rootUser;   //store user info in 'rootUser' variable that will be acsess by /about route
    req.userID = rootUser._id;// for feature use

    next();  // permisson grant
  } catch (err) {
    res.status(401).send("unauthrixe: no token provide");
    console.log(err);
  }
};

module.exports = Authenticate;
