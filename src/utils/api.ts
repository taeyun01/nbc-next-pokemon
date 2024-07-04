import { Pokemon } from "@/types/pokemonType";
import axios, { AxiosError } from "axios";

// axios 인스턴스 생성 및 기본 URL 설정
export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const detailApi = axios.create({
  baseURL: "http://localhost:3000/api/pokemons",
});

export const fetchDetailPokemonData = async (id: string): Promise<Pokemon> => {
  const response = await detailApi.get(`/${id}`);
  return response.data;
};

export const fetchPokemonData = async (): Promise<Pokemon[]> => {
  const response = await api.get("/api/pokemons");
  return response.data;
};
