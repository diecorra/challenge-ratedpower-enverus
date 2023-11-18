import { Planet } from './planetAPIResult';

export interface FavoriteStore {
  favorites: Planet[] | [];
  addFavorite: (newFavorite: Planet) => void;
  removeFavorite: (nameFavorite: string) => void;
}
