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
      <SidebarContainer>
        <WrapperBody>
          <Title>PlanetsApp</Title>
          <StyledLink to="/planets">Planets</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </WrapperBody>
        <WrapperFooter>
          <Button onClick={toggleTheme}>{themeMode.toUpperCase()}</Button>
        </WrapperFooter>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
