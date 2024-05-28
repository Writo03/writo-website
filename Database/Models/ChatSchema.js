const mongoose = require("mongoose");

const ChatSchema= mongoose.Schema(
  {
    sender:{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
    receiver:{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
