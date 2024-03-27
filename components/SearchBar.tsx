'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import SearchBreed from './SearchBreed';
import SearchButton from './SearchButton';

const SearchBar = () => {
	const urlParam = new URLSearchParams(window.location.search);
	const breedParam = urlParam.get('breed') || '';

	const [breed, setBreed] = useState(breedParam);
	const router = useRouter();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (breed === '') {
			return alert('Please fill in the search bar');
		}

		updateSearchParams(breed.toLowerCase());
	};

	const updateSearchParams = (breed: string) => {
		// const searchParams = new URLSearchParams(window.location.search);

		const searchParams = new URLSearchParams();
		if (breed) {
			searchParams.set('breed', breed);
		} else {
			searchParams.delete('breed');
		}

		// searchParams.delete('energy');
		const newPathname = `${
			window.location.pathname
		}?${searchParams.toString()}`;

		router.push(newPathname, {
			scroll: false,
		});
	};

	return (
		<form className='searchbar' onSubmit={handleSearch}>
			<div className='searchbar__item'>
				<SearchBreed breed={breed} setBreed={setBreed} />
				<SearchButton otherClasses='sm-hidden' />
			</div>
		</form>
	);
};

export default SearchBar;
