import usePokemonList from "../hook/usePokemonList";
import { SortByEnum } from "../type/main";
import LoadingLayout from "./LoadingLayout";
import PokemonCard from "./PokemonCard";
import PokemonPagination from "./PokemonPagination";

interface IPokemonProps {
  sortBy: SortByEnum;
}

const Pokemon = ({ sortBy }: IPokemonProps) => {
  const { pokemonList, isLoading, handleNext, handlePrevious, page } =
    usePokemonList({ sortBy });

  if (isLoading) {
    return <LoadingLayout />;
  }

  return (
    <div className="flex flex-col justify-between h-[calc(100%-16px)] mt-4 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <PokemonPagination
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        page={page}
      />
    </div>
  );
};

export default Pokemon;
