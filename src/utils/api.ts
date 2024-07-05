import { PokemonDetailType, PokemonListType } from "@/types/pokemonType";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const fetchPokemonData = async (): Promise<PokemonListType[]> => {
  const response = await api.get(`/api/pokemons`);
  return response.data;
};

export const fetchDetailPokemonData = async (
  id: string
): Promise<PokemonDetailType> => {
  const response = await api.get(`/api/pokemons${id}`);
  return response.data;
};
