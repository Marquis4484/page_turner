"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

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
      className="relative w-10 h-10 focus:outline-none"
      aria-label="Toggle dark mode"
    >
      {/* Sun icon */}
      <Image
        src="/sun.svg"
        alt="Light mode"
        width={40}
        height={40}
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Moon icon */}
      <Image
        src="/moon.svg"
        alt="Dark mode"
        width={40}
        height={40}
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
