//  "use client";
//  import React, { useState, useEffect } from "react";
//   import Image from "next/image";
// import Link from "next/link";
//  import { useTheme } from "next-themes";
// import Comic1 from "../public/images/comic_covers/comic1.png";
// import Comic2 from "../public/images/comic_covers/comic2.png";
// import Comic3 from "../public/images/comic_covers/ComingSoon.png";
// import LinkedIn from "../public/images/buttons/linkedIn_button.png";
// import Coffee from "../public/images/buttons/BMAC_button.png";
// import arrow_left from "../public/images/buttons/arrow_left.png";
// import arrow_right from "../public/images/buttons/arrow_right.png";
// import ThemeToggle from "@/components/ToggleTheme";

//  function Home() {
//  const { theme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // const images = [Comic1, Comic2, Comic3];

//   const images = [
//     { src: Comic1, title: "Plastic Man!", href: "/plasticman" },
//     { src: Comic2, title: "The Blue Beetle!", href: "/bluebeetle" },
//     { src: Comic3, title: "More Coming Soon!", href: "" },
//   ];

//   useEffect(() => {
//     setMounted(true);

//     // auto-slide every 5 seconds
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   if (!mounted) return null;

//   const isDark = theme === "dark";

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

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
//           <div className="relative w-[332px] h-[65px] flex items-center justify-center bg-primary rounded-[20px] border-4 border-black mb-8 shadow-[5px_10px_8px_#1f1f1f] overflow-hidden">
//             {images.map((img, idx) => (
//               <span
//                 key={idx}
//                 className={`absolute transition-opacity duration-700 text-[26px] ${
//                   idx === currentIndex ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 {img.title}
//               </span>
//             ))}
//           </div>
//           <div
//             id="carousel"
//             className="flex items-center justify-between w-[500px] "
//           >
//             {/* Prev Button */}
//             <button onClick={prevSlide} className=" bg-transparent">
//               <Image src={arrow_left} alt="Darkmode" className="h-20 w-14" />
//             </button>
//             <div className="relative flex items-center justify-center w-[280px] h-[450px] border-4 border-black rounded-[20px] shadow-lg overflow-hidden bg-gray-200">
//               {images.map((img, idx) => (
//                 <Link
//                   key={idx}
//                   href={img.href}
//                   className={`absolute w-full h-full transition-opacity duration-700 ${
//                     idx === currentIndex
//                       ? "opacity-100"
//                       : "opacity-0 pointer-events-none"
//                   }`}
//                 >
//                   <Image
//                     src={img.src}
//                     alt={img.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </Link>
//               ))}

//               {/* Next Button */}
//             </div>
//             <button onClick={nextSlide} className=" bg-transparent">
//               <Image src={arrow_right} alt="Darkmode" className="h-20 w-14" />
//             </button>
//           </div>
//         </div>

//         <div id="buttons" className="flex gap-12">
//           <a
//             href="https://www.linkedin.com/in/marquis-sampson/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="bg-[#D5BBA1] p-3 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px]">
//               <Image src={LinkedIn} alt="Darkmode" className="h-10 w-10" />
//             </button>
//           </a>

//           <a
//             href="https://buymeacoffee.com/marquis4484"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="bg-[#D5BBA1] py-3 px-4 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px] ">
//               <Image src={Coffee} alt="Darkmode" className="h-10 w-8" />
//               {/* #a38f7b */}
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import Comic1 from "../public/images/comic_covers/comic1.png";
import Comic2 from "../public/images/comic_covers/comic2.png";
import Comic3 from "../public/images/comic_covers/ComingSoon.png";
import LinkedIn from "../public/images/buttons/linkedIn_button.png";
import Coffee from "../public/images/buttons/BMAC_button.png";
import arrow_left from "../public/images/buttons/arrow_left.png";
import arrow_right from "../public/images/buttons/arrow_right.png";
import ThemeToggle from "@/components/ToggleTheme";

function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); //keeps interval ID alive between renders without re-rendering the component

  // const images = [Comic1, Comic2, Comic3];

  const images = [
    { src: Comic1, title: "Plastic Man!", href: "/plasticman" },
    { src: Comic2, title: "The Blue Beetle!", href: "/bluebeetle" },
    { src: Comic3, title: "More Coming Soon!", href: "" },
  ];

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    setMounted(true);
    resetInterval(); //start timer when mounted
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetInterval();
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
        className="flex flex-col h-[98vh] w-[80vw]"   /*position items in this box*/
      >
        <ThemeToggle />   {/* Button for dark and light mode */}
        <div className="flex flex-col items-center">
          <div className="relative w-[332px] h-[65px] flex items-center justify-center bg-primary rounded-[20px] border-4 border-black mb-8 shadow-[5px_10px_8px_#1f1f1f] overflow-hidden">
            {images.map((img, idx) => (
              <span
                key={idx}
                className={`absolute transition-opacity duration-700 text-[26px] ${
                  idx === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {img.title}
              </span>
            ))}
          </div>
          <div
            id="carousel"
            className="flex items-center justify-between w-[500px] "
          >
            {/* Prev Button */}
            <button onClick={prevSlide} className=" bg-transparent">
              <Image src={arrow_left} alt="Darkmode" className="h-20 w-14" />
            </button>
            <div className="relative flex items-center justify-center w-[280px] h-[450px] border-4 border-black rounded-[20px] shadow-lg overflow-hidden bg-gray-200">
              {images.map((img, idx) => (
                <Link
                  key={idx}
                  href={img.href}
                  className={`absolute w-full h-full transition-opacity duration-700 ${
                    idx === currentIndex
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </Link>
              ))}

              {/* Next Button */} 
            </div>
            <button onClick={nextSlide} className=" bg-transparent">
              <Image src={arrow_right} alt="Darkmode" className="h-20 w-14" />
            </button>
          </div>
        </div>

        <div id="buttons" className="flex gap-12">
          <a
            href="https://www.linkedin.com/in/marquis-sampson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#D5BBA1] p-3 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px]">
              <Image src={LinkedIn} alt="Darkmode" className="h-10 w-10" />
            </button>
          </a>

          <a
            href="https://buymeacoffee.com/marquis4484"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#D5BBA1] py-3 px-4 rounded-full duration-200 hover:bg-[#b7a08a] shadow-[3px_5px_0px_#4f4f4f]  active:shadow-[0px_0px_0px_#4f4f4f] active:duration-100  active:translate-y-[2px] active:translate-x-[2px] ">
              <Image src={Coffee} alt="Darkmode" className="h-10 w-8" />
              {/* #a38f7b */}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
