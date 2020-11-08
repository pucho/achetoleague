import { AppProps } from "next/dist/next-server/lib/router/router";

import "../css/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
