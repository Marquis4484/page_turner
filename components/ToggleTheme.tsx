"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import Darkmode from "../public/images/buttons/Subtract.png";
import Light from "../public/images/buttons/wb_sunny.png";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className=" h-[65px] w-[65px] py-3 px-2  bg-[#E3E3E3]  rounded-full duration-200  hover:bg-[#cecece] active:bg-[#9a9a9a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:translate-y-[2px] active:translate-x-[2px]"
    >
      {/* Moon */}

      <Image
        src={Darkmode}
        alt="Light mode"
        className={` absolute h-12 w-12 transition-opacity duration-500 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Sun */}

      <Image
        src={Light}
        alt="Dark mode"
        className={` h-12 transition-opacity duration-500 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
