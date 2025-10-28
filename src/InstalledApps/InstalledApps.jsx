import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const TrendingApps = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(savedApps);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  const formatNumber = (number) => {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + "B";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    } else {
      return number.toString();
    }
  };

  return (
    <div className="p-3 sm:px-10 sm:py-10 inter bg-[#F5F5F5] flex flex-col gap-10">
      <div>
        <h1 className="text-3xl text-center font-bold">Your Installed Apps</h1>
        <p className="text-justify sm:text-center text-[#627382]">
          Explore all apps you have installed.
        </p>
      </div>

      {installedApps.length === 0 ? (
        <span></span>
      ) : (
        <div className="flex flex-col gap-6">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center justify-between">
                <div>
                  <img src={app.image} alt="" className="w-20" />
                </div>
                <div className="ml-3">
                  <h2 className="font-semibold text-lg text-start">
                    {app.title}
                  </h2>
                  <div className="flex justify-center gap-4 my-2">
                    <div className="flex items-center gap-1 text-xs">
                      <FiDownload /> {formatNumber(app.downloads)}
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <FaStar className="text-yellow-500" /> {app.ratingAvg}
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <h3>{app.size} MB</h3>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUninstall(app.id)}
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingApps;
