const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes");

//we need to include env file only in serverjs
dotenv.config();

//to connect backend to database
const connectdb = require("./Database/Databaseconn");
connectdb();

app.use(express.json());
app.use(cors());

// Chat routes
app.use("/api/chat", chatRoutes);

//message routes
app.use("/api/message", messageRoutes);

//user routes
app.use("/api/user",userRoutes);


const port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running on port ");
});
