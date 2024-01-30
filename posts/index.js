import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import PostRoute from './routes/PostRoute.js'
import UploadRoute from './routes/UploadRoute.js'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users/posts',PostRoute);
app.use('/api/users/posts/upload',UploadRoute);

const Connection = async () => {
  try{
      const URL = `mongodb://chatsphere-mongo-srv:27017/chatsphere`;
      await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
      console.log('Database connected successfully');
  } catch (error) {
      console.log('Error while connecting to the database ', error);
  }



app.listen(4003, () => {
  
  console.log("Listening on 4003");
});


};


Connection();