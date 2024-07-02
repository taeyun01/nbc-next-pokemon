import Image from "next/image";
import { fetchDetailPokemonData } from "@/utils/api";
import Link from "next/link";
import { PokemonType, getTypeColor } from "@/utils/colorType";
import Chip from "@/components/Chip/Chip";

interface paramsType {
  params: {
    id: string;
  };
}

const DetailPage = async ({ params }: paramsType) => {
  const pokemon = await fetchDetailPokemonData(params.id);

  return (
    <div className="flex items-center justify-center direction w-full h-dvh">
      <div className="flex flex-col items-center justify-center w-[700px] p-6 border-2 rounded-md">
        <Link
          className="font-semibold border-2 border-white p-2 rounded-lg self-start"
          href="/"
        >
          ＜ 뒤로가기
        </Link>
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
                // const bgColor = getTypeColor(type.type.name as PokemonType);
                return (
                  <Chip
                    key={type.type.name}
                    text={type.type.korean_name}
                    intent={type.type.name as PokemonType}
                  />
                  // <span
                  //   key={type.type.name}
                  //   className={`${bgColor} text-white px-2 py-1 rounded-full mr-2`}
                  // >
                  //   {type.type.korean_name}
                  // </span>
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
