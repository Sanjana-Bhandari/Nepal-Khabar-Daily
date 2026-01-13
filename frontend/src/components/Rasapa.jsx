import React from "react";

function RaswapaPage() {
  return (
    <div className="container">
    <div className="bg-gray-50 min-h-screen text-gray-800">

      {/* HERO */}
      <section className="bg-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            राष्ट्रिय स्वतन्त्र पार्टी
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            नयाँ सोच • नयाँ नेतृत्व • नयाँ नेपाल
          </p>
          <button className="bg-white text-red-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            अभियानमा सहभागी हुनुहोस्
          </button>
        </div>
      </section>
 
      


      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              रास्वपा के हो?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              राष्ट्रिय स्वतन्त्र पार्टी नेपालको राजनीतिमा
              पारदर्शिता, जवाफदेहिता र जनताको प्रत्यक्ष
              सहभागितालाई केन्द्रमा राख्ने नयाँ राजनीतिक शक्ति हो।
            </p>

            <ul className="space-y-3">
              <li> भ्रष्टाचारविरुद्ध शून्य सहनशीलता</li>
              <li> युवामैत्री र प्रविधिमैत्री शासन</li>
              <li> नतिजामुखी राजनीति</li>
            </ul>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              हाम्रो प्रतिबद्धता
            </h3>
            <p className="text-gray-600">
              जनताको विश्वास, जवाफदेही नेतृत्व,
              र परिणाम देखिने काम।
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-red-900 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              ["१००+", "नीतिगत प्रस्ताव"],
              ["७५+", "जिल्ला संगठन"],
              ["५ लाख+", "समर्थक"],
              ["१ लक्ष्य", "सुशासन"],
            ].map(([value, label], i) => (
              <div key={i} className=" p-6 rounded-xl border hover:shadow transition">
                <h3 className="text-3xl font-bold text-red-600">{value}</h3>
                <p className="text-white mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            मुख्य एजेन्डा
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "सुशासन",
              "शिक्षा सुधार",
              "स्वास्थ्य पहुँच",
              "रोजगार सिर्जना",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    

    

      {/* VISION */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            हाम्रो दृष्टिकोण
          </h2>
          <p className="text-gray-600 leading-relaxed">
            सक्षम राज्य, आत्मनिर्भर अर्थतन्त्र,
            र नागरिकमैत्री शासन प्रणाली।
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            परिवर्तनको हिस्सा बन्नुहोस्
          </h2>
          <p className="mb-8 opacity-90">
            जनतासँग • जनताका लागि • जनताद्वारा
          </p>
          <button className="bg-white text-red-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            आजै जोडिनुहोस्
          </button>
        </div>
      </section>

    </div>
    </div>
  );
}

export default RaswapaPage;
