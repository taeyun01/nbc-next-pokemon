"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="font-semibold p-2 text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-lg"
      onClick={() => router.back()}
    >
      뒤로가기
    </button>
  );
}
