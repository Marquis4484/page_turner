import React from "react";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="bg-bannerImg bg-repeat  bg-bottom w-full h-screen ">
      <div className="w-60 bg-primary rounded-[5px]">Comic Title</div>
      <Button>Dark Mode</Button>
      <div>Arrow Left</div>
      <div>Comic</div>
      <div>Arrow Right</div>
      <Button>Click Me!</Button>
      <Button>Click Me!</Button>
      <Button>Click Me!</Button>
    </div>
  );
}

export default Home;
