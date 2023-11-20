import { Button } from '../../styles/button';
import { useThemeStore } from '../../store/theme';
import {
  SidebarContainer,
  StyledLink,
  Title,
  WrapperBody,
  WrapperFooter,
} from './style';

const Sidebar: React.FC = () => {
  const toggleTheme = useThemeStore((state) => state.changeTheme);
  const themeMode = useThemeStore((state) => state.theme);

  return (
    <>
      <SidebarContainer data-testid="sidebar">
        <WrapperBody>
          <Title data-testid="sidebar-title">PlanetsApp</Title>
          <StyledLink data-testid="planets-link" to="/planets">
            Planets
          </StyledLink>
          <StyledLink data-testid="favorites-link" to="/favorites">
            Favorites
          </StyledLink>
        </WrapperBody>
        <WrapperFooter>
          <Button data-testid="changetheme-button" onClick={toggleTheme}>
            {themeMode.toUpperCase()}
          </Button>
        </WrapperFooter>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
