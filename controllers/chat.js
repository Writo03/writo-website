const mongoose = require("mongoose");
const Chat = require("../Database/Models/ChatSchema");

//to access chat on clicking to user

const accessChat = async (req, res) => {
  //getting user id from frontend on clicking on the instructor
  //here sender =student
  //userId=instructor
  const { sender, userId } = req.body;
  //console.log(userId)
  //console.log(req.user._id);

  if (!userId) {
    return res.status(400).json({ message: "no id found" });
  }

  var chatData = {
    sender: sender,
    receiver: userId,
  };

  try {
    const createdChat = await Chat.create(chatData);

    //after creation, populate , user referecene attribute in chatschema without password
    const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
      "sender receiver",
      "-password"
    );

    //finally, return chat
    res.status(200).json(FullChat);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//to fetch chats =>all the chats corresponding to the user

const fetchChats = async (req, res) => {

  try {
    // console.log(req.user);

    const chat_data = await Chat.find({
      sender: req.user._id,
    })
      .populate("sender receiver", "-password")
      .sort({ updatedAt: -1 }); //sorting from older to latest chats
    //console.log(chat_data);
    res.status(200).send(chat_data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  accessChat,
  fetchChats,
};
