import React from "react";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="px-3 py-4 sm:px-10 sm:py-5 border-b-2 border-[#f4f4f4cb] flex items-center justify-between inter">
      {/* mobile menu */}
      <div className="dropdown sm:hidden">
        <div tabIndex={0} role="button" className="btn btn-sm mr-2">
          <IoMenuSharp />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
        >
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `font-semibold transition-all ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline decoration-[#9F62F2] decoration-2"
                    : "hover:underline hover:decoration-[#9F62F2] hover:decoration-2 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/all_application"
              className={({ isActive }) =>
                `font-semibold transition-all ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline decoration-[#9F62F2] decoration-2"
                    : "hover:underline hover:decoration-[#9F62F2] hover:decoration-2 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
                }`
              }
            >
              Apps
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/installed_apps"
              className={({ isActive }) =>
                `font-semibold transition-all ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline decoration-[#9F62F2] decoration-2"
                    : "hover:underline hover:decoration-[#9F62F2] hover:decoration-2 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
                }`
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <NavLink to="/hero.io" className="flex items-center gap-2">
          <img src={logo} alt="" className="w-7 sm:w-10" />
          <h2 className="text-base font-semibold">HERO.IO</h2>
        </NavLink>
      </div>

      <div className="hidden sm:block">
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `font-semibold transition-all ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline decoration-[#9F62F2] decoration-2"
                    : "hover:underline hover:decoration-[#9F62F2] hover:decoration-2 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/all_application"
              className={({ isActive }) =>
                `font-semibold transition-all ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline decoration-[#9F62F2] decoration-2"
                    : "hover:underline hover:decoration-[#9F62F2] hover:decoration-2 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
                }`
              }
            >
              Apps
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/installed_apps"
              className={({ isActive }) =>
                `font-semibold transition-all ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline decoration-[#9F62F2] decoration-2"
                    : "hover:underline hover:decoration-[#9F62F2] hover:decoration-2 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
                }`
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <NavLink
          to="https://github.com/bannagaddr?tab=repositories"
          target="_blank"
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md"
        >
          <button className="flex items-center gap-2 text-white font-medium btn btn-sm sm:btn-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            <FaGithub className="text-lg" />
            Contribute
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
