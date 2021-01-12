import styled from 'styled-components';
import { ImageProps } from '../Layouts/types';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LoadedImage = ({ url, key }: ImageProps): JSX.Element => {
  return <Img src={url} key={key} alt="" />;
};
