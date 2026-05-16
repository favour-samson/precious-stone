import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    eventId: { type: Number, required: true },
    eventName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    attendees: { type: Number, default: 1 },
  },
  { timestamps: true },
);

export const EventRegistration = mongoose.model("EventRegistration", schema);
