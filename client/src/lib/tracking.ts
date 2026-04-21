declare global {
  interface Window {
    snaptr?: SnapTracker;
  }
}

type SnapTracker = ((...args: unknown[]) => void) & {
  queue: unknown[][];
  handleRequest?: (...args: unknown[]) => void;
  initialized?: boolean;
};

// Snap Pixel setup:
// Change ONLY the value below when you want to replace the current Pixel ID.
// Example: const SNAP_PIXEL_ID = "your-new-snap-pixel-id";
export const SNAP_PIXEL_ID = "b44eab44-24b5-4ca4-a2ca-e0ca3de0b392";

// Keep event names centralized here so reports stay consistent.
export const SNAP_EVENTS = {
  PAGE_VIEW: "PAGE_VIEW",
  WHATSAPP_CLICK: "WHATSAPP_CLICK",
  CALL_CLICK: "CALL_CLICK",
  SHARE_CLICK: "SHARE_CLICK",
} as const;

type SnapEventName = (typeof SNAP_EVENTS)[keyof typeof SNAP_EVENTS];

function createSnapTracker(): SnapTracker {
  const tracker = ((...args: unknown[]) => {
    if (tracker.handleRequest) {
      tracker.handleRequest(...args);
    } else {
      tracker.queue.push(args);
    }
  }) as SnapTracker;

  tracker.queue = [];
  return tracker;
}

export function installSnapPixel() {
  if (typeof window === "undefined") return;

  if (!window.snaptr) {
    window.snaptr = createSnapTracker();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://sc-static.net/scevent.min.js";
    document.head.appendChild(script);
  }

  if (!window.snaptr.initialized) {
    window.snaptr("init", SNAP_PIXEL_ID);
    window.snaptr("track", SNAP_EVENTS.PAGE_VIEW);
    window.snaptr.initialized = true;
  }
}

export function trackSnapEvent(eventName: SnapEventName, params?: Record<string, string | number>) {
  if (typeof window === "undefined" || !window.snaptr) return;
  window.snaptr("track", eventName, params ?? {});
}

// Use this helper for every WhatsApp or booking button that opens WhatsApp.
export function trackWhatsAppClick(location: string) {
  trackSnapEvent(SNAP_EVENTS.WHATSAPP_CLICK, { location });
}

// Use this helper for every direct call / tel link in the page.
export function trackCallClick(location: string) {
  trackSnapEvent(SNAP_EVENTS.CALL_CLICK, { location });
}

export function getSnapPixelId() {
  return SNAP_PIXEL_ID;
}
