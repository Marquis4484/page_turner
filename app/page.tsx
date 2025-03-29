import React from "react";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";

function Home() {
  return (
    <div className="bg-bannerImg bg-repeat bg-bottom w-full h-screen">
      <div
        id="comic_carousel_darkmode "
        className="bg-blue-500  h-[80vh] flex "
      >
        <Button className="">Dark Mode</Button>
        <div className="self-center ml-auto mr-auto ">
          <div className="w-60 bg-primary rounded-[10px] border-4 border-black drop-shadow-lg text-center">
            Comic Title
          </div>
          <div>Comic</div>
        </div>
      </div>

      <div id="social_links">
        <Button>Click Me!</Button>
        <Button>Click Me!</Button>
      </div>
    </div>
  );
}

export default Home;
