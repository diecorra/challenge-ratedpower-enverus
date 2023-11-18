import { useNavigate } from 'react-router-dom';
import { PageContainer } from 'src/styles/global';
import { ErrorContainer } from './style';
import { Button } from 'src/styles/button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ErrorContainer>
        Page not found!
        <Button onClick={() => navigate('/planets')}>Go to Planets page</Button>
      </ErrorContainer>
    </PageContainer>
  );
};

export default NotFound;
