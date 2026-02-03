"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const playlist = [
  { title: "love", src: "/music/love-kendricklamar.mp3" },
  { title: "good days", src: "/music/Good-Days.mp3" },
];

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(playlist[0].src);
    audioRef.current.loop = false;

    audioRef.current.onended = () => {
      setCurrentTrack((prev) => (prev + 1) % playlist.length);
    };

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = playlist[currentTrack].src;

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <motion.button
        onClick={togglePlay}
        className=""
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{
          repeat: isPlaying ? Infinity : 0,
          ease: "linear",
          duration: 2,
        }}
      >
        <Image
          width={1000}
          height={1000}
          alt="music disc"
          src="/music-disc.png"
          className="w-20 h-20"
        ></Image>
      </motion.button>

      <p className="text-sm text-gray-600">{playlist[currentTrack].title}</p>
    </div>
  );
};
