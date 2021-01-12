import { ImageProps } from '../Layouts/types';
import { Img } from './styled';

export const LoadedImage = ({ url, key }: ImageProps): JSX.Element => {
  return <Img src={url} key={key} alt="" />;
};
