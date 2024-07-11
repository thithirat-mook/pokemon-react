import usePokemonList from "../hook/usePokemonList";
import { SortByEnum } from "../type/main";
import { pokemonSorted } from "../utils/sort";
import LoadingLayout from "./LoadingLayout";
import PokemonCard from "./PokemonCard";
import PokemonPagination from "./PokemonPagination";

interface IPokemonProps {
  sortBy: SortByEnum;
}

const Pokemon = ({ sortBy }: IPokemonProps) => {
  const { pokemonList, isLoading, handleNext, handlePrevious } = usePokemonList();

  return (
    <div className="mt-6">
      {isLoading ? (
        <LoadingLayout />
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {pokemonSorted(pokemonList, sortBy).map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      )}
      <PokemonPagination handleNext={handleNext} handlePrevious={handlePrevious} />
    </div>
  );
};

export default Pokemon;
