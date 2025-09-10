import { useState, useEffect, useRef } from "react";
import { useLocation, NavLink } from "react-router-dom";
import {
  FaHome, FaPhoneAlt, FaEnvelopeOpenText, FaHandHoldingHeart, FaCalendarAlt,
  FaGraduationCap, FaEnvelope, FaBars, FaTimes, FaTwitter, FaFacebookF,
  FaLinkedinIn, FaInstagram, FaAngleDown
} from "react-icons/fa";

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

function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpenDesktop, setLangOpenDesktop] = useState(false);
  const [langOpenMobile, setLangOpenMobile] = useState(false);
  const [language, setLanguage] = useState("Eng");
  const [isSticky, setIsSticky] = useState(false);
  const dropdownBtnRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownBtnRef.current && !dropdownBtnRef.current.contains(event.target)) {
        setLangOpenDesktop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sticky header
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 400;
      setIsSticky(window.scrollY > heroHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Google Translate
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!window.google || !window.google.translate) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en", includedLanguages: "en,mar,kn", layout: 0 },
            "google_translate_element"
          );
        };
      }
    };
    addGoogleTranslateScript();
  }, []);

  // Language switch
  const handleLanguageChange = (langCode) => {
    const langMap = { Eng: "en", Mar: "mr", Kan: "kn" };
    const targetLang = langMap[langCode];

    const tryChange = () => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event("change"));
        setLanguage(langCode);
      } else {
        setTimeout(tryChange, 100);
      }
    };
    tryChange();
  };

  return (
    <header
      className={`w-full bg-white z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0" : "relative"
      }`}
    >
      {/* Top Info Bar */}
      <div className="hidden md:flex w-full text-sm">
        <div className="flex-1 bg-white flex items-center gap-12 py-3 pl-20 border-b border-primary">
          <span className="flex gap-2 items-center font-bold text-primary">
            <FaEnvelopeOpenText />{" "}
            <a href="mailto:shrijinsenmath@gmail.com">
              shrijinsenmath@gmail.com
            </a>
          </span>
          <span className="flex gap-2 items-center font-bold text-primary">
            <FaPhoneAlt /> +91 86860-98565
          </span>
        </div>
        <div
          className="py-3 pr-20 flex justify-end items-center gap-6 bg-primary text-white w-1/3"
          style={{ clipPath: "polygon(10% 100%, 100% 100%, 100% 0, 0% 0)" }}
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

      {/* Main Navbar */}
      <div className="relative">
        <div className="flex items-center bg-white">
          {/* Logo */}
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
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-full relative">
            {/* Background layer with clip-path */}
            <div
              className="absolute inset-0 bg-accent"
              style={{ clipPath: "polygon(2% 100%, 100% 100%, 100% 0, 0% 0)" }}
            ></div>

            <nav className="flex-1 flex justify-center py-6 relative z-10">
              <ul className="flex items-center gap-12 text-primary">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <li
                      key={idx}
                      className={`text-lg flex items-center ${
                        isActive
                          ? "text-primary"
                          : "text-primary/90 hover:text-secondary"
                      }`}
                    >
                      {link.icon}
                      <NavLink className="ml-2" to={link.path}>
                        <span className="text-primary hover:text-secondary">
                          {link.name}
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right Actions */}
            <div className="ml-auto flex items-center gap-3 pr-20 relative z-20">
              <NavLink
                to="/donate"
                className="px-6 py-2 rounded-md shadow bg-secondary"
              >
                <span className="text-background font-semibold">
                  Donate Now
                </span>
              </NavLink>

              {/* Desktop language dropdown button */}
              <div ref={dropdownBtnRef} className="relative">
                <button
                  className="p-2 rounded-md border border-gray-200 bg-white shadow-sm hover:shadow-md transition flex items-center gap-2 px-3"
                  onClick={() => setLangOpenDesktop((prev) => !prev)}
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

                {/* Desktop Language Dropdown Menu */}
                {langOpenDesktop && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-primary/20 rounded-xl shadow-xl overflow-hidden z-[9999] animate-fadeIn">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          setLangOpenDesktop(false);
                        }}
                        className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          language === lang.code
                            ? "bg-secondary/10 text-secondary font-semibold"
                            : "hover:bg-accent/30 text-primary"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="ml-auto pr-5 flex md:hidden">
            <button
              className="p-3 rounded-md border border-gray-200 bg-white shadow"
              onClick={() => setOpen(true)}
            >
              <FaBars className="text-primary text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={() => setOpen(false)}>
              <FaTimes className="text-xl text-primary" />
            </button>
          </div>
          <ul className="flex flex-col p-4 gap-3">
            {NAV_LINKS.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={idx}>
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
                      {link.icon} {link.name}
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

            {/* Mobile language dropdown */}
            <li className="mt-4">
              <div className="relative">
                <button
                  className="w-full flex justify-between items-center px-4 py-2 border rounded-md bg-white shadow-sm hover:shadow-md transition"
                  onClick={() => setLangOpenMobile((prev) => !prev)}
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
                  <div className="absolute left-0 mt-2 w-full bg-white border border-primary/20 rounded-xl shadow-xl overflow-hidden z-[9999] animate-fadeIn">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          setLangOpenMobile(false);
                        }}
                        className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          language === lang.code
                            ? "bg-secondary/10 text-secondary font-semibold"
                            : "hover:bg-accent/30 text-primary"
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

      {/* Hidden Google Translate container */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </header>
  );
}

export default Navbar;
