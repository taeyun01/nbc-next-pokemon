"use client";

import { useEffect, useState } from "react";
import { Pokemon } from "@/types/pokemonType";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { api } from "@/utils/api";

export default function PokemonList() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/pokemons/${id}`);
  };

  useEffect(() => {
    api
      .get("/api/pokemons")
      .then((res) => {
        setPokemonData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error);
        setLoading(false);
      });
  }, []);

  console.log(pokemonData);

  if (loading) return <div>포켓몬을 불러오는 중...</div>;

  return (
    <div>
      <h1>포켓몬 리스트</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-6 my-6">
        {pokemonData.map((pokemon) => (
          <li
            key={pokemon.id}
            className="flex flex-col items-center justify-center border-solid border-2 border-gray-300 rounded-lg p-4 cursor-pointer"
            onClick={() => handleClick(pokemon.id)}
          >
            <Image
              src={pokemon.sprites.front_default}
              alt={`${pokemon.korean_name} 이미지`}
              width={96}
              height={96}
              priority
            />
            <p>{pokemon.korean_name}</p>
            <p>도감번호 : {pokemon.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
