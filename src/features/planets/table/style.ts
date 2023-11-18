import styled from 'styled-components';

export const StyledTable = styled.table<{ $detailVisualized: boolean }>`
  width: ${(props) => (props.$detailVisualized ? 80 : 100)}%;
  border-collapse: collapse;
  color: ${({ theme }) => theme.table.text};
  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const StyledTh = styled.th`
  border: 3.5px solid ${({ theme }) => theme.table.border};
  text-transform: uppercase;
  padding: 8px;
`;

export const StyledTd = styled.td`
  border: 2px solid ${({ theme }) => theme.table.border};
  padding: 10px;
  text-align: center;
`;

export const StyledTr = styled.tr`
  cursor: pointer;
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.table.alternate};
  }
  &:hover {
    background-color: ${({ theme }) => theme.table.hover};
  }
`;

export const StyledTrHeader = styled.tr`
  cursor: default;
`;

export const StyledTHead = styled.thead`
  // Your thead styles
`;

export const StyledTBody = styled.tbody`
  // Your thead styles
`;

export const StyledTFoot = styled.tfoot`
  // Your thead styles
`;

export const ButtonPages = styled.button`
  cursor: pointer;
  width: 3rem;
  color: ${({ theme }) => theme.text.primary};
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.button.border};
  padding: 4px;
  background-color: ${({ theme }) => theme.button.primary};
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.button.secondary};
  }
`;

export const NavigatorTable = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.text.primary};
`;
