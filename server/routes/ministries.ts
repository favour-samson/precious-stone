import { Router } from "express";
import { MinistrySignup } from "../models/MinistrySignup.js";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { ministry, name, email, phone, message } = req.body;
    if (!name?.trim() || !email?.trim() || !ministry) {
      return res.status(400).json({ error: "Name, email and ministry are required." });
    }
    const doc = await MinistrySignup.create({
      ministry,
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      message: message?.trim() || "",
    });
    res.status(201).json({ success: true, id: doc._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit signup." });
  }
});

export default router;
