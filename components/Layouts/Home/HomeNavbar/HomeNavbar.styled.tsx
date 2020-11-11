import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

export const BtnSideMenu = styled.button`
  background: none;
  border: 0px;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;
