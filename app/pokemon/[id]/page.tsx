import { getPokemon } from "@/app/api";
import PokemonDetail from "@/app/pokemon-detail";
import { Box, Typography } from "@mui/material";

export default async function PokemonDetailPage({ params }: { params: { id: string } }) {

  const pokemon = await getPokemon(params.id);

  if (!pokemon) {
    return <div><Typography variant="h4">No pokemon found</Typography></div>;
  }

  return (
    <PokemonDetail pokemon={pokemon} isClient={false} />
  );
}