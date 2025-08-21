// // components/Navbar.tsx
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import home from "../public/images/buttons/home.png";
// import settings from "../public/images/buttons/settings.png"
// import SettingsPanel from "./SettingsPanel";

// type Props = {
//   hidden: boolean;
//   onSettingsClick: () => void;
// };

// const Navbar: React.FC<Props> = ({ hidden, onSettingsClick }) => {
//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 bg-navy text-white transition-transform duration-500 ${
//         hidden ? "-translate-y-full" : "translate-y-0"
//       }`}
//     >
//       <div className="flex justify-between items-center px-4 py-3 max-w-5xl mx-auto">
//         {/* Left Button */}
//         <button className="bg-[#D5BBA1] py-2 px-2 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px] ">
//           <Link href="/">
//             <Image src={home} alt="Darkmode" className="h-10 w-10" />
//           </Link>

//           {/* #a38f7b */}
//         </button>

//         {/* Center Column: Title + Highlight */}
//         <div className="flex flex-col items-center gap-1">
//           <h1 className="text-xl font-semibold">Comic Title</h1>
//           <button className="bg-beige px-4 py-1 rounded-lg text-black text-sm shadow-sm hover:shadow-md transition">
//             Highlight
//           </button>
//         </div>

//         {/* Right Button */}
//         <button
//           onClick={onSettingsClick}
//           className="bg-[#D5BBA1] py-2 px-2 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px] "
//         >
//           <Image src={settings} alt="Darkmode" className="h-10 w-10" />
//           {/* #a38f7b */}
//         </button>
//       </div>

//     </nav>
//   );
// };

// export default Navbar;

// components/Navbar.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import home from "@/public/images/buttons/home.png";
import settings from "@/public/images/buttons/settings.png";

type Props = {
  hidden: boolean;
  onSettingsClick: () => void;
};

const Navbar: React.FC<Props> = ({ hidden, onSettingsClick }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-navy text-white transition-transform duration-500 ${
        hidden ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 max-w-5xl mx-auto">
        {/* Left: Home */}
        <Link href="/" aria-label="Go to home">
          <button
            type="button"
            className="bg-[#D5BBA1] py-2 px-2 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f] active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100 active:translate-y-[2px] active:translate-x-[2px]"
          >
            <Image src={home} alt="" className="h-10 w-10" />
          </button>
        </Link>

        {/* Center: Title + (optional) Highlight */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-xl font-semibold">Comic Title</h1>
          {/* <button className="bg-beige px-4 py-1 rounded-lg text-black text-sm shadow-sm hover:shadow-md transition">
            Highlight
          </button> */}
        </div>

        {/* Right: Settings (opens SettingsPanel) */}
        {/* <button
          type="button"
          onClick={onSettingsClick}
          aria-label="Open settings"
          className="bg-[#D5BBA1] py-2 px-2 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f] active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100 active:translate-y-[2px] active:translate-x-[2px]"
        >
          <Image src={settings} alt="" className="h-10 w-10" />
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
