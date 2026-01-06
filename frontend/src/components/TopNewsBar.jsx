import React from "react";

function TopNewsBar() {
  return (
    <section className="border-b border-gray-200">
      <div className="overflow-x-auto mx-5">
        <div className="flex gap-2.5 py-3 whitespace-nowrap">
          {[
            "निर्वाचन",
            "रास्वपा",
            "बालने शाह",
            "रास्वपा–बालने सहमति",
            "नेपाली कांग्रेस",
            "नेकपा",
            "राजनीति",
            "उम्मेदवार सिफारिस",
            "कुलमान घिसिङ",
            "निर्वाचन आयोग",
            "रवि लामिछाने",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="box border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition"
            >{item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TopNewsBar;
