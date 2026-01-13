import React from "react";
import nepaldailykhabar from "../assets/nepaldailykhabar.png";

const Footer = () => {
  return (
<footer className="bg-black from-[#1c1c1c] to-black text-gray-300 mt-10">
  <div className="container mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center border-b border-gray-700">
    <h3 className="text-3xl font-bold text-white">Nepal खबर Daily</h3>
    <div className="flex items-center gap-4 mt-4 lg:mt-0">
      <span className="text-sm text-white font-semibold">Follow us:</span>
      <div className="flex gap-2">
      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white  hover:scale-105 transition-transform duration-300"><i class="bi bi-twitter"></i></span>
      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white  hover:scale-105 transition-transform duration-300"><i class="bi bi-telephone-minus-fill"></i></span>
      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-105 transition-transform duration-300"><i class="bi bi-facebook"></i></span>
      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-red-600 text-white  hover:scale-105 transition-transform duration-300"><i class="bi bi-youtube"></i></span>
      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-green-600 text-white hover:scale-105 transition-transform duration-300"><i class="bi bi-whatsapp"></i></span>
      </div>
    </div>
  </div>
  <div className="container row mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="col-lg-3" >
      <div className="flex items-center gap-2 mb-2">
        <span className=" text-white py-1 font-bold"><img src="http://localhost:5173/src/assets/nepaldailykhabar.png" alt="" className="w-20 rounded-full object-cover lg:w-15 hover:scale-105 transition-transform duration-300"/></span>
        <span className="text-white text-xl font-bold">nepalkhabardaily.com</span>
      </div>
      <h5 className="text-white font-semibold mb-2 w-50 lg:w-32 hover:scale-105 transition-transform duration-300">CONTACT</h5>
      <p className="text-sm mt-2">Department of News Khabar Daily</p>
      <p className="text-sm">Chandol Road</p>
      <p className="text-sm">Kathmandu Nepal</p>
      <p className="text-sm mt-2">ई-मेल:</p>
      <p className="text-sm">napalkhabardaily@gmail.com</p>
    </div>
    <div className="col-lg-4"></div>
     <div className="col-lg-4 pt-4">
      <h4 className="text-white font-semibold mb-4"> Department of<br/> News खबर Daily</h4>
      <div className="space-y-4 text-sm">
        <h6>“Designed & Developed by”</h6>
        <h6 className="ml-3 w-50 lg:w-32 hover:scale-105 transition-transform duration-300"><i class="bi bi-person-fill"></i> Sanjana Kumari</h6>
        <h6 className="ml-3 w-50 lg:w-32 hover:scale-105 transition-transform duration-300"><i class="bi bi-person-fill"></i> Dikshya Shrestha</h6>
      </div>
    </div>
  </div>
  <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400"> ©2025 Nepal खबर Daily – News Portal of Nepal | Website by
    <span className="text-blue-500 ml-1">SD</span>
  </div>
</footer>
  );
};
export default Footer;
