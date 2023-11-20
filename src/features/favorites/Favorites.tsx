import { useFavoritePlanets } from 'src/store/favorite';
import planet from '../../assets/planet.svg';
import { ContainerMessage, PageContainerWithPadding } from 'src/styles/global';
import Card from './Card';
import { CardsContainer } from './cardStyle';

const Favorites = () => {
  const favorites = useFavoritePlanets((state) => state.favorites);

  return (
    <PageContainerWithPadding data-testid="favoritesPage">
      <>
        {favorites.length ? (
          <CardsContainer data-testid="card">
            {favorites.map((favorite) => (
              <Card
                key={favorite.name}
                image={planet}
                title={favorite.name}
                firstDescription={'Climate: ' + favorite.climate}
                secondDescription={'Gravity: ' + favorite.gravity}
              />
            ))}
          </CardsContainer>
        ) : (
          <ContainerMessage data-testid="noFavContainer">
            No favorites
          </ContainerMessage>
        )}
      </>
    </PageContainerWithPadding>
  );
};

export default Favorites;
