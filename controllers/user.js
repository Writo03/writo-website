const mongoose = require("mongoose");
const User = require("../Database/Models/UserSchema");
const bcrpt = require("bcryptjs");
const generateJWT = require("../Database/generateJWT");

// to login
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //console.log(req.body);

    if (!email || !password) {
      res.status(422).json({ error: "enter details properly" });
    }
    const user = await User.findOne({ email: email });

    if (user) {
      const ismatch = await bcrpt.compare(password, user.password);

      if (!ismatch) {
        res.status(422).json({ message: "invalid credential" });
      } else {
        //console.log(user);
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          pic: user.pic,
          token: generateJWT(user._id),
        });
      }
    } else {
      res.status(422).json({ message: "invalid credential" });
    }
  } catch (err) {
    res.status(422).json(err);
  }
};



//to register user
const Signup = async (req, res) => {

  const { name, email, password, pic } = req.body;
  console.log(req.body);


  if (!name || !email || !password) {
    res.status(400).json({ message: "Enter all the fields" });
  }

  const ispresent = await User.findOne({ email });
  //console.log(ispresent)

  if (ispresent) {
    res.status(400).json({ message: "User already present" });
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  console.log(user);
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400).json({ message: "User not Found" });
  }
};

module.exports = { Login, Signup };
