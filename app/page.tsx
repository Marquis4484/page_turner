import React from "react";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import Darkmode from "../public/images/buttons/moon_button.png";
import Comic from "../public/images/comic/comic_end.png";
import LinkedIn from "../public/images/buttons/linkedIn_button.png";
import Coffee from "../public/images/buttons/BMAC_button.png";

function Home() {
  return (
    <div className="bg-bannerImg bg-repeat bg-bottom w-full h-screen">
      <div id="comic_carousel_darkmode " className="h-[80vh]">
        <div
          id="button"
          className="h-[140px] w-[185px] flex items-end justify-end"
        >
          <Image
            src={Darkmode}
            alt="Darkmode"
            className="w-[4rem] hover:grayscale "
          />
        </div>
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <div className="w-64 h-16 bg-primary rounded-[20px] border-4 border-black drop-shadow-lg text-center mb-12">
            Comic Title
          </div>
          <Link href="/comic">
            <Image src={Comic} alt="Comic" className="w-[20rem] mb-40" />
          </Link>
        </div>
      </div>

      <div id="social_links" className="flex">
        <Image src={LinkedIn} alt="Comic" className="w-[4rem] " />
        <Image src={Coffee} alt="Comic" className="w-[4rem] " />
      </div>
    </div>
  );
}

export default Home;
