import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainNews from "./components/MainNews";
import Footer from "./components/Footer";
import NewsGrid from "./components/NewsGrid";
import LifeStyleSection from "./components/LifeStyleSection";
import TodayPhotos from "./components/TodayPhotos";
import Nirwachan from "./components/ElectionPage";
import Rasapa from "./components/Rasapa";
import Hero from "./components/Hero";
import NewsLayout from "./components/Newslayout";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
            <Hero/>
            <NewsLayout/>
            
              <MainNews />
              <NewsGrid />
              <LifeStyleSection />
              <TodayPhotos />
            </>
          }
        />
        <Route path="/nirwachan" element={<Nirwachan />} />
        <Route path="/raswapa" element={<Rasapa />} />
        {/* <Route path="/balen-shah" element={<Placeholder title="बालने शाह" />} />
        <Route path="/raswapa-balen" element={<Pla ceholder title="रास्वपा–बालने सहमति" />} />
        <Route path="/nepali-congress" element={<Placeholder title="नेपाली कांग्रेस" />} />
        <Route path="/ncp" element={<Placeholder title="नेकपा" />} />
        <Route path="/politics" element={<Placeholder title="राजनीति" />} />
        <Route path="/ummidwar-sifarish" element={<Placeholder title="उम्मेदवार सिफारिस" />} />
        <Route path="/kulman-ghising" element={<Placeholder title="कुलमान घिसिङ" />} />
        <Route path="/election-commission" element={<Placeholder title="निर्वाचन आयोग" />} />
        <Route path="/rabi-lamichhane" element={<Placeholder title="रवि लामिछाने" />} /> */}
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
