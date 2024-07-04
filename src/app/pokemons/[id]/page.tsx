import Image from "next/image";
import { fetchDetailPokemonData } from "@/utils/api";
import Link from "next/link";
import { PokemonType } from "@/utils/colorType";
import Chip from "@/components/Chip/Chip";
import type { Metadata, ResolvingMetadata } from "next";
import BackButton from "./../../../components/BackButton";

interface paramsType {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: paramsType): Promise<Metadata> {
  const pokemon = await fetchDetailPokemonData(params.id);

  return {
    title: pokemon.korean_name,
    description: `${pokemon.korean_name}의 상세 정보`,
  };
}

const DetailPage = async ({ params }: paramsType) => {
  const pokemon = await fetchDetailPokemonData(params.id);

  return (
    <div className="flex items-center justify-center direction w-full h-dvh">
      <div className="flex flex-col items-center justify-center w-[700px] p-6 border-2 rounded-md">
        <BackButton />
        <h2 className="text-2xl font-bold mx-auto">
          No.{pokemon.id} {pokemon.korean_name}
        </h2>
        <Image
          src={pokemon.sprites.front_default}
          alt={`${pokemon.korean_name} 이미지`}
          width={96}
          height={96}
          priority
          className="mb-4"
        />
        <div className="text-lg gap-2">
          <p>키: {pokemon.height}m</p>
          <p>몸무게: {pokemon.weight}kg</p>
          <div className="flex flex-wrap">
            <p className="mt-4">
              속성:{" "}
              {pokemon.types.map((type) => {
                return (
                  <Chip
                    key={type.type.name}
                    text={type.type.korean_name}
                    intent={type.type.name as PokemonType}
                  />
                );
              })}
            </p>
          </div>
        </div>
        <div className="mt-5 w-full">
          <span className="block text-lg font-semibold mb-2">기술:</span>
          <div className="flex flex-wrap gap-2">
            {pokemon.moves.slice(0, 50).map((mon) => (
              <span
                key={mon.move.name}
                className="bg-blue-500 text-white px-2 py-1 rounded-full"
              >
                {mon.move.korean_name}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5"></div>
      </div>
    </div>
  );
};

export default DetailPage;
