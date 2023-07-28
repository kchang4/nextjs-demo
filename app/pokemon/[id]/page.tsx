import Link from "next/link";

export default function PokemonPage({ params }: { params: { id: string } }) {
  return (<div>
    <Link href={"/pokemon"}>Back to Pokemon list</Link>
    <span>My Pokemon</span>
  </div>)
}