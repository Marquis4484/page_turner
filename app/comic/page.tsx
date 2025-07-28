import React from "react";

import Image from "next/image";
import Link from "next/link";
import Darkmode from "../../public/images/buttons/moon_button.png";
import Comic from "../../public/images/comic/comic_end.png";
import LinkedIn from "../../public/images/buttons/linkedIn_button.png";
import Coffee from "../../public/images/buttons/BMAC_button.png";

//add new imports
function ComicPreview() {
  return (
    /*comic page start*/
    <div className="bg-black bg-repeat bg-bottom w-full h-screen">
      <div
        id="button"
        className="h-[140px] w-[185px] flex items-end justify-end"
      ></div>

      <div className="flex flex-col items-center">
        <div className="w-[332px] h-[65px] flex items-center justify-center bg-primary rounded-[20px] border-4 border-black  mb-8 shadow-[5px_10px_8px_#4f4f4f]">
          Comic Title
        </div>
        <Link href="/comic">
          <Image src={Comic} alt="Comic" className="w-[17rem] mb-4" />
        </Link>
      </div>
    </div>
  );
}

export default ComicPreview;
