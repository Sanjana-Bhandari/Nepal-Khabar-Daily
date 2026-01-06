import React, { useEffect, useState } from "react";
import NepaliDate from "nepali-date-converter";

const NepaliDateDisplay = () => {
  const [date, setDate] = useState("");

  const days = [
    "आइतबार",
    "सोमबार",
    "मंगलबार",
    "बुधबार",
    "बिहीबार",
    "शुक्रबार",
    "शनिबार",
  ];

  const months = [
    "बैशाख","जेठ","असार","साउन","भदौ","असोज",
    "कार्तिक","मंसिर","पुष","माघ","फागुन","चैत",
  ];

  const updateDate = () => {
    const today = new Date();
    const nepDate = new NepaliDate(today);

    const day = days[nepDate.getDay()];
    const month = months[nepDate.getMonth()];
    const dateNum = nepDate.getDate();
    const year = nepDate.getYear();

    setDate(`${dateNum} ${month} ${year}, ${day}`);
  };
  useEffect(() => {
    updateDate();
    const interval = setInterval(updateDate, 60 * 1000); // auto refresh
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="text-gray-500 text-sm font-medium">{date}</span>
  );
};
export default NepaliDateDisplay;
