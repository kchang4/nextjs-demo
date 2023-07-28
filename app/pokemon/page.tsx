import { GetServerSideProps, InferGetServerSidePropsType } from "next"

type Pokemon = {
  name: string
  uri: string
}

export const getServerSideProps: GetServerSideProps<{ pokemons: Pokemon[] }> = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  const pokemons = await res.json()

  return {
    props: {
      pokemons
    }
  }
}

export default function PokemonList({ pokemons }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {pokemons.map((pokemon, index) => {
        return (
          <div key={`${pokemon}-${index}`}>
            <span>{pokemon.name}</span>
          </div>);
      })}
    </div>
  )
}