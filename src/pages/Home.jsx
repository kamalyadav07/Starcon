import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingButtons from "../components/layout/FloatingButtons";
import Hero from "../components/home/Hero";
import ScrollTop from "../components/layout/ScrollTop";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Navbar />
      <FloatingButtons />
      <Hero />
      <Helmet>
        <title>Starcon Infra Projects</title>
        <meta
          name="description"
          content="Starcon Infra Projects India Private Limited"
        />
      </Helmet>
      <ScrollTop />
      <Footer />
    </>
  );
}

export default Home;
