import { SortByEnum } from "../type/main";
import { IPokemonName } from "../type/pokemon";

export const pokemonSorted = (
  list: IPokemonName[],
  sortBy: SortByEnum
): IPokemonName[] => {
  return sortBy === SortByEnum.name
    ? [...list].sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      })
    : list;
};
