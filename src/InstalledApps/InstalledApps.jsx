import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import appNotFound from "../assets/App-Error.png";
import { Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TrendingApps = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(savedApps);
  }, []);

  const handleUninstall = (id) => {
    const app = installedApps.find((a) => a.id === id);

    const updated = installedApps.filter((a) => a.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));

    toast.info(`${app.title} Uninstalled.`);
  };

  const formatNumber = (number) => {
    if (number >= 1000000000) return (number / 1000000000).toFixed(1) + "B";
    if (number >= 1000000) return (number / 1000000).toFixed(1) + "M";
    if (number >= 1000) return (number / 1000).toFixed(1) + "K";
    return number.toString();
  };

  return (
    <div className="p-3 sm:px-10 sm:py-10 inter bg-[#F5F5F5] flex flex-col gap-10">
      <div>
        <h1 className="text-3xl text-center font-bold">Your Installed Apps</h1>
        <p className="sm:text-center text-[#627382] text-center">
          Explore all apps you have installed.
        </p>
      </div>

      {installedApps.length === 0 ? (
        <div className="p-3 sm:p-10 inter mx-auto flex items-center justify-center flex-col gap-5">
          <img src={appNotFound} alt="" className="w-70" />
          <p className="font-bold text-5xl">OPPS!! APP NOT FOUND</p>
          <p>The page you are looking for is not available.</p>
          <Link to="/all_application">
            <button className="btn btn-primary">Go Apps</button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl px-2 py-3 sm:p-4 flex items-center justify-between"
            >
              <div className="flex items-center justify-between">
                <div>
                  <img src={app.image} alt="" className="w-10 sm:w-20" />
                </div>
                <div className="ml-3">
                  <h2 className="font-semibold text-sm sm:text-lg text-start">
                    {app.title}
                  </h2>
                  <div className="flex justify-center gap-1 sm:gap-4 sm:my-2">
                    <div className="flex items-center gap-1 text-xs text-[#00D390]">
                      <FiDownload /> {formatNumber(app.downloads)}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#FF8811]">
                      <FaStar className="text-yellow-500" /> {app.ratingAvg}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#627382]">
                      <h3>{app.size} MB</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-xs sm:btn-md bg-[#00D390] text-white"
                  onClick={() => handleUninstall(app.id)}
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default TrendingApps;
