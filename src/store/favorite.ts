import { FavoriteStore } from 'src/model/favorite';
import { Planet } from 'src/model/planetAPIResult';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritePlanets = create<FavoriteStore>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (newFavorite: Planet) =>
        set((state: FavoriteStore) => ({
          favorites: [...state.favorites, newFavorite],
        })),
      removeFavorite: (nameFavorite: string) =>
        set((state: any) => ({
          favorites: state.favorites.filter(
            (favorite: Planet) => favorite.name !== nameFavorite
          ),
        })),
    }),
    {
      name: 'favoritesPlanets',
    }
  )
);
