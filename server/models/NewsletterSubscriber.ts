import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const NewsletterSubscriber = mongoose.model("NewsletterSubscriber", schema);
