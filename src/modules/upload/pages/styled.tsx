import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

export const BottomBar = styled(Footer)`
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  position: fixed;
  height: 6rem;
  bottom: 0;
  width: 100%;
  text-align: right;
`;

export const UploadWrapper = styled.div`
  height: 100vh;
  padding: 5%;
  background-color: white;

  .ant-layout-content {
    background-color: white;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LabelUpload = styled.label`
  background-color: indigo;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
`;
