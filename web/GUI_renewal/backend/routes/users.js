import express from 'express';
import Hotel from '../models/User.js';
//import { createError }
import { createUser, deleteUser, updateUser } from '../controllers/user.js';

const router = express.Router();

//CREATE
router.post("/", createUser);

//UPDATE
router.put(":/id", updateUser);

//DELETE
router.delete(":/id", deleteUser);
export default router;
