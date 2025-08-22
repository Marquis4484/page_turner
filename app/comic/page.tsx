"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SettingsPanel from "@/components/SettingsPanel";

export default function Home() {
  const [hideUI, setHideUI] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [img, setImg] = useState({
    src: "/images/blue_beetle/01.png",
    name: "01",
    width: 440,
    height: 600,
  });

  useEffect(() => {
    const handleMouseMove = () => {
      if (hideUI) setHideUI(false);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setHideUI(true);
      }, 3000); // 3 seconds of inactivity
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [hideUI]);

  const IMAGE_DIR = "/images/blue_beetle"; // lives under /public
  const IMAGE_COUNT = 10; // how many files you have
  const EXT = "png"; // png | jpg | jpeg
  const PAD_TO_2 = true; // true => 01, 02…; false => 1, 2…

  const images = useMemo(
    () =>
      Array.from({ length: IMAGE_COUNT }, (_, i) => {
        const n = PAD_TO_2 ? String(i + 1).padStart(2, "0") : String(i + 1);
        const file = `${n}.${EXT}`;
        return {
          src: `${IMAGE_DIR}/${file}`,
          name: n, // or file.replace(/\.[^.]+$/, "")
        };
      }),
    [IMAGE_COUNT, IMAGE_DIR, EXT]
  );

  const [index, setIndex] = useState(0);
  const isFirst = index === 0;
  const isLast = index === images.length - 1;
  const current = images[index];

  const goPrev = () => !isFirst && setIndex((i) => i - 1);
  const goNext = () => !isLast && setIndex((i) => i + 1);

  // (Optional) keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFirst, isLast]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar hidden={hideUI} onSettingsClick={() => setSettingsOpen(true)} />
      <Footer
        hidden={hideUI}
        title={current.name}
        canPrev={!isFirst}
        canNext={!isLast}
        onPrev={goPrev}
        onNext={goNext}
      />
      <SettingsPanel
        visible={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />

      {/* Main Comic Content Area */}

      <div className="flex justify-center items-center bg-black bg-bottom w-full h-screen">
        <div className="flex flex-col items-center">
          <Image
            src={img.src}
            alt={img.name}
            width={img.width}
            height={img.height}
            className="object-contain mx-auto"
          />
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
//
//     <div className="flex justify-center items-center bg-black bg-bottom w-full h-screen">
//       <div className="flex flex-col items-center">
//         <Link href="/comic">
//           <Image src={Comic} alt="Comic" className="w-[17rem] mb-4" />
//         </Link>
//       </div>
//     </div>

//   );
// }

// export default ComicPreview;
