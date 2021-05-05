import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  height: 100vh;
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
  @media (max-width: 768px) {
    height: 50%;
    padding-top: 20%;
    padding: 8% 10% 10% 10%;
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
  margin-top: 5%;
  padding-bottom: 5%;
`;

export const DashboardHeader = styled.h3`
  color: white;
  @media (max-width: 768px) {
    margin-bottom: 10%;
  }
`;
