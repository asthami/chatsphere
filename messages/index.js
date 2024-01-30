import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import MessageRoute from "./routes/MessageRoute.js";
const app = express();
app.use(cors()); // Add cors middleware
app.use(express.json());

app.use('/api/users/message',MessageRoute);

const Connection = async () => {
  try{
      const URL = `mongodb://chatsphere-mongo-srv:27017/chatsphere`;
      await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
      console.log('Database connected successfully');
  } catch (error) {
      console.log('Error while connecting to the database ', error);
  }

app.listen(4002, () => {
  console.log("Listening on 4002");
});

};

Connection();