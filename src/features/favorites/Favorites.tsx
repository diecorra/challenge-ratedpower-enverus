import { useFavoritePlanets } from 'src/store/favorite';
import planet from '../../assets/planet.svg';
import { ContainerMessage, PageContainerWithPadding } from 'src/styles/global';
import Card from './Card';
import { CardsContainer } from './style';

const Favorites = () => {
  const favorites = useFavoritePlanets((state) => state.favorites);

  return (
    <PageContainerWithPadding>
      <>
        {favorites.length ? (
          <CardsContainer>
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
          <ContainerMessage>No favorites</ContainerMessage>
        )}
      </>
    </PageContainerWithPadding>
  );
};

export default Favorites;
