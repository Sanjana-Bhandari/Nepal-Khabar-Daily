import React from "react";
import NewsCarousel from "./NewsCarousel";
import PressNotice from "./PressNotice";

function Nirwachan() {
  return (

    <div className="container p-2">
      <NewsCarousel/>
     <img className="w-full pt-3" src="https://npcdn.ratopati.com/media/promo/global-auto-loan-1140-x-90_Vnznjdtw2M.gif" alt="" />
     <img className="w-full pt-3" src="https://npcdn.ratopati.com/media/promo/desktop_1140x90_YOxeVdbSjf.gif" alt="" />
     <div className="shadow pt-4">
      <div className="row">
        <div className="col-md-8">
          <img src="https://npcdn.ratopati.com/media/news/drone-shots-of-congress-mahadhibesan_npl-(6)_cEpRZ3WF9J.jpg" alt="" />
        </div>
        <div className="col-md-4">
        <a className="nav-ling" href=""><h4 className="pt-25">८८ वर्षीय खड्काद्वारा कांग्रेस बन्दसत्रको अध्यक्षता</h4></a><br/>
        <small className="font-semibold pt-5">काठमाडौँ । नेपाली कांग्रेसको विशेष महाधिवेशन अन्तर्गत राजधानीको भृकुटीमण्डपमा बन्दसत्र सुरु भएको छ ।<br/> ८८ वर्षीय महाधिवेशन प्रतिनिधि श्याम कुमार खड्काको अध्यक्षतामा सोमबार बन्दसत्र सुरु भएको हो । यस्तै बन्दसत्रको कार्यक्रम...</small>
        </div>
      </div>
     </div>
     
      <div className="row pt-4">
      <div className="col-md-3">
        <img src="https://npcdn.ratopati.com/media/news/gagan-thapa_1ToCk3M1J1.jpg" alt="" />
        <small>देउवालाई गगनको आग्रह : विशेष महाधिवेशन पार्टीको कार्यक्रम हो, सहभागी हुनुस्</small>
      </div>
      <div className="col-md-3">
        <img src="https://npcdn.ratopati.com/media/news/gagan-prastab_56FWl3Dr5I.jpg" alt="" />
        <small>यस्ता छन् गगन थापाका १७ संकल्प</small>
      </div>
      <div className="col-md-3">
        <img src="https://npcdn.ratopati.com/media/news/gagan-thapa_Bx6hn7RwLh.jpg" alt="" />
        <small>विशेष महाधिवेशनबाट गगन थापा कांग्रेसको अन्तरिम सभापति बन्ने !</small>
      </div>
      <div className="col-md-3">
        <img src="https://npcdn.ratopati.com/media/promo/263x200@3x_WpbRP3gJSY.png" alt="" />
      </div>
     </div>
      <div className="row pt-2">
      <div className="col-md-3">
        <img src="https://npcdn.ratopati.com/media/news/banda-satra-(23)_u2dUfDpll7.jpg" alt="" />
        <small>प्रधानमन्त्री दुई पटकभन्दा बढी नबन्नेदेखि युवालाई ४० प्रतिशत आरक्षणसम्म : यस्तो छ महामन्त्री शर्माको प्रस्ताव (पूर्णपाठ)</small>
      </div>
      <div className="col-md-3">
        <img src="https://npcdn.ratopati.com/media/news/congress-banda-satra_naJMEbOLWj.jpg" alt="" />
        <small>कांग्रेसको विशेष महाधिवेशन कार्यविधि पारित, नयाँ नेतृत्व चयन गर्ने बाटो खुल्यो</small>
      </div>
      <div className="col-md-3">
        <img src="https://npcdn.ratopati.com/media/news/bishesh-mahadibeshan-(20)_JJWUIbkuJL.jpg" alt="" />
        <small>सुरु भयो कांग्रेस विशेष महाधिवेशनको बन्दसत्र</small>
      </div>
      <div className="col-md-3">
        <img src="https://npcdn.ratopati.com/media/promo/263-x-200_new_WyKj4427eC.gif" alt="" />
      </div>
     </div>
      <div className="row pt-3">
      <div className="col-md-3">
        <img className="" src="https://npcdn.ratopati.com/media/news/congress-bises-mahadhibesan-gagan-bishwo-prakash_xz03wPaTAG.jpg" alt="" />
        <small>गगन र विश्वप्रकाशसँग वार्ता गर्न खड्का र लेखकलाई जिम्मा</small>
      </div>
      <div className="col-md-3">
        <img src="https://npcdn.ratopati.com/media/news/omkar_lCvaz2PsQT.jpg" alt="" />
        <small>कांग्रेसको विशेष महाधिवेशन: ज्येष्ठ सदस्य ओमकारप्रसाद श्रेष्ठले बन्दसत्रको अध्यक्षता गर्ने</small>
      </div>
      <div className="col-md-3">
        <img src="https://www.onlinekhabar.com/wp-content/uploads/2025/12/Gif-SME-300x200pxl.gif" alt="" />
      </div>
      <div className="col-md-3">
        <img src="https://npcdn.ratopati.com/media/promo/yeti-ratopati-adsnw_XzLAeeXDsT.jpg" alt="" />
      </div>
     </div>
     <div className="py-4"> 
      <img className="w-full" src="https://nepalpress.com/wp-content/uploads/2025/10/1100x100-1.gif" alt="" />
     </div>
     <PressNotice />
    </div>
    
  );
}

export default Nirwachan;
