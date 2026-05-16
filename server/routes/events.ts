import { Router } from "express";
import { EventRegistration } from "../models/EventRegistration.js";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { eventId, eventName, name, email, phone, attendees } = req.body;
    if (!name?.trim() || !email?.trim() || !eventName) {
      return res.status(400).json({ error: "Name, email and event are required." });
    }
    const doc = await EventRegistration.create({
      eventId: Number(eventId),
      eventName,
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      attendees: Number(attendees) || 1,
    });
    res.status(201).json({ success: true, id: doc._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to register for event." });
  }
});

export default router;
