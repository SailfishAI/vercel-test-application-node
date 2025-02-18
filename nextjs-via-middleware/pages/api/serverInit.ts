import { setupInterceptors } from "@sailfish/sf-veritas-nextjs";

export default function initialize_server() {
  try {
    console.log("Initializing interceptors in middleware...");

    setupInterceptors({
      apiKey: "75ebed9a-b0dc-4a45-bd80-30b1516d8016",
      domainsToNotPropagateHeadersTo: [
        "google.com",
        "https://app.sailfishqa.com",
        "https://arxiv.org",
        "https://github.com",
        "http://localhost:3002/",
        "http://localhost:3000/",
        "http://localhost:8000/",
      ],
      serviceIdentifier: "nextjs-vercel-app",
      serviceVersion: "0.1.0",
    });
  } catch (error) {
    console.error("Error initializing interceptors:", error);
  }
}

// initialize_server()
