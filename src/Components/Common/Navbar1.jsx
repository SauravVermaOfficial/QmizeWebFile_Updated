import { useState, useEffect } from "react";
import GoogleTranslate from "../../GoogleTranslate";

import { Menu, ArrowRight, Sun, Moon } from "lucide-react";

export default function TopBanner() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme to <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
     className="
  w-full
  
  mx-auto
  
  items-center
  justify-start
  px-6 lg:px-10
  
  
  h-10
  text-white

  bg-linear-to-r from-emerald-950 via-emerald-900 to-emerald-950
  backdrop-blur-xl
  bg-opacity-90

  border border-emerald-800/40
  

  shadow-[0_8px_40px_-12px_rgba(16,185,129,0.6)]
  hover:shadow-[0_12px_50px_-10px_rgba(16,185,129,0.8)]

  transition-all duration-300 ease-out

  hidden md:flex
  z-100
"

    >
      {/* Left: The Buzz Button */}
      <button className=" border-green-600 border-l-4 border-r-4  flex items-center gap-1 bg-white text-emerald-900 font-semibold text-[0.5rem] sm:text-xs px-2 py-0.5 rounded-full hover:bg-emerald-100 transition">
        TOP NEWS
        <ArrowRight size={12} />
      </button>

      {/* Center: Scrolling Marquee Message */}
      <div className="overflow-hidden flex-1 mx-64 hidden md:block">
        <div className="marquee whitespace-nowrap text-center text-[1rem] sm:text-xs md:text-sm font-light text-white dark:text-gray-200">
          <span>
            We've Rebranded! MSG24x7 is now Qmize - a new identity, the same
            trusted service.
          </span>
          {/* <span>
      We’ve Rebranded! MSG24x7 is now Qmize - a new identity, the same trusted service. &nbsp; • &nbsp;
    </span> */}
        </div>
      </div>

      {/* Right: Menu + Theme Toggle */}
      <div className="flex items-center gap-2 relative">


        <div className="h-[33px] text-white">
  <GoogleTranslate />
</div>
        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-1 rounded-md bg-emerald-800 hover:bg-emerald-700 transition"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <Sun size={12} /> : <Moon size={12} />}
        </button>

        {/* Menu Wrapper */}
        <div
          className="relative"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          {/* Menu Icon */}
          <button className="p-1 rounded-md hover:bg-emerald-800 transition">
            <Menu size={12} />
          </button>

          {/* Dropdown Menu */}
            <div
              className={`z-500 absolute right-0 top-full mt-2 bg-green-100  border border-emerald-900 rounded-xl shadow-lg flex flex-col gap-2 p-3 w-40 transition-all duration-200  ${
                menuOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <a
                href="https://www.msg24x7.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-emerald-800 text-white font-medium text-xs py-1 rounded-md hover:bg-emerald-700 transition border-b-2 border-green-400">
                  Pay Now
                </button>
              </a>

              <a
                href="https://subscriptions.msg24x7.com/portal/signin/index"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-emerald-800 text-white font-medium text-xs py-1 rounded-md hover:bg-emerald-700 transition border-b-2 border-green-400">
                  Client Login
                </button>
              </a>

              <a
                href="https://subscriptions.msg24x7.com/affiliate/signup/index"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-emerald-800 text-white font-medium text-xs py-1 rounded-md hover:bg-emerald-700 transition border-b-2 border-green-400">
                  Affiliate Signup
                </button>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
