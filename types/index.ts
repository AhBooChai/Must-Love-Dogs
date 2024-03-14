import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchBreedProps {
  breed: string;
  setBreed: (breed: string) => void;
}

export interface DogProps {
  image_link: string;
  good_with_children: number;
  good_with_other_dogs: number;
  shedding: number;
  grooming: number;
  playfulness: number;
  protectiveness: number;
  trainability: number;
  energy: number;
  barking: number;
  name: string;
}
