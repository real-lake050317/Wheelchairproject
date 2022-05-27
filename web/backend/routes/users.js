import express from "express";
import User from "../models/User.js";
//import { createError }
import {
  createUser,
  deleteUser,
  updateUser,
  getUser,
  getUsers,
} from "../controllers/user.js";

const router = express.Router();

//CREATE
router.post("/", createUser);

//UPDATE
router.put(":/id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;
