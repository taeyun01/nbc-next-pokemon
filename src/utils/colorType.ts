export type PokemonType =
  | "grass"
  | "poison"
  | "fire"
  | "water"
  | "bug"
  | "normal"
  | "electric"
  | "ground"
  | "fairy"
  | "fighting"
  | "psychic"
  | "rock"
  | "ghost"
  | "ice"
  | "dragon"
  | "dark"
  | "steel"
  | "flying";

export function getTypeColor(type: PokemonType): string {
  switch (type) {
    case "grass":
      return "bg-green-500";
    case "poison":
      return "bg-purple-500";
    case "fire":
      return "bg-red-500";
    case "water":
      return "bg-blue-500";
    case "bug":
      return "bg-green-500";
    case "normal":
      return "bg-gray-500";
    case "electric":
      return "bg-yellow-500";
    case "ground":
      return "bg-yellow-500";
    case "fairy":
      return "bg-pink-500";
    case "fighting":
      return "bg-red-500";
    case "psychic":
      return "bg-pink-500";
    case "rock":
      return "bg-gray-500";
    case "ghost":
      return "bg-purple-500";
    case "ice":
      return "bg-blue-500";
    case "dragon":
      return "bg-indigo-500";
    case "dark":
      return "bg-gray-500";
    case "steel":
      return "bg-gray-500";
    case "flying":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
}
