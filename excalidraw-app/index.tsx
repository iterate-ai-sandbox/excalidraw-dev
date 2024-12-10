import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ExcalidrawApp from "./App";
import { registerSW } from "virtual:pwa-register";
import mixpanel from "mixpanel-browser";

import "../excalidraw-app/sentry";

// Initialize mixpanel
mixpanel.init(import.meta.env.VITE_APP_MIXPANEL_TOKEN, {
  debug: import.meta.env.DEV,
  track_pageview: false,
});

window.__EXCALIDRAW_SHA__ = import.meta.env.VITE_APP_GIT_SHA;
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
registerSW();
root.render(
  <StrictMode>
    <ExcalidrawApp />
  </StrictMode>,
);
