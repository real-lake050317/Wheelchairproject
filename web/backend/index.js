import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import usersRoute from './routes/users.js';
import smsRoute from './routes/sms.js';
import cors from 'cors';

const PORT = 8800;
const app = express();
dotenv.config();

let corsOption = {
  origin: 'http://localhost:8800',
  credentials: true
} 

app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});

app.use(cookieParser());
app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/sms", smsRoute);

app.use((req, res, next) => {
  console.log("Middleware used");
});

app.listen(PORT, () => {
  connect();
  console.log("Connected to Backend");
});

