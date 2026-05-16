import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    ministry: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    message: { type: String, default: "" },
  },
  { timestamps: true },
);

export const MinistrySignup = mongoose.model("MinistrySignup", schema);
