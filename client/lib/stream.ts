import { StreamVideoClient, User } from "@stream-io/video-react-sdk";

const apiKey = import.meta.env.VITE_STREAM_API_KEY as string;

export const LIVE_CALL_ID =
  (import.meta.env.VITE_STREAM_LIVE_CALL_ID as string) ?? "sunday-service";

export function isStreamConfigured(): boolean {
  return Boolean(apiKey && apiKey !== "your_stream_api_key_here");
}

export function createGuestClient(
  name: string,
  id?: string,
): StreamVideoClient {
  const guestId =
    id ??
    `guest_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const user: User = { type: "guest", id: guestId, name };
  return new StreamVideoClient({ apiKey, user });
}

const VIEWER_IDENTITY_KEY = "psc_live_viewer_identity";

export interface ViewerIdentity {
  id: string;
  name: string;
}

// Stable per-browser identity so re-joins (refresh, dropped wifi) don't
// count as new attendees when tallying who watched the livestream.
export function getOrCreateViewerIdentity(): ViewerIdentity {
  try {
    const stored = localStorage.getItem(VIEWER_IDENTITY_KEY);
    if (stored) return JSON.parse(stored) as ViewerIdentity;
  } catch {
    // corrupt storage — fall through and generate a fresh one
  }

  const identity: ViewerIdentity = {
    id: `viewer_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    name: `Guest ${Math.floor(1000 + Math.random() * 9000)}`,
  };

  try {
    localStorage.setItem(VIEWER_IDENTITY_KEY, JSON.stringify(identity));
  } catch {
    // private browsing / storage disabled — identity just won't persist
  }

  return identity;
}

export function createHostClient(
  userId: string,
  token: string,
  name?: string,
): StreamVideoClient {
  const user: User = { id: userId, name: name ?? "Broadcast Host" };
  return new StreamVideoClient({ apiKey, user, token });
}
