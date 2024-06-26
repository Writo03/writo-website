const express = require("express");
const { Login, Signup, verifyOtp } = require("../controllers/user");

const router = express.Router();

router.post("/register", Signup);
router.post("/login", Login);
router.post("/verifyOtp", verifyOtp);

module.exports = router;
