/**
 * Initializes instrumentation for both client-side (browser) and server-side (Node.js).
 *
 * - In **Node.js runtime**, it sets up API interceptors using `setupInterceptors()`
 * - In **browser (client-side)**, it starts event recording using `startRecording()`
 *
 * This ensures that:
 * - The correct logic runs based on the environment (client vs. server)
 * - There are no runtime errors in unsupported environments
 */


export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.log("[Instrumentation] Initializing server-side interceptors...");

    try {
      // Dynamically import to ensure it's only loaded in a Node.js environment
      const { setupInterceptors } = await import("@sailfish-ai/sf-veritas");

      setupInterceptors({
        apiKey: "75ebed9a-b0dc-4a45-bd80-30b1516d8016",
        nodeModulesToCollectLocalVariablesOn: [],
        serviceIdentifier:
          "sailfishai/vercel-test-application-node/sailfish/backend/instrumentation.ts",
        serviceVersion: "0.1.0",
      });

      console.log(
        "[Instrumentation] Server-side interceptors initialized successfully.",
      );
    } catch (error) {
      console.error(
        "[Instrumentation] Error importing setupInterceptors:",
        error,
      );
    }
  }
}