"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import("@sailfish/recorder")
      .then(({ startRecording }) => {
        startRecording({
          apiKey: "e66bfbc9-c069-4591-bac6-605b0116b7eb",
          backendApi: "http://localhost:8000",
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
      })
      .catch((error) => {
        console.error("[Frontend] Failed to load @sailfish/recorder:", error);
      });
  }, []);

  // Helper function to make API requests
  const fetchApi = async (url: string, times = 1) => {
    console.log(`[Frontend] Fetching data from ${url} ${times} times...`);
    const promises = Array.from({ length: times }, (_, index) =>
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            return response.text().then((text) => {
              throw new Error(
                `HTTP error! status: ${response.status}, response: ${text}`,
              );
            });
          }
          return response.json();
        })
        .then((data) =>
          console.log(
            `[Frontend] Response from ${url} request ${index + 1}:`,
            data,
          ),
        )
        .catch((error) =>
          console.error(
            `[Frontend] Error fetching ${url} request ${index + 1}:`,
            error,
          ),
        ),
    );
    await Promise.all(promises);
  };

  // Individual API functions for explicit testing
  const fetchHello = () => fetchApi("/api/hello", 20);
  const fetchUser = () => fetchApi("/api/user/123", 20);
  const fetchException = () => fetchApi("/api/exception", 1);

  return (
    <div>
      <h1>Next.js API Testing</h1>
      <p>Click the buttons below to test the API endpoints:</p>

      <button onClick={fetchHello}>Fetch Hello API</button>
      <button onClick={fetchUser}>Fetch User API</button>
      <button onClick={fetchException}>Fetch Exception API</button>

      <h2>Exception Testing</h2>
      <button onClick={() => fetchApi("/api/exceptions/db-connection", 1)}>
        DB Connection Error
      </button>
      <button onClick={() => fetchApi("/api/exceptions/foreign-key", 1)}>
        Foreign Key Error
      </button>
      <button onClick={() => fetchApi("/api/exceptions/non-existent", 1)}>
        Non-Existent Record
      </button>
      <button onClick={() => fetchApi("/api/exceptions/invalid-data", 1)}>
        Invalid Data Type
      </button>
      <button onClick={() => fetchApi("/api/exceptions/crash", 1)}>
        Manual Crash
      </button>
      <button onClick={() => fetchApi("/api/exceptions/unauthorized", 1)}>
        Unauthorized Request
      </button>
      <button onClick={() => fetchApi("/api/exceptions/db-disconnect", 1)}>
        DB Disconnection Error
      </button>
      <button onClick={() => fetchApi("/api/exceptions/external-api", 1)}>
        External API Failure
      </button>
    </div>
  );
}
