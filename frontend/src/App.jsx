import React from "react";
import Header from "./components/Header";
import MainNews from "./components/MainNews";
import Footer from "./components/Footer";
import NewsGrid from "./components/NewsGrid";
import LifeStyleSection from "./components/LifeStyleSection";
import TodayPhotos from "./components/TodayPhotos";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainNews />
      <NewsGrid />
      <LifeStyleSection />
      <TodayPhotos />
      <Footer />
      
    </div>
  );
}

export default App;
