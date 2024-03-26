"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

const energyLevel = ["1", "2", "3", "4", "5"];

const CustomFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedEnergyLevel = searchParams.get("energy") || energyLevel[0];
  const pathname = usePathname();

  const handleUpdateParams = (energyLevel: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (energyLevel) {
      params.set("energy", energyLevel);
    } else {
      params.delete("energy");
    }
    params.set("energy", energyLevel);
    const url = `${pathname}?${params.toString()}`;
    router.push(url);
  };
  return (
    <div className="w-fit">
      <Listbox
        value={selectedEnergyLevel}
        onChange={(energyLevel) => {
          handleUpdateParams(energyLevel);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="text-darkBrown">Energy Level</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron up down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {energyLevel.map((energy, energyIdx) => (
                <Listbox.Option
                  key={energyIdx}
                  value={energy}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-darkBrown text-white" : "text-darkBrown"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {energy}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
