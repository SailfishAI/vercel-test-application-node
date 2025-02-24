"use client";

import { useEffect } from "react";

export default function ClientInstrumentation() {
  useEffect(() => {
    console.log(
      "[Instrumentation] Initializing client-side event recording...",
    );

    import("@sailfish/recorder")
      .then(({ startRecording }) => {
        startRecording({
          apiKey: "75ebed9a-b0dc-4a45-bd80-30b1516d8016",
          backendApi: "localhost:8000",
          domainsToNotPropagateHeaderTo: [
            "google.com",
            "https://app.sailfishqa.com",
            "https://arxiv.org",
            "https://github.com",
            "http://localhost:3002/",
            "http://localhost:3000/",
            "http://localhost:8000/",
          ],
        });
        console.log("[Instrumentation] Client-side event recording started.");
      })
      .catch((error) => {
        console.error(
          "[Instrumentation] Failed to load @sailfish/recorder:",
          error,
        );
      });
  }, []);

  return null; // This component does not render any UI
}
