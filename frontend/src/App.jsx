import React from "react";
import Header from "./components/Header";
import TopNewsBar from "./components/TopNewsBar";
import MainNews from "./components/MainNews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TopNewsBar />
      <MainNews />
      <Footer />
    </div>
  );
}

export default App;
