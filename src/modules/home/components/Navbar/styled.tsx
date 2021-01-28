import styled from 'styled-components';

export const NavStyle = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 15px 20px 20px;
  display: flex;
  justify-content: space-between;

  background-color: white;
`;

export const MenuDivStyle = styled.div`
  margin-top: 80%;
  font-size: 16px;
`;

export const LogoStyle = styled.div`
  font-weight: 2em;
  display: inline-block;
`;

export const ButtonSideMenuStyle = styled.button`
  background: none;
  border: 0px;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const NavbarContainerRow = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 15px 10px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavbarContainerItem = styled.li`
  list-style: none;
  margin: 1em 1em 1em 1.4em;
  cursor: pointer;
`;

export const MenuItemStyled = styled.p<{ isSelecting: boolean }>`
  color: ${(props) => (props.isSelecting ? '#0BB5C2' : 'black')};
  cursor: pointer;
  &:hover {
    color: #0bb5c2;
  }
`;
