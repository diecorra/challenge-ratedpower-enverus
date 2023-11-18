import { Button } from '../../styles/button';
import { useThemeStore } from '../../store/theme';
import { SidebarContainer, StyledLink, Title, Wrapper } from './style';

const Sidebar: React.FC = () => {
  const toggleTheme = useThemeStore((state) => state.changeTheme);
  const themeMode = useThemeStore((state) => state.theme);

  return (
    <>
      <SidebarContainer>
        <Wrapper style={{ height: '90%' }}>
          <Title>PlanetsApp</Title>
          <StyledLink to="/planets">Planets</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Wrapper>
        <Wrapper style={{ padding: '1rem' }}>
          <Button onClick={toggleTheme}>{themeMode.toUpperCase()}</Button>
        </Wrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
