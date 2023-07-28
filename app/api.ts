export type Pokemon = {
  name: string
  uri: string
}

export async function getPokemons(): Promise<Pokemon[]> {
  const res = await fetch("");
  const pokemons = await res.json();

  return pokemons;
}