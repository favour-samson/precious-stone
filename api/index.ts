import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { connectDB } from "../server/db.js";
import prayerRouter from "../server/routes/prayer.js";
import contactRouter from "../server/routes/contact.js";
import eventsRouter from "../server/routes/events.js";
import ministriesRouter from "../server/routes/ministries.js";
import newsletterRouter from "../server/routes/newsletter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/prayer", prayerRouter);
app.use("/api/contact", contactRouter);
app.use("/api/events", eventsRouter);
app.use("/api/ministries", ministriesRouter);
app.use("/api/newsletter", newsletterRouter);
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

connectDB();

export default serverless(app);
