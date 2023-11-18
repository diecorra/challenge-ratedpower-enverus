import { Planet } from './planetAPIResult';

export interface PlanetStore {
  planets: Planet[] | [];
  setPlanets: (planets: Planet[] | []) => void;
  status: Status;
  setStatus: (status: Status) => void;
}

export type Status = 'idle' | 'error' | 'loading';
