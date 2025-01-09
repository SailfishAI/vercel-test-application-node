import { addOrUpdateMetadata, identify, setupInterceptors } from "@sailfish/sf-veritas-nextjs";

import dotenv from "dotenv";

// Load environment variables if needed
dotenv.config();

// Use a global variable to ensure setupInterceptors is only run once
if (!(globalThis as any).__interceptors_initialized__) {
  console.log("Initializing interceptors in middleware...");
  setupInterceptors({
    apiGraphqlEndpoint:
    apiKey: process.env.API_KEY || "75ebed9a-b0dc-4a45-bd80-30b1516d8016",
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
