"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null); //keeps the same audio object between renders
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/home-theme.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;
    return () => audio.pause(); //stop music when leaving the page
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play(); //browsers only allow this after a click
        setPlaying(true);
      } catch {
        setPlaying(false); //file missing or playback blocked
      }
    }
  };

  return (
    <button
      onClick={toggleMusic}
      aria-label={playing ? "Mute music" : "Play music"}
      className="h-[65px] w-[65px] flex items-center justify-center mb-3 bg-[#E3E3E3] rounded-full duration-200 hover:bg-[#cecece] active:bg-[#9a9a9a] shadow-[3px_5px_0px_#4f4f4f] active:shadow-[0px_0px_0px_#4f4f4f] active:translate-y-[2px] active:translate-x-[2px]"
    >


      {playing ? <Volume2 size={30} color="#292929" /> : <VolumeX size={30} color="#292929" />}
    </button>
  );
};

export default MusicToggle;
