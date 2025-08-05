// components/Navbar.tsx
import React from "react";

type Props = {
  hidden: boolean;
  onSettingsClick: () => void;
};

const Navbar: React.FC<Props> = ({ hidden, onSettingsClick }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-navy text-white transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 max-w-5xl mx-auto">
        {/* Left Button */}
        <button className="bg-beige px-4 py-2 rounded-full text-black">
          🏠
        </button>

        {/* Center Column: Title + Highlight */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-xl font-semibold">Comic Title</h1>
          <button className="bg-beige px-4 py-1 rounded-lg text-black text-sm shadow-sm hover:shadow-md transition">
            Highlight
          </button>
        </div>

        {/* Right Button */}
    <button onClick={onSettingsClick} className="bg-beige px-4 py-2 rounded-full text-black">
  ⚙️
</button>
      </div>
    </nav>
  );
};

export default Navbar;
