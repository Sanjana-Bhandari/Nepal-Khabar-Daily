import React from "react";

export default function LifeStyleSection() {
  const videos = [
    {
      title: "चिसोमा यस्ता",
      youtubeId: "PgwWDCTJxwQ",
    },
    {
      title: "जाडोमा किन बढी हुन्छ",
      youtubeId: "45_LzjRppxs",
    },
    {
      title: "एक घन्टामै अस्पताल पुग्दा",
      youtubeId: "HYH6_NSa2rk",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center mb-4">
        <span className="bg-blue-700 text-white px-4 py-1 font-bold">जीवनशैली</span>
      </div>
      <div className="mb-8 relative w-full h-70 rounded-lg overflow-hidden">
        <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/PgfNaP4HSXg" title="Main Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
            <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${video.youtubeId}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
            <p className="mt-2 font-bold text-sm text-center">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
