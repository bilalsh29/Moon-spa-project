# Moon Shadow Spa — Project Handoff Guide

This project is delivered as a **fully editable source-code project**. You can change the page structure, styles, text, media, and tracking logic at any time.

## What you fully control

| Area | What you can edit |
|---|---|
| Page content | Headlines, Arabic text, package names, prices, reviews, contact info |
| Layout | Sections, buttons, cards, hero structure, spacing |
| Styling | Colors, CSS, Tailwind classes, typography, responsiveness |
| Media | Images, videos, map placement, gallery assets |
| Tracking | Snap Pixel ID, event names, button tracking behavior |

## Where the Snap Pixel is configured

The Snap Pixel is intentionally kept in **one place only**.

| File | Purpose |
|---|---|
| `client/src/lib/tracking.ts` | Holds the single `SNAP_PIXEL_ID` variable and all Snap event helpers |

Open this file and look for:

```ts
export const SNAP_PIXEL_ID = "b44eab44-24b5-4ca4-a2ca-e0ca3de0b392";
```

To change the Pixel later, replace only that value.

## Event names now used in the code

| Event | Used for |
|---|---|
| `WHATSAPP_CLICK` | Every WhatsApp button and every booking CTA that opens WhatsApp |
| `CALL_CLICK` | Every direct phone / call button |
| `SHARE_CLICK` | Share and map-related click actions |

## Files you will most likely edit

| File | What it controls |
|---|---|
| `client/src/pages/Home.tsx` | Main landing page layout and button behavior |
| `client/src/index.css` | Global styling and shared visual system |
| `client/src/lib/site-config.ts` | Central content such as phone, WhatsApp, maps, packages, reviews, and asset URLs |
| `client/src/lib/tracking.ts` | Pixel ID and tracking event logic |

## How to edit locally

First install dependencies, then run the local development server.

```bash
pnpm install
pnpm dev
```

To verify TypeScript before publishing changes:

```bash
pnpm check
```

## How to get full source ownership

You have two practical ownership paths:

| Method | Result |
|---|---|
| Download ZIP | Immediate full source copy on your computer |
| Export to GitHub | Long-term version control and unrestricted editing in your own repository |

### Export to GitHub

Inside the management UI, open:

**Settings → GitHub**

Then export the full project to a new repository under your own GitHub account. Once exported, it is yours to edit, clone, branch, and deploy elsewhere.

### Download ZIP

Use the attached ZIP file from this delivery, or use the project menu download option inside the interface.

## Tracking coverage summary

Snap Pixel is now wired to all WhatsApp and call links across the page, including:

| Link type | Coverage |
|---|---|
| Hero WhatsApp buttons | Yes |
| Hero call button | Yes |
| Hero phone chip | Yes |
| Featured package CTA | Yes |
| Package booking buttons | Yes |
| Mid-page WhatsApp CTA | Yes |
| Mid-page call CTA | Yes |
| Contact WhatsApp | Yes |
| Contact call | Yes |
| Floating WhatsApp button | Yes |
| Floating call button | Yes |

## Live preview

The current live preview remains available through the active project preview link in the interface and through the current checkpoint attached with the delivery.

## If you want to extend tracking later

You can add more pixels without changing the page structure. The cleanest place to do that is also `client/src/lib/tracking.ts`, then call the new helper functions from `client/src/pages/Home.tsx`.
