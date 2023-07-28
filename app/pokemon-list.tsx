"use client"

import { Typography } from "@mui/material";
import Link from "next/link";
import { PokemonLite } from "./api";

export default function PokemonList({ pokemons, isClient }: { pokemons: PokemonLite[], isClient: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Typography variant="h4">{isClient ? "Client " : ""}Pokemon List</Typography>
      <br />
      {pokemons.map((pokemon, index) => {
        const url = pokemon.url.split("/");
        const id = url[url.length - 2];
        return <ul key={`${pokemon.name}-${index}`}><Link href={isClient ? `/client_pokemon/${id}` : `/pokemon/${id}`}>{pokemon.name}</Link></ul>
      })}
    </div>
  );
}