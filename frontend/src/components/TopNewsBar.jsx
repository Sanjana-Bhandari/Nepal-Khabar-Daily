import React from "react";
import { Link } from "react-router-dom";

function TopNewsBar() {
  const items = [
    { name: "निर्वाचन", path: "/nirwachan" },
    { name: "रास्वपा", path: "/raswapa" },
    { name: "बालने शाह", path: "/balen-shah" },
    { name: "रास्वपा–बालने सहमति", path: "/raswapa-balen" },
    { name: "नेपाली कांग्रेस", path: "/nepali-congress" },
    { name: "नेकपा", path: "/ncp" },
    { name: "राजनीति", path: "/politics" },
    { name: "उम्मेदवार सिफारिस", path: "/ummidwar-sifarish" },
    { name: "कुलमान घिसिङ", path: "/kulman-ghising" },
    { name: "निर्वाचन आयोग", path: "/election-commission" },
    { name: "रवि लामिछाने", path: "/rabi-lamichhane" },
  ];

  return (
    <section className="border-b border-gray-200">
      <div className="overflow-x-auto mx-5">
        <div className="flex gap-2.5 py-3 whitespace-nowrap">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="box border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopNewsBar;
