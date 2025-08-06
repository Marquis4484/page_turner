"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Comic from "../../public/images/comic/comic_end.png";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [hideUI, setHideUI] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = () => {
      if (hideUI) setHideUI(false);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setHideUI(true);
      }, 3500); // 3.5 seconds of inactivity
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [hideUI]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar hidden={hideUI} />
      <Footer hidden={hideUI} />

      {/* Main Comic Content Area */}

      <div className="flex justify-center items-center bg-black bg-bottom w-full h-screen">
        <div className="flex flex-col items-center">
          <Link href="/comic">
            <Image src={Comic} alt="Comic" className="w-[17rem] mb-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

//add new imports
// type Props = {
//   hidden: boolean;
// };
// function ComicPreview() {
//   return (
//     /*comic page start*/
//     <div className="flex justify-center items-center bg-black bg-bottom w-full h-screen">
//       <div className="flex flex-col items-center">
//         <Link href="/comic">
//           <Image src={Comic} alt="Comic" className="w-[17rem] mb-4" />
//         </Link>
//       </div>
//     </div>
//     /*comic page end*/
//   );
// }

// export default ComicPreview;
