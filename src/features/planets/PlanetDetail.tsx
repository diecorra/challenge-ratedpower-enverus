import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { usePlanets } from 'src/store/planets';
import {
  BodyDetail,
  Description,
  DescriptionSmall,
  StyledDetail,
  TitleDetail,
} from './style';

const PlanetDetail = () => {
  const { id: name } = useParams();
  const planets = usePlanets((state) => state.planets);
  const status = usePlanets((state) => state.status);
  const planet = useMemo(
    () => planets.find((planet) => planet.name === name),
    [name]
  );

  return (
    <>
      {name && status === 'idle' && (
        <StyledDetail data-testid="planetDetail">
          <TitleDetail data-testid="planetDetailTitle">
            {planet ? planet.name : name}
          </TitleDetail>
          <BodyDetail data-testid="planetDetailBody">
            {planet ? (
              <>
                <Description>{`Climate: ${planet.climate}`}</Description>
                <DescriptionSmall>{`Gravity: ${planet.gravity}`}</DescriptionSmall>
              </>
            ) : (
              'Planet not found'
            )}
          </BodyDetail>
        </StyledDetail>
      )}
    </>
  );
};

export default PlanetDetail;
