import React, { useEffect, useRef, useState } from "react";
import logo from "/src/assets/assets/logo.png";
import search_icon from "/src/assets/assets/search_icon.svg";
import bell_icon from "/src/assets/assets/bell_icon.svg";
import profile_image from "/src/assets/assets/profile_img.png";
import caret_icon from "/src/assets/assets/caret_icon.svg";
import { logout } from "../../firebase";

// NEW: Hamburger icon for mobile
const Hamburger = ({ open, onClick }) => (
  <button
    className="md:hidden flex flex-col justify-center items-center w-10 h-10"
    aria-label="open main menu"
    onClick={onClick}
  >
    <span className={`w-6 h-[2.5px] bg-white mb-[5px] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span className={`w-6 h-[2.5px] bg-white mb-[5px] transition-all ${open ? 'opacity-0' : ''}`}></span>
    <span className={`w-6 h-[2.5px] bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
  </button>
);

function Navbar() {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  const [dropDownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // NEW STATE For mobile menu

  const toggleDropDown = () => setDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <>
      {/* -----NAVBAR TOP DIV----- */}
      <div
        ref={navRef}
        className="flex flex-row justify-between items-center p-2 sm:p-4 fixed top-0 left-0 w-full z-50 bg-black/50"
        // Added bg-black/50 for better text visibility on mobile.
      >
        {/* -----LEFT SIDE---- */}
        <div className="flex flex-row items-center gap-3 sm:gap-6">
          <img src={logo} alt="" className="h-8 sm:h-10 w-auto mr-3 sm:mr-8" />
          {/* Hamburger menu - only on mobile */}
          <Hamburger open={mobileMenuOpen} onClick={toggleMobileMenu} />
          {/* Navigation Links */}
          <ul className="hidden md:flex flex-row gap-4 lg:gap-8 cursor-pointer text-xs sm:text-sm md:text-base font-medium">
            <li className="hover:text-gray-300">Home</li>
            <li className="hover:text-gray-300">TV Shows</li>
            <li className="hover:text-gray-300">Movies</li>
            <li className="hover:text-gray-300">New & Popular</li>
            <li className="hover:text-gray-300">My List</li>
            <li className="hover:text-gray-300">Browse by Languages</li>
          </ul>
        </div>

        {/* ----RIGHT SIDE---- */}
        <div className="flex flex-row items-center font-medium text-xs sm:text-sm md:mr-12 space-x-3 sm:space-x-6">
          {/* On mobile, hide non-essential icons */}
          <img src={search_icon} alt="" className="h-5 w-auto cursor-pointer hidden sm:block" />
          <div className="hidden sm:block">Children</div>
          <img src={bell_icon} alt="" className="h-5 w-auto cursor-pointer hidden sm:block" />
          <div
            className="flex flex-row items-center space-x-1 cursor-pointer relative"
            onClick={toggleDropDown}
          >
            <img src={profile_image} alt="" className="h-6 sm:h-7 w-auto rounded-sm" />
            <img src={caret_icon} alt="" className="h-3 w-auto" />
          </div>
        </div>
      </div>

      {/* -----MOBILE MENU (SLIDE DOWN)---- */}
      <div
        className={`
          md:hidden fixed top-[60px] left-0 w-full bg-black bg-opacity-95 z-40 transition-all duration-300
          ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <ul className="flex flex-col gap-4 px-8 py-6 text-lg text-white font-medium">
          <li className="hover:text-gray-300" onClick={toggleMobileMenu}>Home</li>
          <li className="hover:text-gray-300" onClick={toggleMobileMenu}>TV Shows</li>
          <li className="hover:text-gray-300" onClick={toggleMobileMenu}>Movies</li>
          <li className="hover:text-gray-300" onClick={toggleMobileMenu}>New & Popular</li>
          <li className="hover:text-gray-300" onClick={toggleMobileMenu}>My List</li>
          <li className="hover:text-gray-300" onClick={toggleMobileMenu}>Browse by Languages</li>
          <li className="hover:text-gray-300" onClick={toggleMobileMenu}>Children</li>
          <li className="hover:text-gray-300" onClick={toggleMobileMenu}>Help Center</li>
          <li
            className="text-red-500 hover:text-red-700 cursor-pointer"
            onClick={() => {
              logout();
              toggleMobileMenu();
            }}
          >
            Sign Out of Netflix
          </li>
        </ul>
      </div>

      {/* -----DROPDOWN BUTTON OPTIONS (Desktop)------  */}
      <div
        className={`
          absolute top-14 right-5 z-50 bg-gray-900 transition-all transform duration-300 ease-in-out rounded-sm
          ${dropDownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        <ul className="border border-gray-600 w-[200px] rounded-sm">
          <li className="p-4 space-y-3 border-gray-600 ">
            <div className="hover:text-gray-300">Manage Profiles</div>
            <div className="hover:text-gray-300">Account</div>
            <div className="hover:text-gray-300">Help Center</div>
          </li>
          <li
            className="text-red-500 p-4 hover:text-red-700 cursor-pointer"
            onClick={logout}
          >
            Sign Out of Netflix
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
