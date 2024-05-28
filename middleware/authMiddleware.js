const jwt = require("jsonwebtoken");
const User = require("../Database/Models/UserSchema.js");

const Authenticate = async (req, res, next) => {
  let token;

  //cheking token is present in header or not ,and it should start with Bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    //header autherization comes with bearer and token

    //so, we are splitting token from bearer
    token = req.headers.authorization.split(" ")[1];

    //decodes token id by comparing with JWT secret key stored in .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //after verification, put user details without its password using select
    req.user = await User.findById(decoded.id).select("-password");
    //console.log(req.user);

    //as it is middleware , we need to go to next function after authentication
    next();
  }

  if (!token) {
    res.status(401).json({error:"token not found"})
  }
};

module.exports ={Authenticate};
