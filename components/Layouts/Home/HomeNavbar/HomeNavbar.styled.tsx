import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 15px 20px 20px;
  display: flex;
  justify-content: space-between;

  background-color: white;
`;

export const Logo = styled.div`
  padding-top: 15px;
  font-weight: 2em;
`;

export const BtnSideMenu = styled.button`
  background: none;
  border: 0px;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const Ul = styled.ul`
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

export const Li = styled.li`
  list-style: none;
  margin: 1em 1em 1em 1.4em;
`;
