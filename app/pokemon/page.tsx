import { Metadata } from "next"
import { getPokemons } from "../api";
import PokemonList from "../pokemon-list";
import { Box, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Pokemon List",
}

export default async function PokemonListPage() {
  const pokemons = await getPokemons();

  if (!pokemons.length) {
    return <Box style={{ textAlign: "center" }}><Typography variant="h4">No Pokemons</Typography></Box>;
  }

  return <PokemonList pokemons={pokemons} isClient={false} />
}