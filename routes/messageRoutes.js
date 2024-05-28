const express = require("express");
const {
  fetchMessages,
  sendMessage,
} = require("../controllers/message");
const { Authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:chatId",Authenticate, fetchMessages);
router.post("/",Authenticate, sendMessage);

module.exports = router;
