"use client"

import { Pokemon, getPokemon } from "../../api";
import { useEffect, useState } from "react";
import PokemonDetail from "@/app/pokemon-detail";

export default function ClientPokemonDetail({ params }: { params: { id: string } }) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getAndSetPokemon() {
      setLoading(true);
      try {
        const pokemon = await getPokemon(params.id)
        setPokemon(pokemon);
      } catch (err) {
        setPokemon(null)
      }
      setLoading(false);
    }

    getAndSetPokemon();
  }, [params.id]);

  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>
  } else if (!pokemon) {
    return <div style={{ textAlign: "center" }}>No pokemon found</div>
  }

  return (
    <PokemonDetail pokemon={pokemon} isClient={true} />
  );
}