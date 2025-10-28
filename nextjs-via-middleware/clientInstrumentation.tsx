"use client";

import { useEffect } from "react";

export default function ClientInstrumentation() {
  useEffect(() => {
    console.log(
      "[Instrumentation] Initializing client-side event recording...",
    );

    import("@sailfish-ai/recorder")
      .then(({ initRecorder }) => {
        initRecorder({
          apiKey: "d9e011db-8bec-4715-a45b-162892bd91e7",
          backendApi: "http://localhost:8000",
          domainsToNotPropagateHeaderTo: [
            "google.com",
            "https://app.sailfishqa.com",
            "https://arxiv.org",
            "https://github.com",
            // "http://localhost:3002/",
            "http://localhost:3000/",
            "http://localhost:8000/",
          ],
        });
        console.log("[Instrumentation] Client-side event recording started.");
      })
      .catch((error) => {
        console.error(
          "[Instrumentation] Failed to load @sailfish-ai/recorder:",
          error,
        );
      });
  }, []);

  return null; // This component does not render any UI
}
