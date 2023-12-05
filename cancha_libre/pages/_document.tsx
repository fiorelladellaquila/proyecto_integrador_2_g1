import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html style={{ height: "100%" }}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Amiko&display=swap"
        />
        <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcnuzZZ7NFOoTSEtIrduLmTfRQb5dElzE&callback=console.debug&libraries=maps,marker&v=beta"
        ></script>
      </Head>
      <body style={{ height: "100%" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
