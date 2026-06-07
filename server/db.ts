import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/precious-stone-church";

let connected = false;

export async function connectDB() {
  if (connected) return;
  if (mongoose.connection.readyState === 1) {
    connected = true;
    return;
  }
  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 8000,
  });
  connected = true;
  console.log("✅ MongoDB connected");
}
