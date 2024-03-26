"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-darkBrown">Must Love Dogs</h1>
        <p className="hero__subtitle text-darkBrown">
          An all dog breeds encyclopedia for dog lovers
        </p>

        <CustomButton
          title="Explore dog breeds"
          containerStyles="bg-darkBrown text-pink rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
