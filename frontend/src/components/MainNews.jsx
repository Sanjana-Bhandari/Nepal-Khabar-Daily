import React from "react";

const newsData = [
  {
    title: "कुहिरो र हुस्सुले ढाकिएको दमक, जनजीवन कष्टकर (तस्वीरहरू)",
    desc: "",
    img: "https://www.onlinekhabar.com/wp-content/uploads/2026/01/damal-hussu-1230.jpg",
  },
  {
    title: "वीरगन्जमा कर्फ्यु दिउँसो १ बजेसम्मका लागि थप",
    desc: "",
    img: "https://nepalkhabar.prixacdn.net/media/albums/birganj-1_2aNZQ561AO.jpg"
  },
  {
    title: "तीन डिग्री सेल्सियसमा झर्‍यो काठमाडौँको न्यूनतम तापक्रम",
    desc: "",
    img: "https://nepalkhabar.prixacdn.net/media/albums/Ktm-chiso_WPy8veOOME.png.870x522_q100_crop.jpg"
  }
];
const MainNews = () => {
  return (
    <section className="container py-3">
       <div className="flex items-center mb-4">
        <span className="bg-red-800 text-white px-4 py-1 font-extrabold">मौसम</span>
        <div className="flex-1 h-px bg-gray-300 ml-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{newsData.map((news, index) => (
          <div key={index} className="flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300" >
            <img src={news.img} alt={news.title} className="w-full h-48 md:h-52 lg:h-56 object-cover transition-transform duration-300 hover:scale-105"/>
            <h5 className="font-bold text-lg mt-2 px-3"> {news.title} </h5>
            {news.desc && (
              <p className="text-gray-600 text-sm mt-1 px-3 mb-3"> {news.desc}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default MainNews;
