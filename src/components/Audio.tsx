"use client";

import { Pokemon } from "@/types/pokemonType";
import Image from "next/image";
import { useRef } from "react";

type AudioProps = {
  src: Pokemon["cries"]["latest"];
};

const Audio = ({ src }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.1;
    audio.play();
  };

  return (
    <div
      className="cursor-pointer rounded-full shadow-xl p-4 border border-gray-100 transition-transform duration-500 ease-in-out transform hover:scale-125 hover:rotate-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500"
      onClick={playAudio}
    >
      <Image src="/audio.png" alt="audio" width={30} height={30} />
      <audio ref={audioRef} controls className="hidden">
        <source src={src} type="audio/ogg" />
      </audio>
    </div>
  );
};

export default Audio;
