'use client';

import { dogBreeds } from '@/constants';
import { SearchBreedProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const SearchBreed = ({ breed, setBreed }: SearchBreedProps) => {
	const urlParam = new URLSearchParams(window.location.search);
	const breedParam = urlParam.get('breed') || '';
	const [query, setQuery] = useState(breedParam);

	const filteredBreeds =
		query === ''
			? dogBreeds
			: dogBreeds.filter((item) =>
					item
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
			  );

	return (
		<div className='search-manufacturer'>
			<Combobox value={breed} onChange={setBreed}>
				<div className='relative w-full'>
					<Combobox.Button className='absolute top-[14px]'>
						<Image
							src='/paw.png'
							width={20}
							height={20}
							className='ml-4'
							alt='paw'
						/>
					</Combobox.Button>

					<Combobox.Input
						className='search-manufacturer__input shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'
						placeholder='greyhound'
						displayValue={(breed: string) => breed}
						onChange={(e) => setQuery(e.target.value)}
						defaultValue={breed}
					/>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						afterLeave={() => setQuery('')}
					>
						<Combobox.Options>
							{filteredBreeds.map((item) => (
								<Combobox.Option
									key={item}
									className={({ active }) =>
										`relative search-manufacturer__option ${
											active ? 'bg-primary-blue text-white' : 'text-gray-900'
										}`
									}
									value={item}
								>
									{({ selected, active }) => (
										<>
											<span
												className={`block truncate ${
													selected ? 'font-medium' : 'font-normal'
												}`}
											>
												{item}
											</span>
											{selected ? (
												<span
													className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
														active ? 'text-white' : 'text-teal-600'
													}`}
												></span>
											) : null}
										</>
									)}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

export default SearchBreed;
