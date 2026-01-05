import React from "react";

const newsData = [
  {
    title: "चुनावी प्रचारमा कडाइ : राष्ट्रिय झन्डा १० वटाभन्दा बढी प्रयोग गर्न नपाइने",
    desc: "निर्वाचन आयोगले जारी गरेको आचारसंहिताअनुसार...",
    img: "https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/miscellaneous/flag-29122025081139-240x158.jpg"
  },
  {
    title: "रोकेको छैन सेलिब्रिटीहरूको नाममा ‘स्क्याम’, सम्बन्धित निकाय मौन",
    desc: "रीमा विश्वकर्मा, अनमोल केसी, दयाहाङ राई लगायतका कलाकारको नाम/तस्बिर दुरुपयोग...",
    img: "https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/rima-daya-anmol-29122025053657-240x158.jpg"
  }
];

const MainNews = () => {
  return (
    <section className="container mx-auto py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {newsData.map((news, index) => (
          <div key={index} className="flex flex-col border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-lg">{news.title}</h3>
            <p className="mt-2">{news.desc}</p>
            <img src={news.img} alt={news.title} className="w-full max-w-md mt-2 hover:scale-105 transition-transform duration-300"/>
          </div>
        ))}
      </div>
    </section>
  );
};


export default MainNews;
