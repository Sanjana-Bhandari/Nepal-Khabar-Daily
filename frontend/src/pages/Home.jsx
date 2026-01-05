import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TopNewsBar from "../components/TopNewsBar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Navbar />        {/* समाचार वाला navbar */}
      <TopNewsBar />    {/* 👈 निर्वाचन strip (FINAL place) */}
      <MainContent />
      <Footer />
    </>
  );
}

export default HomePage;
