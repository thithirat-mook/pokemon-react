import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IGetPokemonListResponse } from "../type/pokemon";
import axios from "axios";

const OFFSET = 12;
const LIMIT = 12;

const usePokemonList = () => {
  const [offset, setOffset] = useState(OFFSET);
  const getPokemon = async () => {
    const response = await axios.get<IGetPokemonListResponse>(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${LIMIT}`
    );
    return response.data;
  };

  const { data: pokemonReponse, isLoading } = useQuery(
    ["getPokemon", offset],
    () => getPokemon()
  );

  const handleNext = () => {
    setOffset((prevValue) => {
      let newOffset = prevValue + LIMIT;
      if (pokemonReponse && newOffset >= pokemonReponse?.count) {
        newOffset = prevValue;
      }
      return newOffset;
    });
  };

  const handlePrevious = () => {
    setOffset((prevValue) => {
      let newOffset = prevValue - LIMIT;
      if (newOffset <= OFFSET) {
        newOffset = OFFSET;
      }
      return newOffset;
    });
  };

  return {
    pokemonList: pokemonReponse?.results ?? [],
    handleNext,
    handlePrevious,
    isLoading,
  };
};

export default usePokemonList;
