"use client";
import Image from "next/image";
import { fetchPokemonData } from "@/utils/api";
import Link from "next/link";
import { PokemonListType } from "@/types/pokemonType";
import { useQuery } from "@tanstack/react-query";

export default function PokemonList() {
  const {
    data: pokemonData,
    isPending,
    error,
  } = useQuery<PokemonListType[]>({
    queryKey: ["pokemons"],
    queryFn: fetchPokemonData,
  });

  console.log(pokemonData);

  if (isPending) return <div>포켓몬을 불러오는 중...</div>;
  if (error)
    return <div>데이터를 불러오는 중 오류가 발생했습니다. {error.message}</div>;

  return (
    <div className="flex flex-col m-4">
      <h1 className="text-center text-2xl font-bold">포켓몬 리스트</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-6 my-6">
        {pokemonData.map((pokemon) => (
          <li
            key={pokemon.id}
            className="flex flex-col items-center justify-center border-solid border-2 border-gray-300 rounded-lg p-4 cursor-pointer"
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
    </div>
  );
}
