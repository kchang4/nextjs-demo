export type Pokemon = {
  abilities: [];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: {};
  sprites: {
    front_default: string;
  };
  stats: [];
  types: [];
  weight: number;
};

export type PokemonLite = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonLite[];
};

export async function getPokemons(): Promise<PokemonLite[]> {
  let request = await fetch("https://pokeapi.co/api/v2/pokemon");
  let response: PokemonResponse = await request.json();
  let pokemons = [...response.results];

  while (response.next) {
    request = await fetch(response.next);
    response = await request.json();
    pokemons = pokemons.concat(response.results);
  }

  return pokemons;
}

export async function getPokemon(id: string): Promise<Pokemon | null> {
  let request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  try {
    return await request.json();
  } catch (err) {
    return null;
  }
}
