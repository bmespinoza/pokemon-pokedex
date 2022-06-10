export interface rawPokemon {
    name: string;
    url: string;
}

export interface pokemonResponse {
    data: pokemon;
}

export interface pokemon {
    abilities: ability[];
    base_experience: number;
    forms: form[];
    game_indices: game_index[];
    height: number;
    held_items: held_item[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: move[];
    name: string;
    order: number;
    past_types: past_type[];
    species: Specie;
    sprites: Sprite;
    stats: stat[];
    types: type[];
    weight: number;
}

export interface ability {
    ability: {
        name: string;
        url: string;
    }
    is_hidden: boolean;
    slot: number;
}

interface form {
    name: string;
    url: string;
}

interface game_index {
    game_index: number
    version: {
        name: string
        url: string
    }
}

interface held_item {
    item: {
        name: string;
        url: string;
    }
    version_details: version_detail[];
}

interface version_detail {
    rarity: number;
    version: {
        name: string;
        url: string;
    }
}

interface move {
    move: {
        name: string;
        url: string;
    }
    version_group_details: version_group_detail[];
}

interface version_group_detail {
    level_learned_at: number;
    move_learn_method: {
        name: string;
        url: string;
    }
    version_group: {
        name: string;
        url: string
    }
}

interface past_type {
    generation: {
        name: string;
        url: string;
    }
    types: type[]
}

interface Specie {
    name: string;
    url: string;
}

interface Sprite {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export interface type {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}