import usePokemonCard from "../hook/usePokemonCard";
import { IPokemonName } from "../type/pokemon";
import LoadingLayout from "./LoadingLayout";

interface IPokemonNameCardProps {
  pokemon: IPokemonName;
}

const PokemonCard = ({ pokemon }: IPokemonNameCardProps) => {
  const { pokemonDetail, isLoading } = usePokemonCard(pokemon.url);

  return (
    // Remove h-[106px]
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-shades-30">
      {isLoading ? (
        <LoadingLayout />
      ) : (
        <>
          <div className="w-[72px] w-[72px] bg-sprite-background rounded-full">
            <img
              src={pokemonDetail?.sprites.front_default}
              alt={pokemon.name}
              className="w-[full] h-full p-1"
            />
          </div>
          {/* Add whitespace no warp */}
          <p className="text-xl text-neutral-shades-50 whitespace-nowrap">
            {pokemon.name}
          </p>
        </>
      )}
    </div>
  );
};

export default PokemonCard;
