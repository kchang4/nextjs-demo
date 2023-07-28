"use client"

import { Button, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image"
import { Pokemon } from "./api";

export default function PokemonDetail({ pokemon, isClient }: { pokemon: Pokemon, isClient: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>{isClient ? "Client " : ""}Pokemon Detail</h1>
      <Link href={isClient ? "/client_pokemon" : "/pokemon"}><Button variant="contained">back to list</Button></Link>
      <br />
      <Image src={pokemon.sprites.front_default} alt={pokemon.id.toString()} width={96} height={96}></Image>
      <Typography variant="h4">{pokemon.name}</Typography>
    </div>
  )
}