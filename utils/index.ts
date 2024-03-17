import { FilterProps } from "@/types";

export async function fetchPups(filters: FilterProps) {
  const { name, grooming, trainability, energy, limit } = filters;
  const headers = {
    "X-RapidAPI-Key": "2305479ee6msh31bd6b4498bbc2ep1a95bbjsnd74fa04ccb35",
    "X-RapidAPI-Host": "dogs-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=${name}&grooming=${grooming}&trainability=${trainability}&energy=${energy}&limit=${limit}`,
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
