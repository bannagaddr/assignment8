import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdPlayArrow } from "react-icons/md";

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

  return (
    <div className="p-3 sm:px-10 sm:py-10 inter bg-[#F5F5F5] flex flex-col gap-10">
      <div>
        <h1 className="text-3xl text-center font-bold">Your Installed Apps</h1>
        <p className="text-justify sm:text-center text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="font-bold"> Apps Found</h3>
        <div>
          <button
            className="btn"
            popoverTarget="popover-1"
            style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
          >
            Sort By Size
            <MdPlayArrow className="text-lg" />
          </button>

          <ul
            className="dropdown menu w-35 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="popover-1"
            style={
              { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
            }
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex">
          <div>
            <img src={apps.image} alt="" />
          </div>
          <div>
            <div>
              <h2>{apps.title}</h2>
            </div>
            <div className="flex items-center justify-between">
              <button className="px-2 py-1 bg-amber-500 rounded-md text-white border-none shadow-none flex items-center gap-2">
                <FiDownload />
                {}
              </button>
              <button className="px-2 py-1 bg-red-500 rounded-md text-white border-none shadow-none flex items-center gap-2">
                <FaStar />
                {}
              </button>
              <button className="px-2 py-1 bg-red-500 rounded-md text-white border-none shadow-none flex items-center gap-2">
                {/* application size */}
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-3 py-2 sm:px-5 sm:py-3 rounded-md btn">
          <button className="text-white font-medium">Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
