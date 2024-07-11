import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IGetPokemonDetailResponse } from "../type/pokemon";

const usePokemonCard = (url: string) => {
  const getPokemonDetail = async () => {
    const response = await axios.get<IGetPokemonDetailResponse>(url);
    return response.data;
  };

  const { data: pokemonDetail, isLoading } = useQuery(
    ["getPokemonDetail", url],
    () => getPokemonDetail()
  );

  return {
    pokemonDetail,
    isLoading
  }
}

export default usePokemonCard;
