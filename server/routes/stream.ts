import { Router } from "express";
import { StreamClient } from "@stream-io/node-sdk";

const router = Router();

const API_KEY = process.env.VITE_STREAM_API_KEY;
const API_SECRET = process.env.STREAM_API_SECRET;
const CALL_TYPE = "livestream";
const CALL_ID = process.env.VITE_STREAM_LIVE_CALL_ID || "sunday-service";
const HOST_USER_ID = "psc-broadcast-host";
const TOKEN_VALIDITY_SECONDS = 6 * 60 * 60; // one service, with margin

function getStreamServerClient(): StreamClient | null {
  if (!API_KEY || !API_SECRET) return null;
  return new StreamClient(API_KEY, API_SECRET);
}

router.post("/host-token", async (req, res) => {
  const passcode = process.env.STREAM_HOST_PASSCODE;
  if (!passcode) {
    return res.status(503).json({ error: "Broadcasting is not configured yet (missing STREAM_HOST_PASSCODE)." });
  }
  const client = getStreamServerClient();
  if (!client) {
    return res.status(503).json({ error: "Broadcasting is not configured yet (missing STREAM_API_SECRET)." });
  }
  if (req.body?.passcode !== passcode) {
    return res.status(401).json({ error: "Incorrect passcode." });
  }

  try {
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
      callType: CALL_TYPE,
      callId: CALL_ID,
    });
  } catch (err) {
    console.error("Failed to issue Stream host token:", err);
    res.status(500).json({ error: "Failed to issue broadcast token." });
  }
});

router.get("/live-status", async (_req, res) => {
  const client = getStreamServerClient();
  if (!client) {
    return res.json({ isLive: false });
  }

  try {
    const { call } = await client.video.call(CALL_TYPE, CALL_ID).get();
    res.json({ isLive: !call.backstage });
  } catch (err) {
    // most commonly: the call doesn't exist yet (no service has ever gone live)
    res.json({ isLive: false });
  }
});

router.get("/recordings", async (_req, res) => {
  const client = getStreamServerClient();
  if (!client) {
    return res.json({ recordings: [] });
  }

  try {
    const { recordings } = await client.video.call(CALL_TYPE, CALL_ID).listRecordings();
    const list = recordings
      .filter((r) => r.url)
      .map((r) => ({
        url: r.url,
        sessionId: r.session_id,
        startTime: r.start_time,
        endTime: r.end_time,
      }))
      .sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime());

    res.json({ recordings: list });
  } catch (err) {
    console.error("Failed to list Stream recordings:", err);
    res.json({ recordings: [] });
  }
});

export default router;
