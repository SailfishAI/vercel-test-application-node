"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Start recording when the component is mounted
    import("@sailfish/recorder")
      .then(({ startRecording }) => {
        startRecording({
          apiKey: "e66bfbc9-c069-4591-bac6-605b0116b7eb",
          backendApi: "http://localhost:8000",
          // domainsToNotPropagateHeadersTo: [
          //   "google.com",
          //   "https://app.sailfishqa.com",
          //   "https://arxiv.org",
          //   "https://github.com",
          // ],
        });
      })
      .catch((error) => {
        console.error("[Frontend] Failed to load @sailfish/recorder:", error);
      });
  }, []);

  const fetchHello = async () => {
    console.log("[Frontend] Fetching data from /api/hello 20 times...");
    const promises = Array.from({ length: 20 }, (_, index) =>
      fetch("/api/hello")
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
            `[Frontend] Response from /api/hello request ${index + 1}:`,
            data,
          ),
        )
        .catch((error) =>
          console.error(
            `[Frontend] Error fetching /api/hello request ${index + 1}:`,
            error,
          ),
        ),
    );
    await Promise.all(promises);
  };

  const fetchUser = async () => {
    console.log("[Frontend] Fetching data from /api/user/123 20 times...");
    const promises = Array.from({ length: 20 }, (_, index) =>
      fetch("/api/user/123")
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
            `[Frontend] Response from /api/user/123 request ${index + 1}:`,
            data,
          ),
        )
        .catch((error) =>
          console.error(
            `[Frontend] Error fetching /api/user/123 request ${index + 1}:`,
            error,
          ),
        ),
    );
    await Promise.all(promises);
  };

  const fetchException = async () => {
    console.log("[Frontend] Fetching data from /api/exception 1 time...");
    const promises = Array.from({ length: 1 }, (_, index) =>
      fetch("/api/exception")
        .then((response) => {
          if (!response.ok) {
            return response.text().then();
          }
          return response.json();
        })
        .then((data) =>
          console.log(
            `[Frontend] Response from /api/exception request ${index + 1}:`,
            data,
          ),
        )
        .catch((error) =>
          console.error(
            `[Frontend] Error fetching /api/exception request ${index + 1}:`,
            error,
          ),
        ),
    );
    await Promise.all(promises);
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
