import mongoose from "mongoose";
const { Schema } = mongoose;

const SMSSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("SMS", SMSSchema);
