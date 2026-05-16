import { Router } from "express";
import { ContactMessage } from "../models/ContactMessage.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, department, message, isEmergency } = req.body;
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: "Name, email and message are required." });
    }
    const doc = await ContactMessage.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      department: department || "General",
      message: message.trim(),
      isEmergency: !!isEmergency,
    });
    res.status(201).json({ success: true, id: doc._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message." });
  }
});

export default router;
