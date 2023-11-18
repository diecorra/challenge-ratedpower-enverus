import { useState } from 'react';
import { Overlay } from 'src/styles/global';
import { useFavoritePlanets } from 'src/store/favorite';
import { CardProps } from 'src/model/card';
import {
  BodySection,
  Button,
  ButtonSection,
  MessageSection,
  ModalCloseIcon,
  ModalContainer,
  ModalTitle,
  ModalTitleSection,
  RemoveButton,
} from './modalStyle';
import {
  CardBox,
  CardImg,
  CardStyle,
  Description,
  DescriptionSection,
  RemoveIcon,
  Title,
  TitleSection,
} from './style';

const Card = ({
  image,
  title,
  firstDescription,
  secondDescription,
}: CardProps) => {
  const [showModal, setIsShowModal] = useState(false);
  const removeFavorite = useFavoritePlanets((state) => state.removeFavorite);

  return (
    <>
      {showModal ? (
        <Overlay onClick={() => setIsShowModal(!showModal)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitleSection>
              <ModalTitle>Remove favorite</ModalTitle>
              <ModalCloseIcon onClick={() => setIsShowModal(false)} />
            </ModalTitleSection>
            <BodySection>
              <MessageSection>
                Planet will be removed from favorites
              </MessageSection>
              <ButtonSection>
                <Button onClick={() => setIsShowModal(false)}>Cancel</Button>
                <RemoveButton onClick={() => removeFavorite(title)}>
                  Remove
                </RemoveButton>
              </ButtonSection>
            </BodySection>
          </ModalContainer>
        </Overlay>
      ) : null}
      <CardStyle>
        <CardBox>
          <TitleSection>
            <Title>{title}</Title>
          </TitleSection>
          <RemoveIcon onClick={() => setIsShowModal(true)} />
          <CardImg src={image} alt={title} />
          <DescriptionSection>
            <Description>{firstDescription}</Description>
            <Description>{secondDescription}</Description>
          </DescriptionSection>
        </CardBox>
      </CardStyle>
    </>
  );
};

export default Card;
