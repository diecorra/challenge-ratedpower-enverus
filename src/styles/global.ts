import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Inter', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
button {
  font-family: 'Inter', sans-serif;
}
`;

export const BoxContainer = styled.div`
  height: 100vh;
  display: flex;
`;

export const PageContainer = styled.div`
  flex: 1;
  width: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.body};
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
