// "use client";
// import React from "react";
// import { useTheme } from "next-themes";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Comic from "../public/images/comic/comic_end.png";
// import LinkedIn from "../public/images/buttons/linkedIn_button.png";
// import Coffee from "../public/images/buttons/BMAC_button.png";
// import ThemeToggle from "@/components/ToggleTheme";

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useTheme } from "next-themes";

// // Import your images from public folder
// // import Comic1 from "../public/images/comic/comic_end.png";
// // import Comic2 from "../public/images/comic/comic_page_1.png";
// // import Comic3 from "../public/images/comic/comic_page_2.png";

// // // Existing imports
// // import Darkmode from "../public/images/buttons/Subtract.png";
// // import LinkedIn from "../public/images/buttons/linkedIn_button.png";
// // import Coffee from "../public/images/buttons/BMAC_button.png";
// // import ThemeToggle from "@/components/ToggleTheme";

// function Home() {
//   const { theme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const images = [Comic1, Comic2, Comic3];

// //   useEffect(() => {
// //     setMounted(true);

// //     // auto-slide every 5 seconds
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % images.length);
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   if (!mounted) return null;

// //   const isDark = theme === "dark";

// //   const nextSlide = () => {
// //     setCurrentIndex((prev) => (prev + 1) % images.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
// //   };

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   const isDark = theme === "dark";

//   return (
//     <div
//       id="frontpage"
//       className={`flex items-center justify-center h-screen bg-bannerImg2 transition-colors duration-700 ${
//         isDark ? "bg-[#292929]" : "bg-[#ffffff]"
//       }`}

//       /*positioning for box in center of screen*/
//     >
//       <div
//         className="flex flex-col h-[98vh] w-[80vw]" /*position items in this box*/
//       >
//         <ThemeToggle />
//         <div className="flex flex-col items-center">
//           <div className="w-[332px] h-[65px] flex items-center justify-center bg-primary rounded-[20px] border-4 border-black  mb-8 shadow-[5px_10px_8px_#4f4f4f]">
//             Comic Title
//           </div>
//           <Link href="/comic">
//             <Image src={Comic} alt="Comic" className="w-[17rem] mb-4" />
//           </Link>
//         </div>

//         <div id="buttons" className="flex gap-12">
//           <button className="bg-[#D5BBA1] p-3 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px]">
//             <Image src={LinkedIn} alt="Darkmode" className="h-10 w-10" />
//           </button>
//           <button className="bg-[#D5BBA1] py-3 px-4 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px] ">
//             <Image src={Coffee} alt="Darkmode" className="h-10 w-8" />
//             {/* #a38f7b */}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Comic1 from "../public/images/comic/comic_end.png";
import Comic2 from "../public/images/comic/comic_page_1.png";
import Comic3 from "../public/images/comic/comic_page_2.png";
import LinkedIn from "../public/images/buttons/linkedIn_button.png";
import Coffee from "../public/images/buttons/BMAC_button.png";
import ThemeToggle from "@/components/ToggleTheme";

function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Comic1, Comic2, Comic3];

  useEffect(() => {
    setMounted(true);

    // auto-slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      id="frontpage"
      className={`flex items-center justify-center h-screen bg-bannerImg2 transition-colors duration-700 ${
        isDark ? "bg-[#292929]" : "bg-[#ffffff]"
      }`}

      /*positioning for box in center of screen*/
    >
      <div
        className="flex flex-col h-[98vh] w-[80vw]" /*position items in this box*/
      >
        <ThemeToggle />
<div className="flex flex-col items-center">
        <div className="w-[315px] h-[65px] flex items-center justify-center bg-primary rounded-[20px] border-4 border-black mb-8 shadow-[5px_10px_8px_#1f1f1f]">
          Comic Title
        </div>

        <div
          id="carousel"
          className="relative flex items-center justify-center w-[280px] h-[450px] border-4 border-black rounded-[20px] shadow-lg overflow-hidden bg-gray-200"
        >
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`Comic ${idx + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-[-100px] bg-transparent"
          >
            <span className="text-red-600 text-6xl font-bold">{"<"}</span>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-[-50px] bg-transparent"
          >
            <span className="text-red-600 text-6xl font-bold">{">"}</span>
          </button>
        </div>
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

//  <button
//         id="darkmode_button"
//         className=" h-[65px] w-[65px] py-3 px-3 bg-[#E3E3E3]  rounded-full duration-200  hover:bg-[#cecece] active:bg-[#9a9a9a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:translate-y-[2px] active:translate-x-[2px]"
//       >
//         <Image src={Darkmode} alt="Darkmode" className="h-10" />
//       </button>

// <button
//       id="darkmode_button"
//       className=" h-[65px] w-[65px] py-3 px-2  bg-[#E3E3E3]  rounded-full duration-200  hover:bg-[#cecece] active:bg-[#9a9a9a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:translate-y-[2px] active:translate-x-[2px]"
//     >
//       <Image src={Light} alt="Light" className="h-12   " />
//     </button>
