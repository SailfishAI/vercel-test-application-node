// pages/_app.tsx
import type { AppProps } from "next/app";
import "../public/globals.css"; // Example global styles

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
