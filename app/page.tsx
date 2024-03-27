import { CustomFilter, DogCard, Hero, SearchBar } from '@/components';
import { fetchPups } from '@/utils';

export default async function Home({ searchParams }) {
	const allPups = await fetchPups({
		name: searchParams.breed || '',
		grooming: searchParams.grooming || '',
		trainability: searchParams.trainability || '',
		energy: searchParams.energy || '',
		limit: searchParams.limit || 10,
	});
	const isDataEmpty = !Array.isArray(allPups) || allPups.length < 1 || !allPups;

	return (
		<main className='overflow-hidden bg-pink'>
			<Hero />

			<div className='mt-12 padding-x padding-y max-width' id='discover'>
				<div className='home__container'>
					<h1 className='text-4xl font-extrabold text-darkBrown'>Dog Breeds</h1>
					<p className='text-darkBrown'>Get to know your favourite dog breed</p>
				</div>

				<div className='home__filters'>
					<SearchBar />

					<div className='home__filter-container'>
						<CustomFilter />
					</div>
				</div>

				{!isDataEmpty ? (
					<section>
						<div className='home__cars-wrapper'>
							{allPups?.map((dog, index) => (
								<DogCard key={index} dog={dog} />
							))}
						</div>
					</section>
				) : (
					<div className='home__error-container'>
						<h2 className='text-black text-xl font-bold'>
							Oops, all the doggies have left the house
						</h2>
						<p>{allPups?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}
