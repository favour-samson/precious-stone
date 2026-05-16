import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, default: "Anonymous" },
    email: { type: String, default: "" },
    request: { type: String, required: true },
    isAnonymous: { type: Boolean, default: false },
    isUrgent: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const PrayerRequest = mongoose.model("PrayerRequest", schema);
