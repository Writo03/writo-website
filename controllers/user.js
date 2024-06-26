const mongoose = require("mongoose");
const User = require("../Database/Models/UserSchema");
const bcrpt = require("bcryptjs");
const generateJWT = require("../Database/generateJWT");

const { sendOtpEmail } = require("../utils/mailer");
const { otpModel } = require("../Database/Models/otpSchema");

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
  //console.log(req.body);

  if (!name || !email || !password) {
    res.status(400).json({ message: "Enter all the fields" });
  }

  const ispresent = await User.findOne({ email });
  //console.log(ispresent)

  if (ispresent) {
    res.status(400).json({ message: "User already present" });
  }


  //you need firgure out this , how, we should stop the creation of user until gmail OTP is not verified
  const sendCode = await sendOtpEmail(req.body.email);
  //now,match this sendcode from frontend using verfication API

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  // console.log(user);
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

const verifyOtp = async (req, res) => {
  try {
    const email = req.body.email;
    //console.log("her"+userId);
    const body_otp = req.body.otp;

    if (!email && !body_otp) {
      return res.status(500).json({
        status: "failure",
        message: "Empty otp is not allowed",
      });
    }

    //fint he otp from database

    const userOtpRecords = await otpModel
      .find({ email: email })
      .sort({ createdAt: -1 });

    if (userOtpRecords.length < 0) {
      res.status(500).json({
        status: "failure",
        message: "Account Record doesnt exist . Please login or signin",
      });
    }
    //console.log("13"+userOtpRecords);
    const otp = userOtpRecords[userOtpRecords.length - 1].otp;
    //console.log(body_otp);

    if (otp !== body_otp) {
      return res.status(500).json({
        status: "failure",
        message: "Invalid OTP",
      });
    }

    //to delete otp from database
    // console.log("Here It is Deleted all otp associated with this email id");
    await otpModel.deleteMany({ email: email});

    return res.status(200).json({
      status: "success",
      message: "User is verified",
    });
  } catch (error) {
     
    res.status(400).json({error:"not able to verify OTP"})
  }
};

module.exports = { Login, Signup, verifyOtp };
