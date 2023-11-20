import { PageContainerMax } from 'src/styles/global';
import Table from './table/Table';
import PlanetDetail from './PlanetDetail';

const Planets = () => {
  return (
    <PageContainerMax data-testid="planetsPage">
      <Table />
      <PlanetDetail />
    </PageContainerMax>
  );
};

export default Planets;
