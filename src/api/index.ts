import axios from 'axios';
import { Status } from 'src/model/planet';
import { Planet, PlanetResult } from 'src/model/planetAPIResult';

export const addFavoritesIntoResponse = (
  resultsPlanet: Planet[],
  favorites: Planet[]
) => {
  const results: Planet[] = resultsPlanet.map((planet) => {
    if (favorites.find((favorite) => favorite.name === planet.name)) {
      return { ...planet, favorite: true };
    }
    return { ...planet, favorite: false };
  });
  return results;
};

export const getPlanets = async (
  page: number,
  favorites: Planet[] | [],
  setPlanets: (planets: Planet[] | []) => void,
  setStatus: (status: Status) => void
) => {
  try {
    setStatus('loading');
    const response = await axios.get<PlanetResult>(`planets/?page=${page}`);
    const data: PlanetResult = {
      ...response.data,
      results: addFavoritesIntoResponse(response.data.results, favorites),
    };
    setPlanets(data.results);
    setStatus('idle');
    return data;
  } catch (error) {
    setStatus('error');
    console.log('API Error: ' + error);
  }
};
