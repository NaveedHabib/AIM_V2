// _document.tsx
import HeaderComponent from "@/components/HeaderComponent";
import ScriptsComponents from "@/components/ScriptsComponents";


import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" translate="no">
      <Head>

        <link rel="icon" href="/favicon.ico" />
        <HeaderComponent />
        <link rel="preconnect" href="https://deliver.kontent.ai" crossOrigin="anonymous" />
        <Script
          src={`/assets/js/bootstrap.bundle.min.js`}
          strategy="afterInteractive"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


      </body>
    </Html>
  );
}
