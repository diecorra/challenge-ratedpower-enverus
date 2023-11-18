import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
`;

export const CardStyle = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.card.background};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardBox = styled.div`
  width: 20rem;
  height: 20rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const TitleSection = styled.div`
  padding: 2px 16px;
  height: 20%;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 60%;
`;

export const DescriptionSection = styled.div`
  padding: 2px 16px;
  height: 20%;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
`;

export const RemoveIcon = styled(IoIosClose)`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 30px;
  cursor: pointer;
`;
