import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="p-3 sm:p-5 sm:px-10 inter flex flex-col gap-5 bg-black text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <NavLink to="/hero.io" className="flex items-center gap-2">
            <img src={logo} alt="" className="w-7 sm:w-10" />
            <h2 className="text-base font-semibold">HERO.IO</h2>
          </NavLink>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h3>Social Links</h3>
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <FaSquareXTwitter />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-[#f7f7f726]"></div>
      <div className="mx-auto">
        <p>Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
