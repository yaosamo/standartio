import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return;
  <>
    <Component {...pageProps} />
    <Analytics />
  </>;
}

export default MyApp;
