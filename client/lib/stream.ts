import { StreamVideoClient, User } from "@stream-io/video-react-sdk";

const apiKey = import.meta.env.VITE_STREAM_API_KEY as string;

export const LIVE_CALL_ID =
  (import.meta.env.VITE_STREAM_LIVE_CALL_ID as string) ?? "sunday-service";

export function isStreamConfigured(): boolean {
  return Boolean(apiKey && apiKey !== "your_stream_api_key_here");
}

export function createAnonymousClient(): StreamVideoClient {
  const user: User = { type: "anonymous" };
  return new StreamVideoClient({ apiKey, user });
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
