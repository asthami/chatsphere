import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users',AuthRoute);
app.use('/api/users/cur',UserRoute);


const Connection = async () => {

try{
    const URL = `mongodb://chatsphere-mongo-srv:27017/chatsphere`;
    await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Database connected successfully');
  
} catch (error) {
    console.log('Error while connecting to the database ', error);
}

app.listen(4000, () => {
  console.log("Listening on 4000");
});


}

Connection();



