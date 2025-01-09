"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Start recording when the component is mounted
    import("@sailfish/recorder")
      .then(({ startRecording }) => {
        startRecording({
          apiKey: "75ebed9a-b0dc-4a45-bd80-30b1516d8016",
        });
      })
      .catch((error) => {
        console.error("[Frontend] Failed to load @sailfish/recorder:", error);
      });
  }, []);

  const fetchHello = async () => {
    console.log("[Frontend] Fetching data from /api/hello...");
    try {
      const response = await fetch("/api/hello");
      const data = await response.json();
      console.log("[Frontend] Response from /api/hello:", data);
    } catch (error) {
      console.error("[Frontend] Error fetching /api/hello:", error);
    }
  };

  const fetchUser = async () => {
    console.log("[Frontend] Fetching data from /api/user/123...");
    try {
      const response = await fetch("/api/user/123");
      const data = await response.json();
      console.log("[Frontend] Response from /api/user/123:", data);
    } catch (error) {
      console.error("[Frontend] Error fetching /api/user/123:", error);
    }
  };

  const fetchException = async () => {
    console.log("[Frontend] Fetching data from /api/exception...");
    try {
      const response = await fetch("/api/exception");
      const data = await response.json();
      console.log("[Frontend] Response from /api/exception:", data);
    } catch (error) {
      console.error("[Frontend] Error fetching /api/exception:", error);
    }
  };

  return (
    <div>
      <h1>Next.js API Testing</h1>
      <p>Click the buttons below to test the API endpoints:</p>
      <button
        onClick={() => {
          console.log('[Frontend] "Fetch Hello API" button clicked');
          fetchHello();
        }}
      >
        Fetch Hello API
      </button>
      <button
        onClick={() => {
          console.log('[Frontend] "Fetch User API" button clicked');
          fetchUser();
        }}
      >
        Fetch User API
      </button>
      <button
        onClick={() => {
          console.log('[Frontend] "Fetch Exception" button clicked');
          fetchException();
        }}
      >
        Fetch Exception API
      </button>
    </div>
  );
}
