import { Router } from "express";
import { NewsletterSubscriber } from "../models/NewsletterSubscriber.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!email?.trim()) {
      return res.status(400).json({ error: "Email is required." });
    }
    const existing = await NewsletterSubscriber.findOne({ email: email.trim() });
    if (existing) {
      return res.status(200).json({ success: true, alreadySubscribed: true });
    }
    await NewsletterSubscriber.create({ name: name?.trim() || "", email: email.trim() });
    res.status(201).json({ success: true, alreadySubscribed: false });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to subscribe." });
  }
});

export default router;
