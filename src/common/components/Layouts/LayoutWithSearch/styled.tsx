import styled, { css } from 'styled-components';
import { Layout } from 'antd';
const { Sider, Content } = Layout;

type ContentWithPaddingPropsType = {
  padding: boolean;
};

export const CanvasWrapper = styled.div`
  overflow: hidden;

  aside {
    width: 250px !important;
    max-width: 250px !important;
    min-width: 250px !important;
    flex: 0 0 250px !important;
  }

  .ant-layout-header {
    background-color: white;
    position: fixed;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 999;
    /* margin-left: 10%; */
  }

  .ant-layout-content {
    background-color: white;
    overflow-y: scroll;
    width: 100%;

    @media (min-width: 1600px) {
      padding: 10% 5% 5% 10%;
    }
    @media (min-width: 1200px) and (max-width: 1599px) {
      padding: 10% 5% 5% 15%;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      padding: 10% 5% 5% 20%;
    }
    @media (max-width: 991px) {
      padding: 20% 10% 5% 10%;
    }
  }
`;

export const ContentWrapper = styled(Layout)`
  margin-left: 10%;

  @media (max-width: 992px) {
    margin-left: 0%;
  }
`;

export const SiderWrapper = styled(Sider)`
  background-color: #4425a7;
  padding: 5% 2% 0% 2%;
  overflow: hidden;
  z-index: 1000;
  left: 0;
  position: fixed;
  height: 100vh;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  margin-top: 30%;
  width: 100%;
`;

export const IconWrapper = styled.span`
  margin-right: 10%;
`;

export const MenuItem = styled.div<{ isSelecting: boolean }>`
  width: 100%;
  cursor: pointer;
  color: white;

  p:hover {
    padding: 1em 1em 1em 1em;
    border-radius: 0.5em;
    background-color: #48cdd8;
  }

  p {
    padding: 1em 1em 1em 1em;
    border-radius: 0.5em;
    background-color: transparent;
  }

  ${(props) =>
    props.isSelecting &&
    css`
      p {
        padding: 1em 1em 1em 1em;
        border-radius: 0.5em;
        background-color: white;
        color: #4425a7;
        font-weight: 600;
      }

      p:hover {
        padding: 1em 1em 1em 1em;
        border-radius: 0.5em;
        background-color: #9271fc;
      }
    `}
`;

export const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

export const UserWrapper = styled.div`
  cursor: default;

  .ant-avatar-circle {
    color: #fde3cf;
    background-color: #f56a00;
  }
  .ant-avatar-circle :hover {
    color: #f56a00;
    background-color: #fde3cf;
  }
`;

export const ContentWithPadding = styled(Content)<ContentWithPaddingPropsType>`
  ${(props) =>
    props.padding &&
    `
    padding: 5% 0% 5% 0%;
    margin-left: 5%;
  `}
`;
