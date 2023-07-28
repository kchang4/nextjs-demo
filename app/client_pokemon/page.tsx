"use client"

import { useEffect, useState } from "react"
import { PokemonLite, getPokemons } from "../api";
import Link from "next/link";

export default function ClientPokemonList() {
  const [pokemons, setPokemons] = useState<PokemonLite[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function setPokemonList() {
      setLoading(true);
      try {
        const pokemons = await getPokemons()
        setPokemons(pokemons);
      } catch (err) {
        setPokemons([])
      }
      setLoading(false);
    }

    setPokemonList();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Client Pokemon List</h1>
      <br />
      {pokemons.map((pokemon, index) => {
        const url = pokemon.url.split("/");
        const id = url[url.length - 2];

        return <ul key={`${pokemon.name}-${index}`}><Link href={`/client_pokemon/${id}`}>{pokemon.name}</Link></ul>
      })}
    </div>
  )
}