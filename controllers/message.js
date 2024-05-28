const Message = require("../Database/Models/MessageSchema");


//API to get all the messages
const fetchMessages = async (req, res) => {

  try {
    const id = req.params.chatId;
    //console.log(id);
    const messages = await Message.find({ chat: id })
      .populate("sender", "name pic email");
   
      //console.log(messages);
    res.json(messages);

  } catch (error) {
    res.status(400).json({ error: "No message found" });
  }
};

//API to send messages
const sendMessage = async (req, res) => {

  const { content,pic,chatId } = req.body;
  //console.log(req.body);

  if (!content && !pic || !chatId) {
    return res.sendStatus(400).json({ error: "invalid data" });
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    pic:pic,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);
   // console.log(message);

    message = await message.populate("sender", "name pic");
   // console.log(message);
    res.status(200).json(message);
  } catch (error) {
    console.log(errror)
    res.status(400).json({ error: error.message });
  }
};

module.exports = { fetchMessages, sendMessage };
