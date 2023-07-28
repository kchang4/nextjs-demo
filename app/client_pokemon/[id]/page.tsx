"use client"

import { Pokemon, getPokemon } from "../../api";
import { useEffect, useState } from "react";
import PokemonDetail from "@/app/pokemon-detail";
import { Box, Typography } from "@mui/material";

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
    return <Box style={{ textAlign: "center" }}><Typography variant="h4">Loading...</Typography></Box>;
  } else if (!pokemon) {
    return <Box style={{ textAlign: "center" }}><Typography variant="h4">No pokemon found</Typography></Box>;
  }

  return (
    <PokemonDetail pokemon={pokemon} isClient={true} />
  );
}