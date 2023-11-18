import { PlanetStore, Status } from 'src/model/planet';
import { Planet } from 'src/model/planetAPIResult';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePlanets = create<PlanetStore>()(
  persist(
    (set) => ({
      planets: [],
      setPlanets: (planets: Planet[] | []) =>
        set((state: PlanetStore) => ({
          planets: [...state.planets, ...planets],
        })),
      status: 'idle',
      setStatus: (status: Status) => set({ status }),
    }),
    {
      name: 'favoritesPlanets',
    }
  )
);
