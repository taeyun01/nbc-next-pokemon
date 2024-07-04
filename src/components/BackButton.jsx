"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="font-semibold g border-white p-2 rounded-lg self-start text-gray-500"
      onClick={() => router.back()}
    >
      {" "}
      {"< "}뒤로가기
    </button>
  );
}
