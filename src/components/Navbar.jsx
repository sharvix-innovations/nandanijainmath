// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { NavLink } from 'react-router-dom';

import {
  FaHome,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaHandHoldingHeart,
  FaCalendarAlt,
  FaGraduationCap,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaAngleDown,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpenDesktop, setLangOpenDesktop] = useState(false); // ✅ Desktop dropdown
  const [langOpenMobile, setLangOpenMobile] = useState(false); // ✅ Mobile dropdown
  const [language, setLanguage] = useState("Eng"); // selected language
  const dropdownBtnRef = useRef(null); // ref for desktop button
  const location = useLocation(); // ✅ current route
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 400; // hero section cha approx height (px)
      if (window.scrollY > heroHeight / 2) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Outside click handle (Desktop)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownBtnRef.current &&
        !dropdownBtnRef.current.contains(event.target)
      ) {
        setLangOpenDesktop(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const LANGUAGES = [
    { code: "Eng", label: "English" },
    { code: "Mar", label: "मराठी" },
    { code: "Kan", label: "ಕನ್ನಡ" },
  ];

  const NAV_LINKS = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About Us", path: "/about", icon: <FaHandHoldingHeart /> },
    { name: "Events", path: "/events", icon: <FaCalendarAlt /> },
    { name: "Gallery", path: "/gallery", icon: <FaGraduationCap /> },
    { name: "Contacts", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <header
      className={`w-full bg-white z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0" : "relative"
      }`}
    >
      {/* --- Top split info bar (desktop only) --- */}
      <div className="hidden md:flex w-full text-sm">
        {/* left: white / dates */}
        <div className="flex-1 bg-white flex items-center gap-12 py-3 pl-20 border-b border-primary">
          <span className="flex gap-2 items-center font-bold text-primary">
            <FaEnvelopeOpenText /> shrijinsenmath@gmail.com
          </span>
          <span className="flex gap-2 items-center font-bold text-primary">
            <FaPhoneAlt /> +91 86860-98565
          </span>
        </div>

        {/* right: green / social links */}
        <div
          className="py-3 pr-20 flex justify-end items-center gap-6 bg-primary text-white w-1/3"
          style={{
            clipPath: "polygon(10% 100%, 100% 100%, 100% 0, 0% 0)",
          }}
        >
          <FaTwitter className="cursor-pointer hover:text-saffron-400" />
          <div className="w-px bg-gray-400 h-5"></div>
          <FaFacebookF className="cursor-pointer hover:text-saffron-400" />
          <div className="w-px bg-gray-400 h-5"></div>
          <FaLinkedinIn className="cursor-pointer hover:text-saffron-400" />
          <div className="w-px bg-gray-400 h-5"></div>
          <FaInstagram className="cursor-pointer hover:text-saffron-400" />
        </div>
      </div>

      {/* --- Main navbar area --- */}
      <div className="relative">
        <div className="flex items-center bg-white">
          {/* Left logo block */}
          <div className="flex-shrink-0 w-1/2 md:w-1/6">
            <div
              className="h-20 flex items-center pl-5 md:pl-20 bg-secondary"
              style={{
                clipPath: "polygon(0 0, 87% 0, 100% 100%, 0% 100%)",
                minWidth: 200,
              }}
            >
              <img
                src="/logo.png"
                alt="logo"
                className="h-32 w-32 object-contain mr-3"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div></div>
            </div>
          </div>

          {/* Desktop menu with bg-accent */}
          <div
            className="hidden md:flex w-full bg-accent"
            style={{
              clipPath: "polygon(2% 100%, 100% 100%, 100% 0, 0% 0)",
            }}
          >
            <nav className="flex-1 flex justify-center py-6">
              <ul className="flex items-center gap-12 text-primary">
                {NAV_LINKS.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <li
                      key={index}
                      className={`text-lg flex items-center ${
                        isActive
                          ? "text-primary"
                          : "text-primary/90 hover:text-secondary"
                      }`}
                    >
                      {link.icon}
                      <NavLink className="ml-2 " to={link.path}>
                        <span className="text-primary hover:text-secondary">
                          {link.name}
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right actions */}
            <div className="ml-auto flex items-center gap-3 pr-20 relative">
              <NavLink
                to="/donate"
                className="px-6 py-2 rounded-md shadow bg-secondary"
              >
                <span className="text-background font-semibold">
                  Donate Now
                </span>
              </NavLink>
              {/* Language dropdown button (Desktop) */}
              <div ref={dropdownBtnRef}>
                <button
                  className="p-2 rounded-md border border-gray-200 bg-white shadow-sm hover:shadow-md transition flex items-center gap-2 px-3"
                  aria-label="more"
                  onClick={() => setLangOpenDesktop(!langOpenDesktop)}
                >
                  <span className="font-medium">
                    {LANGUAGES.find((l) => l.code === language)?.label}
                  </span>
                  <FaAngleDown
                    className={`transition-transform ${
                      langOpenDesktop ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile hamburger (NO bg-accent) */}
          <div className="ml-auto pr-5 flex md:hidden">
            <button
              className="p-3 rounded-md border border-gray-200 bg-white shadow"
              onClick={() => setOpen(true)}
            >
              <FaBars className="text-primary text-2xl" />
            </button>
          </div>
        </div>

        {/* --- Mobile Drawer Menu (right side) --- */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-between items-center p-4 border-b">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={() => setOpen(false)}>
              <FaTimes className="text-xl text-primary" />
            </button>
          </div>

          {/* Menu links */}
          <ul className="flex flex-col p-4 gap-3">
            {NAV_LINKS.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={`flex items-center gap-3 py-2 px-2 rounded font-medium ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-primary/90 hover:text-secondary"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-primary hover:text-secondary flex items-center gap-3">
                      {link.icon}
                      {link.name}
                    </span>
                  </NavLink>
                </li>
              );
            })}
            <li className="mt-4">
              <NavLink
                to="/donate"
                className="block w-full text-center px-4 py-2 rounded-md bg-secondary text-background font-medium"
                onClick={() => setOpen(false)}
              >
                Donate Now
              </NavLink>
            </li>
            {/* Language dropdown (Mobile) */}
            <li className="mt-4">
              <div className="relative">
                <button
                  className="w-full flex justify-between items-center px-4 py-2 border rounded-md bg-white shadow-sm hover:shadow-md transition"
                  onClick={() => setLangOpenMobile(!langOpenMobile)}
                >
                  <span className="font-medium">
                    {LANGUAGES.find((l) => l.code === language)?.label}
                  </span>
                  <FaAngleDown
                    className={`transition-transform ${
                      langOpenMobile ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {langOpenMobile && (
                  <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpenMobile(false);
                        }}
                        className={`block w-full text-left px-4 py-2 hover:bg-blue-100 transition ${
                          language === lang.code
                            ? "bg-blue-50 font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setOpen(false)}
          ></div>
        )}
      </div>

      {/* --- Language Dropdown via Portal (Desktop only) --- */}
      {langOpenDesktop &&
        createPortal(
          <div
            className="absolute w-44 bg-white border border-gray-200 rounded-md shadow-lg z-[9999] animate-fadeIn"
            style={{
              top:
                dropdownBtnRef.current?.getBoundingClientRect().bottom + 8 || 0,
              left: dropdownBtnRef.current?.getBoundingClientRect().left || 0,
            }}
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setLangOpenDesktop(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-blue-100 transition ${
                  language === lang.code
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : ""
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>,
          document.body
        )}
    </header>
  );
};

export default Navbar;
