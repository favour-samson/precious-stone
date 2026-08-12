// Plain local tracking id for the "did this browser watch this service"
// count. Deliberately NOT a Stream user id/identity of any kind — viewers
// must stay on Stream's anonymous connection for reliable live access (see
// LiveStream.tsx). This id only ever goes to our own /api/stream/attendance
// endpoint, never to Stream.
const ATTENDANCE_ID_KEY = "psc_attendance_id";

export function getOrCreateAttendanceId(): string {
  try {
    const stored = localStorage.getItem(ATTENDANCE_ID_KEY);
    if (stored) return stored;
  } catch {
    // corrupt/unavailable storage — fall through and generate a fresh one
  }

  const id = `att_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  try {
    localStorage.setItem(ATTENDANCE_ID_KEY, id);
  } catch {
    // private browsing / storage disabled — id just won't persist
  }
  return id;
}

export function pingAttendance(sessionId: string) {
  fetch("/api/stream/attendance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, viewerId: getOrCreateAttendanceId() }),
  }).catch((err) => console.error("[Attendance] ping failed:", err));
}
