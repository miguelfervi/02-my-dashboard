export interface Pokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: PokemonAbility[];
	forms: NamedAPIResource[];
	game_indices: VersionGameIndex[];
	held_items: PokemonHeldItem[];
	location_area_encounters: string;
	moves: PokemonMove[];
	sprites: PokemonSprites;
	species: NamedAPIResource;
	stats: PokemonStat[];
	types: PokemonType[];
	past_types: PokemonPastType[];
}

export interface PokemonAbility {
	is_hidden: boolean;
	slot: number;
	ability: NamedAPIResource;
}

export interface PokemonType {
	slot: number;
	type: NamedAPIResource;
}

export interface PokemonStat {
	stat: NamedAPIResource;
	effort: number;
	base_stat: number;
}

export interface PokemonSprites {
	front_default: string | null;
	front_shiny: string | null;
	front_female: string | null;
	front_shiny_female: string | null;
	back_default: string | null;
	back_shiny: string | null;
	back_female: string | null;
	back_shiny_female: string | null;
	other?: {
		dream_world?: {
			front_default: string | null;
			front_female: string | null;
		};
		home?: {
			front_default: string | null;
			front_female: string | null;
			front_shiny: string | null;
			front_shiny_female: string | null;
		};
		'official-artwork'?: {
			front_default: string | null;
			front_shiny: string | null;
		};
	};
	versions?: {
		[key: string]: {
			[key: string]: {
				front_default: string | null;
				front_shiny: string | null;
				front_female?: string | null;
				front_shiny_female?: string | null;
				back_default?: string | null;
				back_shiny?: string | null;
				back_female?: string | null;
				back_shiny_female?: string | null;
			};
		};
	};
}

export interface PokemonMove {
	move: NamedAPIResource;
	version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
	move_learn_method: NamedAPIResource;
	version_group: NamedAPIResource;
	level_learned_at: number;
}

export interface PokemonHeldItem {
	item: NamedAPIResource;
	version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
	version: NamedAPIResource;
	rarity: number;
}

export interface VersionGameIndex {
	game_index: number;
	version: NamedAPIResource;
}

export interface PokemonPastType {
	generation: NamedAPIResource;
	types: PokemonType[];
}

export interface NamedAPIResource {
	name: string;
	url: string;
}
