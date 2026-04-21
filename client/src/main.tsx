import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function injectAnalytics() {
  const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  if (!analyticsEndpoint || !websiteId) {
    return;
  }

  const normalizedEndpoint = analyticsEndpoint.replace(/\/+$/, "");
  const script = document.createElement("script");
  script.defer = true;
  script.src = `${normalizedEndpoint}/umami`;
  script.setAttribute("data-website-id", websiteId);
  document.head.appendChild(script);
}

injectAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
