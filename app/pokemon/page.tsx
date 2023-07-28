import { GetServerSideProps, InferGetServerSidePropsType, Metadata } from "next"
import { Suspense } from "react"
import { getPokemons } from "../api";
import PokemonList from "../pokemon-list";

export const metadata: Metadata = {
  title: "Pokemon List",
}

export default function Page() {
  const pokemons = getPokemons();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonList ></PokemonList>
      </Suspense>
    </>
  )
}