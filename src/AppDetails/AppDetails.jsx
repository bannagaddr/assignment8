import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdReviews } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const appDetails = useLoaderData();
  const { id } = useParams();
  const app = appDetails.find((item) => item.id === parseInt(id));

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

  //   install button function state
  const [isInstalled, setIsInstalled] = useState(false);

  return (
    <div className="p-3 sm:px-10 sm:py-10 inter w-full">
      <div className="flex items-center gap-4">
        <div>
          <img src={app.image} alt="" className="w-80" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div>
              <h3 className="mb-1 text-2xl font-semibold">{app.title}</h3>
              <h3 className="text-xs">
                Developed by <span>{app.companyName}</span>
              </h3>
            </div>
            <div className="divider md:w-210 sm:w-70"></div>
            <div className="flex items-center gap-5">
              <div className="flex items-start gap-2 flex-col">
                <FiDownload className="text-3xl text-[#632EE3]" />
                <h3 className="text-xs">Downloads </h3>
                <span className="text-2xl font-bold">
                  {formatNumber(app.downloads)}
                </span>
              </div>
              <div className="flex items-start gap-2 flex-col">
                <FaStar className="text-3xl text-[#632EE3]" />
                <h3 className="text-xs">Average Ratings </h3>
                <span className="text-2xl font-bold">{app.ratingAvg}</span>
              </div>
              <div className="flex items-start gap-2 flex-col">
                <MdReviews className="text-3xl text-[#632EE3]" />
                <h3 className="text-xs">Total Reviews </h3>
                <span className="text-2xl font-bold">
                  {formatNumber(app.reviews)}
                </span>
              </div>
            </div>
          </div>
          <div>
            <button
              className="btn btn-primary font-medium bg-[#00D390] border-none outline-none text-white
"
              onClick={() => setIsInstalled(true)}
              disabled={isInstalled}
            >
              {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <h3>Ratings</h3>
      </div>
      <div className="divider md:w-290 sm:w-70"></div>
      <div>
        <h3>Description:</h3>
        <p>{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
