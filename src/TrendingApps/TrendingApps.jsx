import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    fetch("/appDetails.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApps(data);
      });
  }, []);

  const formatNumber = (number) => {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + "B"; // Billion
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M"; // Million
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K"; // Thousand
    } else {
      return number.toString();
    }
  };

  return (
    <div className="p-3 sm:px-10 sm:py-10 inter bg-[#F5F5F5] flex flex-col gap-10">
      <div>
        <h1 className="text-3xl text-center font-bold">Trending Apps</h1>
        <p className="text-justify sm:text-center text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 sm:grid-rows-2 gap-4">
        {apps.slice(0, 8).map((app) => (
          <div
            key={app.id}
            className="p-4 bg-white rounded-lg gap-3 flex flex-col"
          >
            <div>
              <img src={app.image} className="w-80 rounded-lg" />
            </div>
            <div>
              <h2 className="text-lg font-medium">{app.title}</h2>
            </div>
            <div className="flex items-center justify-between h-full">
              <button className="px-2 py-1 bg-amber-500 rounded-md text-white border-none shadow-none flex items-center gap-2">
                <FiDownload />
                {formatNumber(app.downloads)}
              </button>
              <button className="px-2 py-1 bg-red-500 rounded-md text-white border-none shadow-none flex items-center gap-2">
                <FaStar />
                {app.ratingAvg}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-3 py-2 sm:px-10 sm:py-3 rounded-md mx-auto">
        <button className="text-white font-medium">Show All</button>
      </div>
    </div>
  );
};

export default TrendingApps;
