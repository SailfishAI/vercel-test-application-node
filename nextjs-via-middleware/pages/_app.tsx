// pages/_app.tsx
import type { AppProps } from "next/app";
import "../public/globals.css"; // Example global styles
import ClientInstrumentation from "../clientInstrumentation.tsx"; // Ensure correct import path

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <Component {...pageProps} />
        <ClientInstrumentation />
      </>
    );
}

export default MyApp;
