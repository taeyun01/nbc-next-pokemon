import Image from "next/image";
import { fetchDetailPokemonData } from "@/utils/api";
import Link from "next/link";

interface paramsType {
  params: {
    id: string;
  };
}

const DetailPage = async ({ params }: paramsType) => {
  const pokemon = await fetchDetailPokemonData(params.id);

  return (
    <div className="flex items-center justify-center direction w-full h-dvh ">
      <div className="flex flex-col items-center justify-center w-[450px] p-6 border-2 rounded-lg border-white">
        <Image
          src={pokemon.sprites.front_default}
          alt={`${pokemon.korean_name} 이미지`}
          width={96}
          height={96}
          priority
        />
        <div>
          <p>도감번호: {pokemon.id}</p>
          <p>이름: {pokemon.korean_name}</p>
          <p>키: {pokemon.height}m</p>
          <p>몸무게: {pokemon.weight}kg</p>
          <p>속성: {pokemon.types[0].type.korean_name}</p>
        </div>
        <div className="mt-5">
          <span>스킬:</span>
          <p>
            {pokemon.moves.slice(0, 50).map((mon, index) => (
              <span key={mon.move.name}>
                {mon.move.korean_name}
                {index < pokemon.moves.slice(0, 50).length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
        <Link href="/">뒤로가기</Link>
      </div>
    </div>
  );
};

export default DetailPage;
