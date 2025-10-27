import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div className="p-3 sm:px-10 my-15 sm:p-0 sm:mb-0 flex flex-col gap-10 inter">
      <div>
        <p className="text-3xl/10 sm:text-5xl/15 font-bold text-center">
          <span>We Build</span> <br />{" "}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </p>
      </div>
      <div>
        <p className="text-justify sm:text-center text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
          <br className="hidden sm:block" /> Our goal is to turn your ideas into
          digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <button className="flex items-center gap-2 font-medium border border-[#D2D2D2] rounded-md px-3 py-2 sm:px-5 sm:py-3">
          <IoLogoGooglePlaystore className="text-2xl" />
          Google Play
        </button>
        <button className="flex items-center gap-2 font-medium border border-[#D2D2D2] rounded-md px-3 py-2 sm:px-5 sm:py-3">
          <FaAppStoreIos className="text-2xl" />
          App Store
        </button>
      </div>
      <div>
        <img src={hero} alt="" className="w-150 mx-auto" />
      </div>
    </div>
  );
};

export default Home;
