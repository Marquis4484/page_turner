"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Darkmode from "../public/images/buttons/Subtract.png";
import Comic from "../public/images/comic/comic_end.png";
import LinkedIn from "../public/images/buttons/linkedIn_button.png";
import Coffee from "../public/images/buttons/BMAC_button.png";

function Home() {
  return (
    <div id="frontpage" className="bg-bannerImg flex  h-screen">
      <button
        id="darkmode_button"
        className="justify-start h-[65px] w-[65px] py-3 px-4 bg-[#E3E3E3] inset-shadow-xs rounded-full duration-200  hover:bg-[#cecece] active:bg-[#9a9a9a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px] "
      >
        <Image src={Darkmode} alt="Darkmode" className="h-10 w-10" />
      </button>

      <div className="h-[800px]">
        <div className="w-[352px] h-[71px] flex items-center justify-center bg-primary rounded-[20px] border-4 border-black drop-shadow-lg text-center mb-12 shadow-[5px_10px_8px_#4f4f4f]  ">
          Comic Title
        </div>
        <Link href="/comic">
          <Image src={Comic} alt="Comic" className="w-[20rem] mb-4" />
        </Link>
      </div>

      <div id="social_links" className="flex justify-evenly">
        <button className="bg-[#D5BBA1] py-3 px-4 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px] ">
          <Image src={Coffee} alt="Darkmode" className="  h-10 w-8" />
          {/* #a38f7b */}
        </button>
        <button className="bg-[#D5BBA1] p-3 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px]">
          <Image src={LinkedIn} alt="Darkmode" className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
}

export default Home;
