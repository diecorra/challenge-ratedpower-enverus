import { PageContainer } from 'src/styles/global';
import Table from './table/Table';
import PlanetDetail from './PlanetDetail';

const Planets = () => {
  return (
    <PageContainer style={{ display: 'flex', width: '100%', height: '100%' }}>
      <Table />
      <PlanetDetail />
    </PageContainer>
  );
};

export default Planets;
