import styled from 'styled-components';
import { Layout } from 'antd';
const { Sider } = Layout;

export const ContentWrapper = styled.div`
  margin: 7% 5% 5% 5%;
`;

export const CanvasWrapper = styled.div`
  .ant-layout-header {
    background-color: white;
    position: fixed;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .ant-layout-content {
    height: 100vh;
    background-color: white;
    overflow-y: scroll;
  }
`;

export const SiderWrapper = styled(Sider)`
  background-color: #4425a7;
  width: 294px;
  padding: 2%;
  overflow: hidden;
  z-index: 1000;
`;

export const MenuWrapper = styled.div`
  margin-top: 20%;
  width: 100%;
`;

export const Menu = styled.div`
  margin-top: 20%;
  a:hover {
    padding: 10%;
    border-radius: 2em;
    background-color: #48cdd8;
  }
  a:active {
    padding: 10%;
    border-radius: 2em;
    background-color: #48cdd8;
    position: inherit;
  }
  a {
    color: white;
  }
  width: 100%;
`;

export const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;
