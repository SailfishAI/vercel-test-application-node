import { setupInterceptors } from "@sailfish/sf-veritas-nextjs";

export default function initialize_server() {
  try {
    console.log("Initializing interceptors in middleware...");

    setupInterceptors({
      apiKey: "e66bfbc9-c069-4591-bac6-605b0116b7eb",
      apiGraphqlEndpoint: "http://localhost:8000/graphql/",
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
