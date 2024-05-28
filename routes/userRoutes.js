const express = require("express");
const {
  Login,Signup
} = require("../controllers/user");

const router = express.Router();

router.post("/register",Signup);
router.post("/login",Login);

module.exports = router;
