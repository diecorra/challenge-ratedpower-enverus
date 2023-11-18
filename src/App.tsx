import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useThemeStore } from './store/theme';
import { darkTheme, lightTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { BoxContainer, GlobalStyle } from './styles/global';
import Sidebar from './features/sidebar/SideBar';
import Planets from './features/planets/Planets';
import Favorites from './features/favorites/Favorites';
import NotFound from './features/notFound/NotFound';

function App() {
  const themeMode = useThemeStore((state) => state.theme);

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <BoxContainer>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Navigate to="planets" />} />
            <Route path="planets" element={<Planets />} />
            <Route path="planets/:id" element={<Planets />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BoxContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
