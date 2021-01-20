import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  margin-bottom: 50%;
  height: 100vh;

  h1 {
    font-size: 3.05rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2.44rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.95rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.56rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  body,
  p,
  span {
    font-size: 1rem;
    margin: 0;
  }
`;

export const CaptionText = styled.p`
  font-size: 0.64rem;
`;

export const ContentWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 35%;
  background-color: #5a36cc;
  z-index: -1;
  padding: 8% 10% 10% 10%;

  @media (max-width: 768px) {
    height: 50%;
    padding-top: 20%;
  }
`;

export const CardWrapper = styled.div`
  margin: 0% 3% 0% 0%;

  @media (max-width: 768px) {
    .ant-card {
      margin-bottom: 10%;
    }
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    .ant-card {
      flex-basis: 100%;
      width: auto;
      min-width: 160px;
      height: auto;
      min-height: 280px;
    }
  }
`;

export const AlbumWrapper = styled.div`
  margin-top: 3%;
`;

export const DashboardHeader = styled.h3`
  color: white;
  @media (max-width: 768px) {
    margin-bottom: 10%;
  }
`;
