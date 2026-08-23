import { Router } from "express";
import { StreamClient } from "@stream-io/node-sdk";
import { LiveAttendance } from "../models/LiveAttendance.js";

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
    // Most commonly: the call doesn't exist yet (no service has ever gone
    // live) — but this also silently swallows real misconfiguration (e.g.
    // STREAM_API_SECRET wrong), so log it rather than going fully quiet.
    console.error("[live-status] check failed:", err);
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
        filename: r.filename,
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

router.delete("/recordings", async (req, res) => {
  const passcode = process.env.STREAM_HOST_PASSCODE;
  if (!passcode || req.body?.passcode !== passcode) {
    return res.status(401).json({ error: "Incorrect passcode." });
  }

  const { sessionId, filename } = req.body ?? {};
  if (!sessionId || !filename) {
    return res.status(400).json({ error: "sessionId and filename are required." });
  }

  const client = getStreamServerClient();
  if (!client) {
    return res.status(503).json({ error: "Broadcasting is not configured yet (missing STREAM_API_SECRET)." });
  }

  try {
    await client.video.call(CALL_TYPE, CALL_ID).deleteRecording({ session: sessionId, filename });
    res.status(204).end();
  } catch (err) {
    console.error("Failed to delete Stream recording:", err);
    res.status(500).json({ error: "Failed to delete recording." });
  }
});

// Attendance is tracked independently of the viewer's Stream connection
// (which must stay anonymous for reliable public access — see LiveStream.tsx)
// so it survives people leaving instead of relying on Stream's live
// participant state.
router.post("/attendance", async (req, res) => {
  const { sessionId, viewerId } = req.body ?? {};
  if (!sessionId || !viewerId) {
    return res.status(400).json({ error: "sessionId and viewerId are required." });
  }

  try {
    await LiveAttendance.updateOne(
      { sessionId, viewerId },
      { $setOnInsert: { sessionId, viewerId } },
      { upsert: true },
    );
    res.status(204).end();
  } catch (err) {
    console.error("Failed to record attendance:", err);
    res.status(500).json({ error: "Failed to record attendance." });
  }
});

router.get("/attendance/:sessionId", async (req, res) => {
  try {
    const count = await LiveAttendance.countDocuments({ sessionId: req.params.sessionId });
    res.json({ count });
  } catch (err) {
    console.error("Failed to count attendance:", err);
    res.json({ count: 0 });
  }
});

export default router;
