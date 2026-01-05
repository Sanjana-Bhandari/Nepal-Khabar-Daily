import React from "react";
import nepaldailykhabar from "./nepaldailykhabar.png";
import banner from "./bannerimg.png";

function Header() {
  return (
    <header className="p-0 m-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4 py-2">
        <div className="col-lg-3 flex items-center gap-2 lg:gap-3">
          <img src={nepaldailykhabar} alt="Nepal Daily Khabar" className="w-50 lg:w-32 hover:scale-105 transition-transform duration-300"/>
          <div className="flex flex-col text-sm">
            <span className="text-gray-500">२३ पुष २०८२, आइतबार</span>
            <div className="flex gap-1">
              <span className="text-red-600 font-bold">Nepal</span>
              <span className="text-black font-bold">Khabar</span>
              <span className="text-blue-600 font-bold">Daily</span>
            </div>
          </div>
        </div>
        <div className="col-lg-9 flex lg:justify-end mt-2 lg:mt-0">
          <img className="w-100 max-w-md hover:scale-105 transition-transform duration-300"src={banner}alt="Online Khabar Banner"/>
        </div>
      </div>
      <nav className="bg-blue-800">
        <div className="container mx-auto flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-5 py-2 font-semibold">
          <a href="#होमपेज" className="color pt-2">होमपेज</a>
          <a href="#सामाचार" className="nav-link pt-2"> सामाचार</a>
          <a href="#बिजनेस" className="nav-link pt-2">बिजनेस</a>
          <a href="#जीवनशैली" className="nav-link pt-2"> जीवनशैली</a>
          <a href="#मनोरंजन" className="nav-link pt-2">मनोरंजन</a>
          <a href="#विचार" className="nav-link pt-2">विचार</a>
          <a href="#खेलकुद" className="nav-link pt-2">खेलकुद</a>
          <a href="#अन्य" className="nav-link pt-2">अन्य</a>
         <a href="https://www.hamropatro.com" target="_blank" className="hp ml-26 bg-red-600 text-white px-2 py-2 rounded hover:bg-red-400 transition-colors flex items-center gap-1 cursor-pointer">
          <div><i className="bi bi-calendar2"></i> हाम्रो पात्रो</div>
        </a>
          <a href="#सेयर मार्केट" className="nav-link pt-1"><button className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-transparent hover:text-blue-600 transition-all duration-200"><i class="bi bi-bar-chart-line-fill"></i> सेयर मार्केट</button></a>
          <a href="# स्वास्थ्य" className="nav-link pt-1"><button className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-transparent hover:text-blue-600 transition-all duration-200"><i class="bi bi-hospital"></i> स्वास्थ्य</button></a>
          <a href="#EN" className="w-9 h-9 ml-2 flex items-center justify-center rounded-full  text-white text-xs font-semibold border border-gray-500">EN</a>
          <a href="" className="text-white" style={{ fontSize: "30px" }}><i class="bi bi-chevron-contract"></i></a>
          <a href="" className="text-white" style={{ fontSize: "30px" }}><i class="bi bi-person-circle"></i></a>
          <a href="" className="text-white  " style={{ fontSize: "30px" }}><i class="bi bi-list"></i></a>
        </div>
      </nav>
      <section className="border-b border-gray-200">
        <div className=" overflow-x-auto mx-5">
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
            ].map((item, index) => (<a key={index} href="#" className="box border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition">{item} </a>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid row py-4">
          <div className="col-lg-8">
            <img src="https://npcdn.ratopati.com/media/promo/1100x100_SXPYZRf5qw.gif" alt=""/>
           <div className="flex py-5 space-x-6">
           <div className="flex-1 relative pr-4">
            <div className=" border-b border-gray-200 pb-4 pt-2">
              <div className="row">
             <a href="" className="font-semibold text-lg nav-linkk"> चुनावी प्रचारमा कडाइ : राष्ट्रिय झन्डा १० वटाभन्दा बढी प्रयोग गर्न नपाइने</a>
             <div className="col-lg-6">
               <p className="mt-2">निर्वाचन आयोगले जारी गरेको आचारसंहिताअनुसार दल तथा उम्मेदवारले कार्यालयबाहेक सार्वजनिक स्थानमा कुनै डिजिटल बोर्ड, झन्डा वा चिन्ह राख्न नपाउने भएका छन् ।</p>
             </div>
            <div className="col-lg-6">
              <img src="https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/miscellaneous/flag-29122025081139-240x158.jpg" alt="" className="w-100 max-w-md hover:scale-105 transition-transform duration-300" />
            </div>
             </div>
           <div className="flex gap-6 mt-3 text-gray-700 text-sm">
           <button className="flex items-center gap-1 hover:text-blue-600" onClick={() => alert("संग्रह गरियो")}
           >
           <span> <i class="bi bi-bookmarks"></i> संग्रह</span></button>

           <button className="flex items-center gap-1 hover:text-blue-600" onClick={() => {
              if (navigator.share) {
               navigator.share({
                 title: document.title,
                 url: window.location.href,
              });
            } else {
               navigator.clipboard.writeText(window.location.href);
                alert("Link copy भयो");
            }
          }}
          >
          <span><i class="bi bi-share"></i> सेयर</span></button>
        </div>
           <div className="absolute top-0 right-0 h-full w-0.5 bg-gray-400"></div>
           </div>
            <div className=" border-b border-gray-200 pb-4 pt-3">
              <div className="row">
             <a href="" className="font-semibold text-lg nav-linkk"> रोकिएको छैन सेलिब्रिटीहरूको नाममा ‘स्क्याम’, सम्बन्धित निकाय मौन</a>
             <div className="col-lg-6">
               <p className="mt-2">रीमा विश्वकर्मा, अनमोल केसी, दयाहाङ राई लगायतका कलाकारको नाम/तस्बिर दुरुपयोग गरी फेक अकाउन्टबाट पैसा माग्ने घटना बढेपछि प्रहरी, दुरसञ्चार कम्पनी र चलचित्र विकास बोर्डले सचेत रहन आग्रह गरेका छन् ।</p>
             </div>
            <div className="col-lg-6">
              <img src="https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/rima-daya-anmol-29122025053657-240x158.jpg" alt="" className="w-100 max-w-md hover:scale-105 transition-transform duration-300" />
            </div>
             </div>
           <div className="flex gap-6 mt-3 text-gray-700 text-sm">
           <button className="flex items-center gap-1 hover:text-blue-600" onClick={() => alert("संग्रह गरियो")}
           >
           <span> <i class="bi bi-bookmarks"></i> संग्रह</span></button>
           <button className="flex items-center gap-1 hover:text-blue-600" onClick={() => {
              if (navigator.share) {
               navigator.share({
                 title: document.title,
                 url: window.location.href,
              });
            } else {
               navigator.clipboard.writeText(window.location.href);
                alert("Link copy भयो");
            }
          }}
          >
          <span><i class="bi bi-share"></i> सेयर</span></button>
        </div>
           <div className="absolute top-0 right-0 h-full w-0.5 bg-gray-400"></div>
           </div>
           </div>
            <div className="flex-1 border-b border-gray-300">
            <h3 className="font-semibold text-lg mb-2">समानुपातिकमा कांग्रेसभित्रै भागबण्डा : संस्थापनलाई ६० र इतर पक्षलाई ४० प्रतिशत</h3>
            <img src="https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/politics/nepalicongresscentralcommitteemeetingsanepa05-21112025024049-600x0.jpg" alt="" className="mb-2 w-full object-cover max-w-md hover:scale-105 transition-transform duration-300"/>
            <p> संस्थापन पक्षले ६० प्रतिशत राखेर इतरपक्षभित्र महामन्त्री गगन थापा र नेता शेखर कोइराला समूहलाई ४० प्रतिशत छुट्याइएको हो । संस्थापन पक्षभित्र पनि विभिन्न उपसमूह छन् ।</p>
            <div className="row">
              <div className="col-lg-6">
            <img src="https://i0.wp.com/www.imagekhabar.com/wp-content/uploads/2025/12/congress-4.jpg?resize=300%2C165&ssl=1" alt="" className="mb-2 w-64 h-auto object-cover "/>
            </div>
            <div className="col-lg-6">
              <p>नेता तथा कार्यकर्तामाथिको कारबाही फुकुवा गर्ने कांग्रेसकाे निर्णय (पत्रसहित)</p>
            </div>
            </div>
           </div>
         </div>
          <div className="row relative pt-3">
           <div className="col-lg-5">
           <div className="title">
            <span className="a">भर्खरै</span>
            <span className="a">ट्रेंडिंड.</span>
           </div>
            <div className="relative mt-6">
            <div className="border-b border-gray-400 w-[75%]">
              <h5 className="absolute -top-3 left-0  bg-white px-3 text-sm font-semibold">थप समाचार</h5><br/>
              <a href="" className="nav-linkk">विवाईडी डल्फिनको विश्वव्यापी बिक्री १० लाख नाघ्यो</a>
              <div className="row pt-2">
                <div className="col-lg-6 border-r-2 border-black"><a href="" className="nav-linkk">कान्तिपुर संवाददाता</a></div>
                <div className="col-lg-6"><p>मंसिर २९, २०८२</p></div>
              </div><br/>
            </div>
            <div className="border-b border-gray-400 w-[75%]">
              <h5 className="absolute -top-3 left-0  bg-white px-3 text-sm font-semibold">थप समाचार</h5><br/>
              <a href="" className="nav-linkk">टियागो ईभीमा मेडिकल प्रोफेशनलहरूका लागि विशेष अफर</a>
              <div className="row pt-2">
                <div className="col-lg-6 border-r-2 border-black"><a href="" className="nav-linkk">कान्तिपुर संवाददाता</a></div>
                <div className="col-lg-6"><p>मंसिर २९, २०८२</p></div>
              </div><br/>
            </div>
            <div className="border-b border-gray-400 w-[75%]">
              <h5 className="absolute -top-3 left-0  bg-white px-3 text-sm font-semibold">थप समाचार</h5><br/>
              <a href="" className="nav-linkk">पोखरामा केई र फोर्थिङ शोरुम</a>
              <div className="row pt-2">
                <div className="col-lg-6 border-r-2 border-black"><a href="" className="nav-linkk">कान्तिपुर संवाददाता</a></div>
                <div className="col-lg-6"><p>मंसिर २९, २०८२</p></div>
              </div><br/>
            </div>
            </div>
           </div>
           <div className="col-lg-3">
            <div className=" bg-white  shadow-md overflow-hidden">
              <img src="https://i0.wp.com/www.imagekhabar.com/wp-content/uploads/2025/09/Pakrau-Image-channel.jpg?fit=720%2C378&ssl=1" alt="News"className="w-full object-cover"/>
              <h5 className="h-42 pt-3 mx-2">एक महिलाको २७ लाख ठगी गरेकाे आराेपमा २ जना पक्राउ</h5>
            </div>
           </div>
           <div className="col-lg-4">
            <div className=" bg-white shadow-md overflow-hidden " >
              <img src="https://i0.wp.com/www.imagekhabar.com/wp-content/uploads/2025/12/ramesh-lekhak-1.jpg?fit=720%2C405&ssl=1" alt="News"className="w-full object-cover"/>
             <h5 className="h-28 pt-3 mx-2">तत्कालिन गृहमन्त्री लेखकले जाँचबुझ आयोगमा दिए बयान (पूर्णपाठ-सहित)</h5>
            </div>
           </div>
         </div>
          </div>
          <div className="col-lg-4">
            <div className="border border-gray-200 rounded-md p-4 bg-white mb-4">
              <h2 className="text-center font-semibold text-lg mb-3"> प्रतिनिधिसभा निर्वाचन २०८२</h2>
              <div className="bg-black text-white text-center py-4 rounded-md">
                <span className="text-red-600 text-3xl font-bold">६६</span>
                <span className="text-lg ml-2">दिन बाँकी</span>
              </div>
              <p className="text-center italic text-sm text-gray-600 mt-2">“Be Counted, Be Heard”</p>
            </div>
            <div className="bg-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-600 font-bold text-lg">ताजा अपडेट</span>
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="border-b border-gray-200 shadow-2xs pb-4 mb-4">
                <img src="https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/sports/running-pic-29122025084046-1000x0.jpg&w=401&h=0"alt="news"className="w-full rounded-md mb-3"/>
                <h3 className="font-semibold text-base mb-2 leading-snug">‘उत्कृष्ट महिला शिक्षकलाई मीना दिदी पुरस्कार’</h3>
                <div className="flex items-center gap-1 text-red-600 text-sm"><i className="bi bi-clock"></i>
                  <span>7 minutes ago</span>
                </div>
              </div>
              <div className="border-b-2 border-gray-200 pb-4 items-center gap-2 text-gray-600 text-sm">
              <h6  className="font-medium text-black">दाङमा धमाधम काम</h6>
              <span><i className="bi bi-clock"></i> 11 minutes ago</span>            
              </div>
              <div className="border-b-2 border-gray-200 pb-4 mb-4 py-4 items-center gap-2 text-gray-600 text-sm">
              <h6  className="font-medium text-black">थारु समुदायको सामर्थ्य सार्वजनिक गर्ने अमेरिकी टम</h6>
              <span><i className="bi bi-clock"></i> 13 minutes ago</span>            
              </div>
              <div className="border-b-2 border-gray-200 pb-4 items-center gap-2 text-gray-600 text-sm">
              <h6  className="font-medium text-black">सुनको मूल्य तोलामा ६ सय रुपैयाँले घट्यो, चाँदीमा किर्तिमानी कायमै</h6>
              <span><i className="bi bi-clock"></i> 17 minutes ago</span>            
              </div>
              <div className="border-b-2 border-gray-200 pb-4 mb-4 py-4 items-center gap-2 text-gray-600 text-sm">
              <h6  className="font-medium text-black">जनता समाजवादी पार्टीकी सह-अध्यक्ष रेणु यादव केन्द्रीय सदस्य सहित जसपा नेपालमा समाहित</h6>
              <span><i className="bi bi-clock"></i> 25 minutes ago</span>            
              </div>
              <div className="border-b-3 border-black-200 items-center gap-2"></div>
            </div>
          <div className="pt-4">
          <h4 className="nav-linkk">पूर्ण छात्रवृत्तिमा एमबीबीएस पढ्न सत्यनारायणले गरेको त्यो संघर्ष</h4>
          <img src="https://www.onlinekhabar.com/wp-content/uploads/2025/12/satyanarayan-safi.png" alt="" />
         </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row"> 
          <div className="col-lg-3 pt-4">
            <img src="https://assets-cdn.ekantipur.com/uploads/source/ads/250-x-250-new-1662025055302.gif" alt="" />
          </div>
           <div className="col-lg-3 pt-4">
            <img src="https://assets-cdn.ekantipur.com/uploads/source/ads/250x250-1-30112025114740.png" alt="" />
           </div>
             <div className="col-lg-3 pt-4">
              <img src="https://assets-cdn.ekantipur.com/uploads/source/ads/250px-x250px-30112025120704.gif" alt="" />
             </div>
             <div className="cart col-lg-3 pt-4">
              <iframe width="400" height="230" src="https://www.youtube.com/embed/XfV-g_Dyte8?si=fJ20SL8CLnEU7E1n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
      </section>
      <section className="container mx-auto py-6">
  <div className="border-b mb-4">
    <div className="flex gap-15 text-sm font-semibold text-gray-700">
      <span className="border-b-2 border-blue-600 text-blue-600 pb-2 cursor-pointer">प्रदेश</span>
      <span className="cursor-pointer hover:text-blue-600">कोशी</span>
      <span className="cursor-pointer hover:text-blue-600">मधेश</span>
      <span className="cursor-pointer hover:text-blue-600">बागमती</span>
      <span className="cursor-pointer hover:text-blue-600">गण्डकी</span>
      <span className="cursor-pointer hover:text-blue-600">लुम्बिनी</span>
      <span className="cursor-pointer hover:text-blue-600">कर्णाली</span>
      <span className="cursor-pointer hover:text-blue-600">सुदूरपश्चिम</span>
    </div>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="lg:col-span-2 relative">
      <img src="https://images.unsplash.com/photo-1604999333679-b86d54738315" alt="" className="w-100  object-cover hover:scale-105 transition-transform duration-300"/>
      <span className="absolute bottom-24 left-6 bg-red-600 text-white px-3 py-1 text-sm">गण्डकी</span>
      <h2 className="absolute bottom-8 left-6 right-6 text-white text-3xl font-bold leading-tight drop-shadow-lg"> मुस्ताङमा निर्माण भयो चक्रपथ सडक</h2>
    </div>
    <div>
      <h3 className="font-bold text-lg mb-4 flex items-center ml-16">सिफारिस</h3>
      <ul className="space-y-4 text-sm ml-16">
        <li className="border-b pb-3 hover:text-blue-600 cursor-pointer">प्रधानमन्त्रीको उम्मेदवार बनाउन रवि सहमत</li>
        <li className="border-b pb-3 hover:text-blue-600 cursor-pointer">ओलीका तीन सर्तपछि सरकार लचिलो</li>
        <li className="border-b pb-3 hover:text-blue-600 cursor-pointer">अमेरिका र चीनका राजदूत एकपटक फर्किए</li>
        <li className="border-b pb-3 hover:text-blue-600 cursor-pointer">इलामीले चर्चित अर्जुन भण्डारी</li>
        <li className="hover:text-blue-600 cursor-pointer">नेपालमा २ खर्ब ६५ अर्ब लगानी</li>
      </ul>   
    </div>
    </div>
  </section>
  <section className="container mx-auto py-6">
  <div className="flex items-center gap-4 mb-4">
    <span className="bg-red-600 text-white px-4 py-1 font-semibold">फिचर</span>
    <div className="flex-1 h-px bg-gray-300"></div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="relative group">
      <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df" alt="" className="w-full object-cover"/>
      <div className="absolute inset-0 bg-black/40"></div>
      <h5 className="absolute bottom-6 left-4 right-4 text-white text-lg font-bold leading-snug">पूर्वराष्ट्रपति भण्डारीले गरिन् सिंहदरबारको अवलोकन</h5>
    </div>
    <div className="relative group">
      <img src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf" alt="" className="w-full  object-cover"/>
      <div className="absolute inset-0 bg-black/40"></div>
      <h5 className="absolute bottom-6 left-4 right-4 text-white text-lg font-bold leading-snug">संरक्षणको पर्खाइमा काठमाडौंका पार्क (फोटो फिचर)</h5><i class="fa fa-html5" aria-hidden="true"></i>
    </div>
    <div className="relative group">
      <img src="https://www.setopati.com/uploads/posts/1579862742bhansar.jpg" alt="" className="w-full  object-cover"/>
      <div className="absolute inset-0 bg-black/40"></div>
      <h6 className="absolute bottom-6 left-4 right-4 text-white text-lg font-bold leading-snug">फाइल। मुख्य भन्सार कार्यालयका प्रमुखहरूमा हेरफेर- को, कहाँ पुगे?</h6>
    </div>
    <div className="relative group">
      <img src="https://images.unsplash.com/photo-1548013146-72479768bada" alt="" className="w-full object-cover"/>
      <div className="absolute inset-0 bg-black/40"></div>
      <h5 className="absolute bottom-6 left-4 right-4 text-white text-lg font-bold leading-snug">पशुपतिमा पूरै एक दिन नियाल्दा (फोटो फिचर)</h5>
    </div>
     </div>
   </section>
   <section>
    <div className="containetr-fluid">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/_c8y38joox4?si=8ZcPT_mvkFRpxiQh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
   </section>
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
      <div className="flex items-center gap-2 mb-4 ">
        <span className=" text-white px-2 py-1 font-bold"><img src="http://localhost:5173/src/nepaldailykhabar.png" alt="" className="w-24 rounded-full object-cover lg:w-32 hover:scale-105 transition-transform duration-300"/></span>
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
      <h4 className="text-white font-semibold mb-4">
        Department of<br/> News खबर Daily
      </h4>
      <div className="space-y-4 text-sm">
        <h6>“Designed & Developed by”</h6>
        <h6 className="ml-3 w-50 lg:w-32 hover:scale-105 transition-transform duration-300"><i class="bi bi-person-fill"></i> Sanjana Kumari</h6>
        <h6 className="ml-3 w-50 lg:w-32 hover:scale-105 transition-transform duration-300"><i class="bi bi-person-fill"></i> Diskhya Shrestha</h6>
      </div>
    </div>
  </div>
  <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
    ©2025 Nepal खबर Daily – News Portal of Nepal | Website by
    <span className="text-blue-500 ml-1">SD</span>
  </div>
  </footer>
    </header>
  );
}
export default Header;
