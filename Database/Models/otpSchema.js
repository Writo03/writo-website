const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: ["true", "email is required"],
  },
  otp: {
    type: String,
    required: ["true", "Otp is required"],
  },
  CreatedAt: Date,
  expiresAt: Date,
});

const otpmodel = mongoose.model("otpmodel", otpSchema);

module.exports = { otpmodel};
