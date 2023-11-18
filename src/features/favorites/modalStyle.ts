import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.modal.body};
  width: 400px;
  height: 180px;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const ModalTitleSection = styled.div`
  background-color: ${({ theme }) => theme.modal.header};
  height: 30%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.modal.title};
  font-size: 16px;
  font-weight: 700;
  padding-left: 10px;
`;

export const ModalCloseIcon = styled(IoIosClose)`
  font-size: 30px;
  cursor: pointer;
  padding-right: 5px;
  margin: 0;
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const BodySection = styled.div`
  height: 70%;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MessageSection = styled.p`
  color: ${({ theme }) => theme.modal.text};
  font-weight: 300;
  padding-left: 10px;
`;

export const ButtonSection = styled.p`
  display: flex;
  justify-content: end;
  padding-right: 10px;
  gap: 10px;
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

export const RemoveButton = styled(Button)`
  background-color: ${({ theme }) => theme.modal.button};
  color: ${({ theme }) => theme.text.secondary};
`;
