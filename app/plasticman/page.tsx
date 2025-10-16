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

  const DIR = "/images/plastic_man";
  const FILES = useMemo(
    () => [
      "PMTitle_Page.png",
      "PMPage2.png",
      "PMPage3.png",
      "PMPage4.png",
      "PMPage5.png",
      "PMPage6.png",
      "PMPage7.png",
      "PMPage8.png",
      "PMPage9.png",
      "PMPage10.png",
      "PMPage11.png",
      "PMPage12.png",
      "PMPage13.png",
      "PMPage14.png",
      "PMPage15.png",
      "PMPage16.png",
      "PMPage17.png",
      "PMPage18.png",
      "PMPage19.png",
      "PMPage20.png",
      "PMPage21.png",
      "PMPage22.png",
      "PMPage23.png",
      "PMPage24.png",
      "PMPage25.png",
      "PMPage26.png",
      "PMPage27.png",
      "PMPage28.png",
      "PMPage29.png",
      "PMPage30.png",
      "PMPage31.png",
      "PMPage32.png",
      "PMPage33.png",
      "PMPage34.png",
      "PMPage35.png",
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
