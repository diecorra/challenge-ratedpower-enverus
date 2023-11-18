import { styled } from 'styled-components';

export const StyledDetail = styled.div`
  width: 20%;
  height: 100%;
  background-color: ${({ theme }) => theme.navigator.primary};
  min-width: 250px;
`;

export const TitleDetail = styled.div`
  text-align: center;
  padding: 1rem;
  color: ${({ theme }) => theme.detail.title};
  font-size: 16px;
`;

export const BodyDetail = styled.div`
  color: ${({ theme }) => theme.detail.body};
  height: 110px;
  width: 240px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.detail.background};
  gap: 5px;
`;

export const Description = styled.p`
  margin: 0;
`;

export const DescriptionSmall = styled(Description)`
  font-size: 12px;
`;
