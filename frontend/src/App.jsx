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
import HealthPage from "./components/swasthya";
import ShareMarket from "./components/ShareMarket";
import NepaliCongress from "./components/NepaliCongress";
import Nekpa from "./components/Nekpa";
import Rajniti from "./components/Rajniti";
import UmmedwarSifarish from "./components/UmmedwarSifarish";
import KulmanGhising from "./components/KulmanGhising";
import NirvachanAayog from "./components/NirvachanAayog";
import RaswapaBalneSahamati from "./components/RaswapaBalneSahamati";

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
         <Route path="/share-market" element={<ShareMarket />} />
         <Route path="/swasthya" element={<HealthPage />} />
        <Route path="/nirwachan" element={<Nirwachan />} />
        <Route path="/raswapa" element={<Rasapa />} />
        {/* <Route path="/balen-shah" element={<Placeholder title="बालने शाह" />} /> */}
        <Route path="/raswapa-balen" element={<RaswapaBalneSahamati />} />
        <Route path="/nepali-congress" element={<NepaliCongress />} />
        <Route path="/ncp" element={<Nekpa/>} />
        <Route path="/politics" element={<Rajniti/>} />
        <Route path="/ummidwar-sifarish" element={<UmmedwarSifarish/>} />
        <Route path="/kulman-ghising" element={<KulmanGhising/>} />
        <Route path="/election-commission" element={<NirvachanAayog/>} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
