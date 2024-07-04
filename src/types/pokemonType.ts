type PokemonMap = {
  [key: string]: string;
};

export interface Pokemon {
  abilities: {
    ability: PokemonMap;
    is_hidden: boolean;
    slot: number;
  }[];
  cries: PokemonMap;
  game_indices: {
    game_index: number;
    version: PokemonMap;
  }[];
  moves: {
    move: PokemonMap;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: PokemonMap;
      version_group: PokemonMap;
    }[];
  }[];
  species: PokemonMap;
  forms: PokemonMap[];
  types: {
    slot: number;
    type: PokemonMap;
  }[];
  stats: {
    base_stat: number;
    effort: 0;
    stat: PokemonMap;
  }[];
  base_experience: number;
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  sprites: SpritesImagesTypes & { other: SpritesOtherTypes } & {
    versions: SpritesVersionTypes;
  };
  weight: number;
  korean_name: string | null;
}

const SPRITES_IMAGE_KEYS = {
  front_default: "front_default",
  front_shiny: "front_shiny",
  back_default: "back_default",
  back_shiny: "back_shiny",
} as const;

const SPRITES_FEMALE_IMAGE_KEYS = {
  front_female: "front_female",
  back_female: "back_female",
  front_shiny_female: "front_shiny_female",
  back_shiny_female: "back_shiny_female",
} as const;

type SpritesImagesTypes = {
  [key in keyof typeof SPRITES_IMAGE_KEYS]: string;
} & {
  [key in keyof typeof SPRITES_FEMALE_IMAGE_KEYS]: string | null;
};

type SpritesOtherTypes = {
  dream_world: Partial<SpritesImagesTypes>;
  home: Partial<SpritesImagesTypes>;
  "official-artwork": Partial<SpritesImagesTypes>;
  showdown: Partial<SpritesImagesTypes>;
};

type SpritesVersionTypes = {
  [key: string]: {
    [key: string]: Partial<SpritesImagesTypes>;
  };
};
