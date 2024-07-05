"use client";
import Image from "next/image";
import { fetchPokemonData } from "@/utils/api";
import Link from "next/link";
import { PokemonResponse } from "@/types/pokemonType";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

export default function PokemonList() {
  const {
    data: pokemonData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    error,
  } = useInfiniteQuery<
    PokemonResponse,
    Error,
    PokemonResponse["data"],
    string[],
    number
  >({
    queryKey: ["pokemons"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetchPokemonData({ pageParam }),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const nextPage = lastPageParam + 1;
      return lastPage.hasNextPage ? nextPage : undefined;
    },
    select: ({ pages }) => {
      return pages.flatMap(({ data }) => data);
    },
  });

  const { ref } = useInView({
    threshold: 0,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
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

  return (
    <div className="flex flex-col p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-center text-2xl font-bold">포켓몬 리스트</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-6 my-6">
        {pokemonData.map((pokemon) => (
          <li
            key={pokemon.id}
            className="flex flex-col items-center justify-center border-solid border-2 border-gray-300 rounded-lg p-4 cursor-pointer bg-white"
          >
            <Link href={`/pokemons/${pokemon.id}`}>
              <strong className="text-xl font-bold text-center">
                {pokemon.korean_name}
              </strong>
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
      {isFetchingNextPage ? (
        <div className="text-2xl font-bold text-center flex items-center justify-center">
          불러오는 중...
        </div>
      ) : null}
      <div ref={ref} />
    </div>
  );
}
