import { PokemonType } from "@/utils/colorType";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";

const chipVariants = cva("text-white px-2 py-1 mr-2 rounded-full", {
  variants: {
    intent: {
      grass: "bg-green-500",
      poison: "bg-purple-500",
      fire: "bg-red-500",
      water: "bg-blue-500",
      bug: "bg-green-500",
      normal: "bg-gray-500",
      electric: "bg-yellow-500",
      ground: "bg-yellow-500",
      fairy: "bg-pink-500",
      fighting: "bg-red-500",
      psychic: "bg-pink-500",
      rock: "bg-gray-500",
      ghost: "bg-purple-500",
      ice: "bg-blue-500",
      dragon: "bg-indigo-500",
      dark: "bg-gray-500",
      steel: "bg-gray-500",
      flying: "bg-gray-500",
    },
  },
  defaultVariants: {
    intent: "flying",
  },
});

type ButtonVariant = VariantProps<typeof chipVariants>;

type ChipProps = {
  text: string;
  type?: PokemonType;
} & ButtonVariant &
  ComponentProps<"span">;

const Chip = ({ intent, text }: ChipProps) => {
  return (
    <>
      <span className={chipVariants({ intent })}>{text}</span>
    </>
  );
};

export default Chip;
