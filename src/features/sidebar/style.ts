import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const SidebarContainer = styled.div`
  width: 15rem;
  height: 100%;
  background-color: ${({ theme }) => theme.navigator.primary};
  color: ${({ theme }) => theme.text.secondary};
  top: 0;
  left: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  padding: 1rem;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const WrapperBody = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  height: 90%;
`;

export const WrapperFooter = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.text.secondary};
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;
  &:hover:not(.active) {
    background-color: ${({ theme }) => theme.navigator.secondary};
    transform: scale(1.05);
  }
  &.active {
    background-color: ${(props) => props.theme.navigator.secondary};
  }
`;
