import { Router } from "express";
import { PrayerRequest } from "../models/PrayerRequest.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, request, isAnonymous, isUrgent } = req.body;
    if (!request?.trim()) {
      return res.status(400).json({ error: "Prayer request is required." });
    }
    const doc = await PrayerRequest.create({
      name: isAnonymous ? "Anonymous" : name || "Anonymous",
      email: isAnonymous ? "" : email || "",
      request: request.trim(),
      isAnonymous: !!isAnonymous,
      isUrgent: !!isUrgent,
    });
    res.status(201).json({ success: true, id: doc._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save prayer request." });
  }
});

router.get("/", async (_req, res) => {
  const prayers = await PrayerRequest.find().sort({ createdAt: -1 });
  res.json(prayers);
});

export default router;
