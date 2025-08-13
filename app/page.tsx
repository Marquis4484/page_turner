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
    <div
      id="frontpage"
      className="flex items-center justify-center bg-bannerImg h-screen"

      /*positioning for box in center of screen*/
    >
      <div
        className="flex flex-col h-[98vh] w-[80vw]" /*position items in this box*/
      >
        <button
          id="darkmode_button"
          className=" h-[65px] w-[65px] py-3 px-3 bg-[#E3E3E3]  rounded-full duration-200  hover:bg-[#cecece] active:bg-[#9a9a9a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:translate-y-[2px] active:translate-x-[2px]"
        >
          <Image src={Darkmode} alt="Darkmode" className="h-10" />
        </button>

        <div className="flex flex-col items-center">
          <div className="w-[332px] h-[65px] flex items-center justify-center bg-primary rounded-[20px] border-4 border-black  mb-8 shadow-[5px_10px_8px_#4f4f4f]">
            Comic Title
          </div>
          <Link href="/comic">
            <Image src={Comic} alt="Comic" className="w-[17rem] mb-4" />
          </Link>
        </div>

        <div id="buttons" className="flex gap-12">
          <button className="bg-[#D5BBA1] p-3 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px]">
            <Image src={LinkedIn} alt="Darkmode" className="h-10 w-10" />
          </button>
          <button className="bg-[#D5BBA1] py-3 px-4 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px] ">
            <Image src={Coffee} alt="Darkmode" className="h-10 w-8" />
            {/* #a38f7b */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
