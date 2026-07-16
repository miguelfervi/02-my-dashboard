import {PokemonGrid, PokemonsResponse, SimplePokemon} from "@/pokemons";
import { cacheTag, revalidateTag } from "next/cache";

const getPokemons = async( limit= 20, offset=0) : Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
		.then(res => res.json());

	return data.results.map(pokemon => ({
		id: pokemon.url.split('/').at(-2) || '0',
		name: pokemon.name,
	}));
}

export default async function PokemonsPage() {
	'use cache';

	/*cacheLife({
		stale: 10, // 10 segundos
		revalidate: 60 // 60 segundos
	});*/

	cacheTag('pokemons');

	revalidateTag('pokemons', 'max'); // 24 hours
	

	const pokemons = await getPokemons(151);

	return (
		<div className="flex flex-col">

			<span className="text-5xl my-2">Listado de Pokemons <small>estático</small></span>
			<PokemonGrid pokemons={pokemons} />
		</div>
	)
}
