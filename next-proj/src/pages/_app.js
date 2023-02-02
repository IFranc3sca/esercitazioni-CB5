import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Gallery from "@/components/gallery/Gallery";

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Gallery />
    </>
  );
}

export default App;
