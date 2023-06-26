import Head from "next/head";
import Nav from "../components/Nav";
import "../styles/globals.css";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />

        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
