type NameUrlType = Record<"name" | "url", string>;

export interface Pokemon {
  abilities: {
    ability: NameUrlType;
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  cries: Record<"latest" | "legacy", string>;
  forms: NameUrlType[];
  game_indices: {
    game_index: number;
    version: NameUrlType;
  }[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: NameUrlType;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: NameUrlType;
      version_group: NameUrlType;
    }[];
  }[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: NameUrlType;
  sprites: SpritesImagesTypes & {
    other: Record<
      "dream_world" | "home" | "official-artwork" | "showdown",
      Partial<SpritesTypes>
    >;
    versions: {
      "generation-i": Record<"red-blue" | "yellow", Partial<SpritesTypes>>;
      "generation-ii": Record<
        "crystal" | "gold" | "silver",
        Partial<SpritesTypes>
      >;
      "generation-iii": Record<
        "emerald" | "firered-leafgreen" | "ruby-sapphire",
        Partial<SpritesTypes>
      >;
      "generation-iv": Record<
        "diamond-pearl" | "heartgold-soulsilver" | "platinum",
        Partial<SpritesTypes>
      >;
      "generation-v": Record<"black-white" | "animated", Partial<SpritesTypes>>;
      "generation-vi": Record<
        "omegaruby-alphasapphire" | "x-y",
        Partial<SpritesTypes>
      >;
      "generation-vii": Record<
        "icons" | "xultra-sun-ultra-moon",
        Partial<SpritesTypes>
      >;
      "generation-viii": {
        icons: Partial<SpritesTypes>;
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: NameUrlType;
  }[];
  types: {
    slot: number;
    type: NameUrlType;
  }[];
  weight: number;
  korean_name: string;
}

type AbilitiesType = {
  ability: NameUrlType;
  is_hidden: boolean;
  slot: number;
};

type MovesType = {
  move: NameUrlType;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: NameUrlType;
    version_group: NameUrlType;
  }[];
};

type TypesType = {
  slot: number;
  type: NameUrlType;
};

export interface PokemonListType extends Pokemon {
  abilities: AbilitiesType[];
  moves: MovesType[];
  types: TypesType[];
}

export interface PokemonDetailType extends Pokemon {
  abilities: AbilitiesType[] & {
    ability: NameUrlType & { korean_name: string };
  };
  moves: MovesType[] & {
    move: NameUrlType & { korean_name: string };
  };
  types: TypesType[] & {
    type: NameUrlType & { korean_name: string };
  };
}

type SpritesTypes = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

const SPRITES_IMAGE_KEYS = {
  back_default: "back_default",
  back_shiny: "back_shiny",
  front_default: "front_default",
  front_shiny: "front_shiny",
};

const SPRITES_FEMALE_IMAGE_KEYS = {
  back_female: "back_female",
  back_shiny_female: "back_shiny_female",
  front_female: "front_female",
  front_shiny_female: "front_shiny_female",
};

type SpritesImagesTypes = {
  [K in keyof typeof SPRITES_IMAGE_KEYS]: string;
} & {
  [K in keyof typeof SPRITES_FEMALE_IMAGE_KEYS]: null;
};
