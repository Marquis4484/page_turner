import React from "react";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import Darkmode from "../public/images/buttons/Subtract.png";
import Comic from "../public/images/comic/comic_end.png";
import LinkedIn from "../public/images/buttons/linkedIn_button.png";
import Coffee from "../public/images/buttons/BMAC_button.png";

//animation

function Home() {
  return (
    <div className="bg-bannerImg bg-repeat bg-bottom w-full h-screen">
      <div id="comic_carousel_darkmode " className="h-[80vh]">
        <div
          id="button"
          className="h-[140px] w-[185px] flex items-end justify-end"
        >
          <button className="bg-[#E3E3E3] p-3 inset-shadow-xs rounded-full duration-200 hover:bg-[#cecece] active:bg-[#9a9a9a]  shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100">
            <Image src={Darkmode} alt="Darkmode" className="  h-10 w-10 " />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <div className="w-64 h-16 bg-primary rounded-[20px] border-4 border-black drop-shadow-lg text-center mb-12 ">
            Comic Title
          </div>
          <Link href="/comic">
            <Image src={Comic} alt="Comic" className="w-[20rem] mb-40" />
          </Link>
        </div>
      </div>

      <div id="social_links" className="flex justify-evenly">
        <button className="bg-[#D5BBA1] py-3 px-4 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f] ">
          <Image src={Coffee} alt="Darkmode" className="  h-10 w-8" />
          {/* #a38f7b */}
        </button>
        <button className="bg-[#D5BBA1] p-3 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]">
          <Image src={LinkedIn} alt="Darkmode" className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
}

export default Home;
