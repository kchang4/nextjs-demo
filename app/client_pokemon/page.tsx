"use client"

import { useEffect, useState } from "react"
import { PokemonLite, getPokemons } from "../api";
import { Box, Typography } from "@mui/material";
import PokemonList from "../pokemon-list";

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
    return <Box style={{ textAlign: "center" }}><Typography variant="h4">Loading...</Typography></Box>;
  } else if (!pokemons.length) {
    return <Box style={{ textAlign: "center" }}><Typography variant="h4">No Pokemons</Typography></Box>;
  }

  return <PokemonList pokemons={pokemons} isClient={true} />
}