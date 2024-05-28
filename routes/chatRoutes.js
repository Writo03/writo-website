const express = require("express");
const {
  accessChat,
  fetchChats,
} = require("../controllers/chat");
const { Authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/",Authenticate, accessChat);
router.get("/",Authenticate, fetchChats);

module.exports = router;
