import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import usersRoute from './routes/users.js';

const PORT = 8800;
const app = express();
dotenv.config();

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

app.use(cookieParser());
app.use(express.json());

app.use("/api/users", usersRoute);

app.use((req, res, next) => {
  console.log("Middleware used");
});

app.listen(PORT, () => {
  connect();
  console.log("Connected to Backend");
});
