import { NextPage } from "next"

interface Pokemon {
  name: string;
  uri: string;
}

interface PokemonListProps {
  pokemons: Pokemon[];
}

export async function getServerSideProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  const pokemons = await res.json()

  return {
    props: {
      pokemons
    }
  }
}

const PokemonList: NextPage<PokemonListProps> = ({ pokemons }) => {
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

export default PokemonList;
