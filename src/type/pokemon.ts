export interface IPokemonName {
  name: string;
  url: string;
}

export interface IGetPokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemonName[];
}

export interface IGetPokemonDetailResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  order: number;
  sprites: {
    back_default: string;
    front_default: string;
  }
};
