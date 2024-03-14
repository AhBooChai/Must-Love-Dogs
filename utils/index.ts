export async function fetchPups() {
  const headers = {
    "X-RapidAPI-Key": "2305479ee6msh31bd6b4498bbc2ep1a95bbjsnd74fa04ccb35",
    "X-RapidAPI-Host": "dogs-by-api-ninjas.p.rapidapi.com",
  };

  const url =
    "https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=dalmatian&shedding=4";

  const response = await fetch(url, { headers: headers });

  const result = await response.json();

  return result;
}
