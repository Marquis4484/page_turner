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

  const DIR = "/images/blue_beetle";
  const FILES = useMemo(
    () => [
      "1BBTitle_Page.png",
      "BBPage1.png",
      "BBPage2.png",
      "BBPage3.png",
      "BBPage4.png",
      "BBPage5.png",
      "BBPage6.png",
      "BBPage7.png",
      "BBPage8.png",
      "BBPage9.png",
      "BBPage10.png",
      "BBPage11.png",
      "BBPage12.png",
      "BBPage13.png",
      "BBPage14.png",
      "BBPage15.png",
      "BBPage16.png",
      "BBPage17.png",
      "BBPage18.png",
      "BBPage19.png",
      "BBPage20.png",
      "BBPage21.png",
      "BBPage22.png",
      "BBPage23.png",
      "BBPage24.png",
      "BBPage25.png",
      "BBPage26.png",
      "BBPage27.png",
      "BBPage28.png",
      "BBPage29.png",
      "BBPage30.png",
      "BBPage31.png",
      "BBPage32.png",
      "BBPage33.png",
      "BBPage34.png",
      "BBPage35.png",
    ],
    []
  );

  const IMAGES = useMemo(
    () =>
      FILES.map((f) => ({
        src: `${DIR}/${f}`,
        name: f.replace(/\.[^.]+$/, ""),
      })),
    [FILES]
  );

  const [index, setIndex] = useState(0);
  const isFirst = index === 0;
  const isLast = index === IMAGES.length - 1;
  const current = IMAGES[index];

  const goPrev = () => !isFirst && setIndex((i) => i - 1);
  const goNext = () => !isLast && setIndex((i) => i + 1);

  // Optional: keyboard nav
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

      <main className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col items-center">
          <Image
            src={current.src}
            alt={current.name}
            width={380}
            height={600}
            className="object-contain mx-auto"
            priority
          />
        </div>
      </main>
    </div>
  );
}
