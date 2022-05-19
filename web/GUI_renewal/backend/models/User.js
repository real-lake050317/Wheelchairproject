import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lng: {
      type: String,
      required: true,
    },
    lat: {
      type: Boolean,
      required: true,
    },
    notes: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
