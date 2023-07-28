import { Metadata } from "next"
import { getPokemons } from "../api";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokemon List",
}

export default async function PokemonList() {
  const pokemons = await getPokemons();

  if (!pokemons.length) {
    return <h1>No Pokemons</h1>
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Pokemon List</h1>
      <br />
      {pokemons.map((pokemon, index) => {
        const url = pokemon.url.split("/");
        const id = url[url.length - 2];
        return <ul key={`${pokemon.name}-${index}`}><Link href={`/pokemon/${id}`}>{pokemon.name}</Link></ul>
      })}
    </div>
  )
}