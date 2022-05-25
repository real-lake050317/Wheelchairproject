import express from "express";
import SMS from "../models/SMS.js";

import {
  createSMS,
  deleteSMS,
  updateSMS,
  getSMS,
  getSMSs,
} from "../controllers/sms.js";

const router = express.Router();

//CREATE
router.post("/", createSMS);

//UPDATE
router.put(":/id", updateSMS);

//DELETE
router.delete("/:id", deleteSMS);

//GET
router.get("/:id", getSMS);

//GET ALL
router.get("/", getSMSs);

export default router;
