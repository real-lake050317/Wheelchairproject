import { NCPClient } from "node-sens";
import dotenv from 'dotenv';

dotenv.config();


const ncp = new NCPClient({
  phoneNumber: process.env.mynumber,
  serviceId: process.env.service_ID,
  secretKey: process.env.secret_key,
  accessKey: process.env.access_key,
});
/*
const { success, msg, status } = await ncp.sendSMS({
  to: "01099666503",
  content: "Hello SENS",
});
*/
ncp.sendSMS({
  to: "01099666503",
  content: "Hello SENS",
});
