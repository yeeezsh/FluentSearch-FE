import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type ImageProps = {
  url: string;
  key: string;
};

export const LoadedImage = ({ url, key }: ImageProps): JSX.Element => {
  return <Img src={url} key={key} alt="" />;
};
