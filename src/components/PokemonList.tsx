"use client";
import Image from "next/image";
import { fetchPokemonData } from "@/utils/api";
import Link from "next/link";
import { PokemonListType } from "@/types/pokemonType";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PagiNation from "./PagiNation";

export default function PokemonList() {
  const [page, setPage] = useState<number>(1);
  const pokemonPage: number = 20;

  const {
    data: pokemonData,
    isPending,
    error,
  } = useQuery<PokemonListType[]>({
    queryKey: ["pokemons"],
    queryFn: fetchPokemonData,
  });

  if (isPending)
    return (
      <div className="text-2xl font-bold text-center flex items-center justify-center h-screen">
        포켓몬을 불러오는 중...
      </div>
    );

  if (error)
    return (
      <div className="text-2xl font-bold text-center flex items-center justify-center h-screen">
        포켓몬을 불러오는 중 오류가 발생했습니다. {error.message}
      </div>
    );

  const totalPages = Math.ceil(pokemonData.length / pokemonPage);
  const startIndex = (page - 1) * pokemonPage;
  const selectedPokemon = pokemonData
    .slice(startIndex, startIndex + pokemonPage)
    .map((pokemon) => ({ ...pokemon }));
  return (
    <div className="flex flex-col p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-center text-2xl font-bold">포켓몬 리스트</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-6 my-6">
        {selectedPokemon.map((pokemon) => (
          <li
            key={pokemon.id}
            className="flex flex-col items-center justify-center border-solid border-2 border-gray-300 rounded-lg p-4 cursor-pointer bg-white"
          >
            <Link href={`/pokemons/${pokemon.id}`}>
              <h2 className="text-xl font-bold text-center">
                {pokemon.korean_name}
              </h2>
              <Image
                src={pokemon.sprites.front_default}
                alt={`${pokemon.korean_name} 이미지`}
                width={96}
                height={96}
                priority
              />
              <p className="text-sm text-gray-500">도감번호 : {pokemon.id}</p>
            </Link>
          </li>
        ))}
      </ul>
      <PagiNation totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
}
