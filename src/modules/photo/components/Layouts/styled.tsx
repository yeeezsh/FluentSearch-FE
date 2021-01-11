import styled from 'styled-components';
import { Layout } from 'antd';
const { Sider } = Layout;

export const CanvasWrapper = styled.div`
  .ant-layout-header {
    background-color: white;
  }

  .ant-layout-content {
    height: 100vh;
    background-color: white;
  }
`;

export const SiderWrapper = styled(Sider)`
  background-color: #4425a7;
  width: 294px;
  padding: 2%;
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
