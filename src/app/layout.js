import "../styles/globals.css";
import Head from "next/head";
import Home from "./page";

export default function RootLayout() {
  return (
    <html lang="en">
      <Head>
        <title>Luis Ramirez</title>
      </Head>
      <body>
        <Home />
      </body>
    </html>
  );
}
