import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IGetPokemonListResponse } from "../type/pokemon";
import axios from "axios";
import { SortByEnum } from "../type/main";

const OFFSET = 12;
const LIMIT = 120;

interface IPokemonProps {
  sortBy: SortByEnum;
}

const usePokemonList = ({ sortBy }: IPokemonProps) => {
  const { data: pokemonReponse, isLoading } = useQuery(
    ["getPokemon"],
    () => getPokemon()
  );

  const getPokemon = async () => {
    const response = await axios.get<IGetPokemonListResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}`
    );
    return response.data;
  };

  const [sortedData, setSortedData] = useState(pokemonReponse?.results);
  const [itemPerPage] = useState(OFFSET);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = sortedData?.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = pokemonReponse ? Math.ceil(pokemonReponse?.results.length / itemPerPage) : 1;


  const handleNext = () => {
    if (currentPage < nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSortBy = () => {
    if (sortBy === SortByEnum.name) {
      const finalData = sortedData?.slice().sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      setSortedData(finalData);
    } else {
      setSortedData(pokemonReponse?.results.slice());
    }
    setCurrentPage(1);
  }

  useEffect(() => {
    handleSortBy()
  }, [sortBy])

  return {
    pokemonList: currentItems ?? [],
    handleNext,
    handlePrevious,
    isLoading,
    page: currentPage,
  };
};

export default usePokemonList;
