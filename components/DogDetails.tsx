"use client";
import { DogProps } from "@/types";
import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

interface DogDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  dog: DogProps;
}

const DogDetails = ({ isOpen, closeModal, dog }: DogDetailsProps) => {
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
    drooling,
  } = dog;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto tranform rounded-2xl bg-white p-6 text-darkBrown/70 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-1 right-2 z-10 w-fit p-2 bg-pink rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-60 bg-cover bg-center rounded-lg">
                      <Image
                        src={image_link}
                        alt={name}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">{name}</h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-darkBrown/70 capitalize">
                          Barking
                        </h4>
                        <p className="text-darkBrown font-semibold">
                          {barking}
                        </p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-darkBrown/70 capitalize">
                          Grooming
                        </h4>
                        <p className="text-darkBrown font-semibold">
                          {grooming}
                        </p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-darkBrown/70 capitalize">
                          Drooling
                        </h4>
                        <p className="text-darkBrown font-semibold">
                          {drooling}
                        </p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-darkBrown/70 capitalize">
                          Shedding
                        </h4>
                        <p className="text-darkBrown font-semibold">
                          {shedding}
                        </p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-darkBrown/70 capitalize">
                          Energy Level
                        </h4>
                        <p className="text-darkBrown font-semibold">{energy}</p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-darkBrown/70 capitalize">
                          Trainability
                        </h4>
                        <p className="text-darkBrown font-semibold">
                          {trainability}
                        </p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-darkBrown/70 capitalize">
                          Protectiveness
                        </h4>
                        <p className="text-darkBrown font-semibold">
                          {protectiveness}
                        </p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-darkBrown/70 capitalize">
                          Playfulness
                        </h4>
                        <p className="text-darkBrown font-semibold">
                          {playfulness}
                        </p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-darkBrown/70 capitalize">
                          Good with children
                        </h4>
                        <p className="text-darkBrown font-semibold">
                          {good_with_children}
                        </p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-darkBrown/70 capitalize">
                          Good with other dogs
                        </h4>
                        <p className="text-darkBrown font-semibold">
                          {good_with_other_dogs}
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DogDetails;
