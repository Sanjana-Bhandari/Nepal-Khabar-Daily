import React from "react";

function NewsLayout() {
  return (
    <div className="container py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <span className="text-blue-600 font-semibold text-xl"> विश्व</span>
          <a href="" className="nav-linng"><h3 className="text-3xl md:text-4xl font-bold mt-2"> विद्युतीय गाडी बिक्रीमा बीवाइडीले टेस्लालाई उछिन्यो </h3></a>
          <p className="text-gray-600 mt-4 leading-relaxed"> विश्वमा सर्वाधिक विद्युतीय गाडी बिक्रीका रूपमा चिनियाँ कम्पनी ‘बीवाइडी’ ले अमेरिकी कम्पनी ‘टेस्ला’लाई उछिनेको छ।</p>
          <p className="text-sm text-red-500 mt-6"> नेपालको संवाददाता | पुष २०, २०८१</p>
        </div>
        <div className="w-full">
          <img src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a" alt="Electric car exhibition" className="w-full h-[320px] md:h-[380px] object-cover rounded-md"/>
        </div>
      </div>
    </div>
    
  );
}

export default NewsLayout;