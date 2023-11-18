import { useFavoritePlanets } from 'src/store/favorite';
import planet from '../../assets/planet.svg';
import { PageContainer } from 'src/styles/global';
import Card from './Card';

const Favorites = () => {
  const favorites = useFavoritePlanets((state) => state.favorites);

  return (
    <PageContainer style={{ padding: '20px' }}>
      <>
        {favorites.length ? (
          <div
            style={{
              display: 'flex',
              gap: '5rem',
              flexWrap: 'wrap',
            }}
          >
            {favorites.map((favorite) => (
              <Card
                key={favorite.name}
                image={planet}
                title={favorite.name}
                firstDescription={'Climate: ' + favorite.climate}
                secondDescription={'Gravity: ' + favorite.gravity}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            No favorites
          </div>
        )}
      </>
    </PageContainer>
  );
};

export default Favorites;
