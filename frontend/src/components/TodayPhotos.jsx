import React, { useState } from "react";

export default function TodayPhotos() {
  const images = [
    {
      src: "https://www.setopati.com/uploads/posts/JG-Gulmi-IMG_2720-copy-1767360400.jpg",
      caption: "भास्मा बौद्ध स्तूप । गुल्मीको सत्यवती गाउँपालिका–८ भास्रिका भारे डाँडामा स्थानीयको सहयोगमा पर्यटन प्रवर्द्धनका लागि दुई करोड ५० लाखको लागतमा निर्माण गरिएको बौद्ध स्तूप।",
      credit: "तस्वीर : जनार्दन घिमिरे/रासस",
    },
    {
      src: "https://www.setopati.com/uploads/posts/SundarkumarThakali-Mustang-18DSC08233copy-copy-1767360401.jpg",
      caption: " मुस्ताङको वारागुङ मुक्तिक्षेत्र गाउँपालिका–१ स्थित मुक्तिनाथ रानीपौवा बजार र आसपासका हिमशृङ्खला। तस्बिरः सुन्दरकुमार थकाली/रासस",
      credit: "तस्वीर : राम कृष्ण शर्मा",
    },
    {
      src: "https://www.setopati.com/uploads/posts/KD_Kaski-2-copy-1767360400.jpg",
      caption: "पोखरामा फेवातालको सुन्दर दृश्य। पर्यटकहरू पोखरा भ्रमण गर्दै।",
      credit: "तस्वीर : सिता श्रेष्ठ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-4 border-b border-gray-300 pb-2">
        <h4 className="text-2xl font-extrabold text-green-700">आजका तस्वीरहरू</h4>
      </div>
      <div className="relative w-full overflow-hidden rounded-lg">
        <img src={images[currentIndex].src}  alt={`Slide ${currentIndex + 1}`} className="w-full h-[420px] object-cover transition-all duration-500"/>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60">❮</button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60">❯</button>
      </div>
      <div className="mt-4 text-center text-gray-800 leading-relaxed">
        <p>{images[currentIndex].caption}</p>
        <p className="mt-2 text-sm text-gray-600">{images[currentIndex].credit}</p>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, idx) => (
          <span key={idx} className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-green-700" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}
