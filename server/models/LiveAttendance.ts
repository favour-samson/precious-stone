import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true },
    viewerId: { type: String, required: true },
  },
  { timestamps: true },
);

schema.index({ sessionId: 1, viewerId: 1 }, { unique: true });

export const LiveAttendance = mongoose.model("LiveAttendance", schema);
