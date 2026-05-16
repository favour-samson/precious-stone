import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import prayerRouter from "./routes/prayer.js";
import contactRouter from "./routes/contact.js";
import eventsRouter from "./routes/events.js";
import ministriesRouter from "./routes/ministries.js";
import newsletterRouter from "./routes/newsletter.js";

const app = express();
const PORT = process.env.API_PORT || 3001;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:8080", credentials: true }));
app.use(express.json());

app.use("/api/prayer", prayerRouter);
app.use("/api/contact", contactRouter);
app.use("/api/events", eventsRouter);
app.use("/api/ministries", ministriesRouter);
app.use("/api/newsletter", newsletterRouter);

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 API server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  });
