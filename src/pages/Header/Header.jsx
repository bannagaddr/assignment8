import React from "react";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="p-3 sm:px-10 sm:py-5 border-b-2 border-[#f4f4f4cb] flex items-center justify-between inter">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="w-10" />
        <h2 className="font-semibold">HERO.IO</h2>
      </div>
      <div className="hidden sm:block">
        <ul className="flex gap-5">
          <li className="font-semibold hover:underline hover:decoration-[#9F62F2] hover:decoration-2 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent">
            <Link to="/home">Home</Link>
          </li>
          <li className="font-semibold hover:underline hover:decoration-[#9F62F2] hover:decoration-2 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent">
            <Link to="/all_application">Apps</Link>
          </li>
          <li className="font-semibold hover:underline hover:decoration-[#9F62F2] hover:decoration-2 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent">
            <Link to="/installed_apps">Installation</Link>
          </li>
        </ul>
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-3 py-2 sm:px-5 sm:py-3 rounded-md">
        <button className="flex items-center gap-2 text-white font-medium">
          <FaGithub className="text-lg" />
          Contribute
        </button>
      </div>
    </div>
  );
};

export default Header;
