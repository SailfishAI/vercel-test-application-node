import {
  setupInterceptors,
} from "@sailfish/sf-veritas-nextjs";

// Ensure interceptors are only initialized once
// if (!(globalThis as any).__interceptors_initialized__) {
  console.log("Initializing interceptors in middleware...");

  // try {
    // Cast each imported member to 'any' so that we can call them with 'new'
    setupInterceptors({
      apiKey: "e66bfbc9-c069-4591-bac6-605b0116b7eb",
      apiGraphqlEndpoint: "http://localhost:8000/graphql/",
      domainsToNotPropagateHeadersTo: [
        "google.com",
        "https://app.sailfishqa.com",
        "https://arxiv.org",
        "https://github.com",
      ],
    });
    // new (identify as any)("user11");
    // new (addOrUpdateMetadata as any)("user11");

  //   (globalThis as any).__interceptors_initialized__ = true;
  // } catch (error) {
  //   console.error("Error initializing interceptors:", error);
  // }
// }
