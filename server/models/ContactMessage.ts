import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    department: { type: String, default: "General" },
    message: { type: String, required: true },
    isEmergency: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const ContactMessage = mongoose.model("ContactMessage", schema);
