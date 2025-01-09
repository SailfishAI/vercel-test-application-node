import { addOrUpdateMetadata, identify, setupInterceptors } from "@sailfish/sf-veritas-nextjs";

import dotenv from "dotenv";

// Load environment variables if needed
dotenv.config();

// Use a global variable to ensure setupInterceptors is only run once
if (!(globalThis as any).__interceptors_initialized__) {
  console.log("Initializing interceptors in middleware...");
  setupInterceptors({
    apiGraphqlEndpoint:
      process.env.API_GRAPHQL_ENDPOINT || "http://localhost:8000/graphql/",
    apiKey: process.env.API_KEY || "e66bfbc9-c069-4591-bac6-605b0116b7eb",
    domainsToNotPropagateHeadersTo: [
      "google.com",
      "https://app.sailfishqa.com",
      "https://arxiv.org",
      "https://github.com",
    ],
  });
  identify('user11');
  addOrUpdateMetadata('user11');
  (globalThis as any).__interceptors_initialized__ = true;
}
