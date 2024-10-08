import usePokemonCard from "../hook/usePokemonCard";
import { IPokemonName } from "../type/pokemon";
import LoadingLayout from "./LoadingLayout";

interface IPokemonNameCardProps {
  pokemon: IPokemonName;
}

const PokemonCard = ({ pokemon }: IPokemonNameCardProps) => {
  const { pokemonDetail, isLoading } = usePokemonCard(pokemon.url);

  return (
    <div className="h-[106px] flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-shades-30">
      {isLoading ? (
        <LoadingLayout />
      ) : (
        <>
          <div className="flex-none w-[72px] w-[72px] bg-sprite-background rounded-full">
            <img
              src={pokemonDetail?.sprites.front_default}
              alt={pokemon.name}
              className="w-[full] h-full p-1"
            />
          </div>
          <p className="text-xl capitalize text-neutral-shades-50 whitespace-pre">
            {pokemon.name}
          </p>
        </>
      )}
    </div>
  );
};

export default PokemonCard;
