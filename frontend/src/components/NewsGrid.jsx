import React from "react";

const newsData = [
  {
    title: "फागुनमा घोषित चुनाव सुरु : मार्ग प्रवेश भएछ : एमाले नेता बास्कोटा",
    image: "https://nepalkhabar.prixacdn.net/media/albums/gokul-baskota_WucYTECyaU.jpg.370x245_q70_crop.jpg",
  },
  {
    title: "तीन डिग्री सेल्सियसमा झर्यो काठमाडौंको न्यूनतम तापक्रम",
    image: "https://nepalkhabar.prixacdn.net/media/albums/Ktm-chiso_WPy8veOOME.png.370x245_q70_crop.jpg",
  },
  {
    title: "मृत भेटियो वयस्क भाले हात्ती, मृत्युको कारण खुल्न बाँकी",
    image: "https://nepalkhabar.prixacdn.net/media/albums/Hatti-_YMLt7xiVF1.png.370x245_q70_crop.jpg",
  },
  {
    title: "भेनेजुएलाको राष्ट्रपतिविरुद्ध गोली चल्यो",
    image: "https://nepalkhabar.prixacdn.net/media/albums/Venezuela_Lgg6CvjqCn.jpg.370x245_q70_crop.jpg",
  },
  {
    title: "हिजो तोलामा १४ सय बढेको सुनको भाउ आज पनि व्यापक वृद्धि",
    image: "https://nepalkhabar.prixacdn.net/media/albums/gold-market-1_cOxfkyUIIw.jpg.370x245_q70_crop.jpg",
  },
  {
    title: "यस्ता छन् ओलीले जाँचबुझ आयोगलाई दिएको लिखित बयानका मुख्य ६ बुँदा",
    image: "https://nepalkhabar.prixacdn.net/media/albums/kp-oli_FrJ9hUAMQ7.jpg.370x245_q70_crop.jpg",
  },
  {
    title: "केन्द्रीय सदस्य उमेश यादवले छाडे प्रचण्ड नेतृत्वको नेकपा",
    image: "https://nepalkhabar.prixacdn.net/media/albums/Umesh-Yadav_Xv1HEEENRI.jpg.370x245_q70_crop.jpg",
  },
  {
    title: "वीरगञ्जमा कर्फ्यु दिउँसो १ बजेसम्मका लागि थप",
    image: "https://nepalkhabar.prixacdn.net/media/albums/birganj-1_2aNZQ561AO.jpg.370x245_q70_crop.jpg",
  },
];
function NewsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center mb-4">
        <span className="bg-blue-800 text-white px-4 py-1 font-extrabold"> खबर</span>
        <div className="flex-1 h-px bg-gray-300 ml-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsData.map((news, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"/>
            </div>
            <h5 className="mt-2 text-sm font-extrabold leading-snug text-gray-900 group-hover:text-blue-700">{news.title}</h5>
          </div>
        ))}
      </div>
      <div className="container pt-5">
        <img src="https://assets-cdn.ekantipur.com/uploads/source/ads/recurring-offer-970x120-31102025074059.gif" className="ml-25" alt="" />
      </div>
    </section>
  );
}
export default NewsGrid;
