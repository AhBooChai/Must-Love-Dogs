"use client";
import { useState } from "react";
import Image from "next/image";
import { DogProps } from "@/types";
import CustomButton from "./CustomButton";
import DogDetails from "./DogDetails";

interface DogCardProps {
  dog: DogProps;
}

const DogCard = ({ dog }: DogCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    image_link,
    good_with_children,
    good_with_other_dogs,
    shedding,
    grooming,
    playfulness,
    protectiveness,
    trainability,
    energy,
    barking,
    name,
  } = dog;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title text-darkBrown">{name}</h2>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={image_link}
          alt={name}
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/grooming.png" alt="grooming" width={20} height={20} />
            <p className="text-[14px] text-darkBrown">{grooming}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/barking.png" alt="barking" width={20} height={20} />
            <p className="text-[14px] text-darkBrown">{barking}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/training.png" alt="training" width={20} height={20} />
            <p className="text-[14px] text-darkBrown">{trainability}</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-darkBrown"
            textStyles="text-pink text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <DogDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        dog={dog}
      />
    </div>
  );
};

export default DogCard;
