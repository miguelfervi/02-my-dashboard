import {Pokemon} from "@/pokemons";
import {Metadata} from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;

	const pokemon = await getPokemon(id);


	return {
		title: `#${pokemon.id} - ${pokemon.name}`,
		description: `Página del pokémon ${pokemon.name}`
	}
}

interface Props {
	params: Promise<{id: string}>;
}

const getPokemon = async(id: string): Promise<Pokemon> => {
	return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
		cache: 'force-cache'
	}).then(res => res.json());
}


export default async function PokemonPage({ params }: Props){

	const { id } = await params;
	const pokemon = await getPokemon(id);

	return (<div>
		<h1>Pokemon {id}</h1>
		<div>{pokemon.name}</div>
	</div>)
}
