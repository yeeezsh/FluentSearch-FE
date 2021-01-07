import styled from 'styled-components';

export const MenuPStyled = styled.p<{ isSelecting: boolean }>`
  color: ${(props) => (props.isSelecting ? '#0BB5C2' : 'black')};
  cursor: pointer;
  &:hover {
    color: #0bb5c2;
  }
`;
