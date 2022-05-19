import express from 'express';
import Hotel from '../models/User.js';
//import { createError }
import { createUser, updateUser } from '../controllers/user.js';

const router = express.Router();

//CREATE
router.post("/", createUser);

//UPDATE
router.put(":/id", updateUser);

export default router;
