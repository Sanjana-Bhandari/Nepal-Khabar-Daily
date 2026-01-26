import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
     <nav className="bg-blue-800">
        <div className="container mx-auto flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-5 py-2 font-semibold">
          <a href="/" className="color pt-2">होमपेज</a>
          <div className="relative group">
          <div className="pt-2 nav-link">राजनीति</div>
      <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black shadow-lg w-64 z-50">
     <ul className="py-2">
      <li><Link to="/party/nekpa-emale" className="nav-linked dropdown-link">नेकपा एमाले</Link></li>
      <li><Link to="/party/nepali-congress" className="nav-linked dropdown-link">नेपाली कांग्रेस</Link></li>
      <li><Link to="/party/nekpa" className="nav-linked dropdown-link">नेकपा</Link></li>
      <li><Link to="/party/rsp" className="nav-linked dropdown-link">राष्ट्रिय स्वतन्त्र पार्टी</Link></li>
      <li><Link to="/party/jaspa" className="nav-linked dropdown-link">जसपा नेपाल</Link></li>
      <li><Link to="/party/nup" className="nav-linked dropdown-link">नागरिक उन्मुक्ति पार्टी</Link></li>
      <li><Link to="/party/janmat" className="nav-linked dropdown-link">जनमत पार्टी</Link></li>
      <li><Link to="/party/raprapa" className="nav-linked dropdown-link">राप्रपा</Link></li>
    </ul>
    </div>
    </div>
          <a href="#बिजनेस" className="nav-link pt-2">बिजनेस</a>
          <a href="#जीवनशैली" className="nav-link pt-2"> जीवनशैली</a>
          <a href="#मनोरंजन" className="nav-link pt-2">मनोरंजन</a>
          <a href="#विचार" className="nav-link pt-2">विचार</a>
          <a href="#खेलकुद" className="nav-link pt-2">खेलकुद</a>
          <a href="#अन्य" className="nav-link pt-2">अन्य</a>
         <a href="https://www.hamropatro.com" target="_blank" className="hp ml-26 bg-red-600 text-white px-2 py-2 rounded hover:bg-red-400 transition-colors flex items-center gap-1 cursor-pointer">
          <div><i className="bi bi-calendar2"></i>हाम्रो पात्रो</div>
        </a>
          <a href="/#/share-market" className="nav-link pt-1"><button className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-transparent hover:text-blue-600 transition-all duration-200"><i class="bi bi-bar-chart-line-fill"></i> सेयर मार्केट</button></a>
          <a href="/#/swasthya" className="nav-link pt-1"><button className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-transparent hover:text-blue-600 transition-all duration-200"><i class="bi bi-hospital"></i> स्वास्थ्य</button></a>
          <a href="#EN" className="w-9 h-9 ml-2 flex items-center justify-center rounded-full  text-white text-xs font-semibold border border-gray-500">EN</a>
          <a href="" className="text-white" style={{ fontSize: "30px" }}><i class="bi bi-chevron-contract"></i></a>
          <a href="" className="text-white" style={{ fontSize: "30px" }}><i class="bi bi-person-circle"></i></a>
          <a href="" className="text-white  " style={{ fontSize: "30px" }}><i class="bi bi-list"></i></a>
        </div>
      </nav>
  );
};

export default Navbar;
