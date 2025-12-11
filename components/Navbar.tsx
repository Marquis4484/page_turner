import React from "react";
import Image from "next/image";
import Link from "next/link";
import home from "@/public/images/buttons/home.png";
// import settings from "@/public/images/buttons/settings.png";

type Props = {
  hidden: boolean;
  onSettingsClick: () => void;
};
{
  /*onSettingsClick*/
}
const Navbar: React.FC<Props> = ({ hidden }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-navy text-white transition-transform duration-500 ${
        hidden ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center px-[16px] py-[12px] max-w-5xl mx-auto">
        <Link href="/" className="max-[700px]:items-center" aria-label="Go to home" >
          <button className="bg-[#D5BBA1] py-[8px] px-[8px] rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f] active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100 active:translate-y-[2px] active:translate-x-[2px]">
            <Image src={home} alt="" className="h-[40px] w-[40px]" />
          </button>
        </Link>

        <div className="flex flex-col items-center gap-1 max-[700px]:w-[350px]">
          <h1 className="text-xl px-10 font-semibold max-[700px]:hidden"> 
            You can use the arrow keys to scroll through this comic.
          </h1>
          {/* <button className="bg-beige px-4 py-1 rounded-lg text-black text-sm shadow-sm hover:shadow-md transition">
            Highlight
          </button> */}
        </div>

        {/* <button
          type="button"
          onClick={onSettingsClick}
          id="settings"
          className="bg-[#D5BBA1] py-2 px-2 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f] active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100 active:translate-y-[2px] active:translate-x-[2px]"
        >
          <Image src={settings} alt="" className="h-10 w-10" />
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
