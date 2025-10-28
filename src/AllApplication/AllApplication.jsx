import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link, useLoaderData } from "react-router";

const AllApplication = () => {
  const appData = useLoaderData();
  // console.log(appData);

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
        <h1 className="text-3xl text-center font-bold">Our All Applications</h1>
        <p className="text-justify sm:text-center text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
        <div>
          <h3 className="font-bold">({appData.length}) Apps Found</h3>
        </div>
        <div className="flex items-center gap-2 border-2 border-gray-300 p-2 rounded-md">
          <CiSearch className="text-lg" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Apps"
            className="border-none outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-4">
        {appData.map((app) => (
          <Link
            to={`/app/${app.id}`}
            key={app.id}
            className="p-4 bg-white rounded-lg gap-3 flex flex-col"
          >
            <div>
              <img src={app.image} className="w-80 rounded-lg" />
            </div>
            <div>
              <h2 className="text-lg font-medium">{app.title}</h2>
            </div>
            <div className="flex items-center justify-between">
              <button className="px-2 py-1 bg-amber-500 rounded-md text-white border-none shadow-none flex items-center gap-2">
                <FiDownload />
                {formatNumber(app.downloads)}
              </button>
              <button className="px-2 py-1 bg-red-500 rounded-md text-white border-none shadow-none flex items-center gap-2">
                <FaStar />
                {app.ratingAvg}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllApplication;
