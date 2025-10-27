import React from "react";

const Rating = () => {
  return (
    <div className="py-10 sm:py-15 sm:px-50 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex flex-col gap-10 inter">
      <div>
        <h2 className="text-3xl text-center font-bold">
          Trusted by Millions, Built for You
        </h2>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-between gap-10 text-center">
        <div className="flex flex-col gap-3">
          <span>Total Downloads</span>
          <span className="text-5xl font-bold">29.6M</span>
          <span>21% more than last month</span>
        </div>
        <div className="flex flex-col gap-3">
          <span>Total Reviews</span>
          <span className="text-5xl font-bold">906K</span>
          <span>46% more than last month</span>
        </div>
        <div className="flex flex-col gap-3">
          <span>Active Apps</span>
          <span className="text-5xl font-bold">132+</span>
          <span>31 more will Launch</span>
        </div>
      </div>
    </div>
  );
};

export default Rating;
