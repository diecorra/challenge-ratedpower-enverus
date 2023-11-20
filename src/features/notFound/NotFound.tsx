import { useNavigate } from 'react-router-dom';
import { ContainerMessage, PageContainer } from 'src/styles/global';
import { Button } from 'src/styles/button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ContainerMessage data-testid="notFound">
        Page not found!
        <Button onClick={() => navigate('/planets')}>Go to Planets page</Button>
      </ContainerMessage>
    </PageContainer>
  );
};

export default NotFound;
