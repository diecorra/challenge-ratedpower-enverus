import { styled } from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.button.primary};
  color: ${({ theme }) => theme.text.secondary};
  border-radius: 8px;
  border-style: none;
  height: 40px;
  width: fit-content;
`;
