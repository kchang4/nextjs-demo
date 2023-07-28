import { getPokemon } from "@/app/api";
import PokemonDetail from "@/app/pokemon-detail";

export default async function PokemonDetailPage({ params }: { params: { id: string } }) {

  const pokemon = await getPokemon(params.id);

  if (!pokemon) {
    return <div>No pokemon found</div>
  }

  return (
    <PokemonDetail pokemon={pokemon} isClient={false} />
  );
}