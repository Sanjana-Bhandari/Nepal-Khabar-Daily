import React from "react";
import nepaldailykhabar from "../assets/nepaldailykhabar.png";
import banner from "../assets/bannerimg.png";
import Navbar from "./Navbar";
import TopNewsBar from "./TopNewsBar";
import NepaliDateDisplay from "./NepaliDate";

const Header = () => {
  return (
    <header className="container-fluid p-0 m-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4 py-2">
        <div className="col-lg-3 flex items-center gap-2 lg:gap-3">
          <img src={nepaldailykhabar} alt="Nepal Daily Khabar" className="w-50 lg:w-32 hover:scale-105 transition-transform duration-300"/>
          <div className="flex flex-col text-sm">
            <NepaliDateDisplay />
            <div className="flex gap-1">
              <span className="text-red-600 font-bold">Nepal</span>
              <span className="text-black font-bold">Khabar</span>
              <span className="text-blue-600 font-bold">Daily</span>
            </div>
          </div>
        </div>
         <div className="col-lg-9 relative mt-2 lg:mt-0">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 rounded-lg">
      <h2 className="text-black text-lg md:text-xl font-semibold tracking-wide"> जनतासँगै, जनताका लागि</h2>
      <p className="text-red-200 text-sm md:text-base italic mt-1">नेपालको साझा खबर</p>
      <div className="w-16 h-0.5 bg-white mt-2 rounded-full"></div>
     </div>
     </div>
      </div>
      <Navbar />
    <TopNewsBar/>
    </header>
  );
};

export default Header;
