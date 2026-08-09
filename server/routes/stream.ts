import { Router } from "express";
import { StreamClient } from "@stream-io/node-sdk";

const router = Router();

const API_KEY = process.env.VITE_STREAM_API_KEY;
const API_SECRET = process.env.STREAM_API_SECRET;
const CALL_ID = process.env.VITE_STREAM_LIVE_CALL_ID || "sunday-service";
const HOST_USER_ID = "psc-broadcast-host";
const TOKEN_VALIDITY_SECONDS = 6 * 60 * 60; // one service, with margin

router.post("/host-token", async (req, res) => {
  const passcode = process.env.STREAM_HOST_PASSCODE;
  if (!passcode) {
    return res.status(503).json({ error: "Broadcasting is not configured yet (missing STREAM_HOST_PASSCODE)." });
  }
  if (!API_KEY || !API_SECRET) {
    return res.status(503).json({ error: "Broadcasting is not configured yet (missing STREAM_API_SECRET)." });
  }
  if (req.body?.passcode !== passcode) {
    return res.status(401).json({ error: "Incorrect passcode." });
  }

  try {
    const client = new StreamClient(API_KEY, API_SECRET);
    await client.upsertUsers([
      { id: HOST_USER_ID, name: "Church Broadcast Host", role: "admin" },
    ]);
    const token = client.generateUserToken({
      user_id: HOST_USER_ID,
      validity_in_seconds: TOKEN_VALIDITY_SECONDS,
    });

    res.json({
      apiKey: API_KEY,
      token,
      userId: HOST_USER_ID,
      callType: "livestream",
      callId: CALL_ID,
    });
  } catch (err) {
    console.error("Failed to issue Stream host token:", err);
    res.status(500).json({ error: "Failed to issue broadcast token." });
  }
});

export default router;
