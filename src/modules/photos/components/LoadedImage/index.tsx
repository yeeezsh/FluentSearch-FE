import { ImageProps } from 'Components/Layouts/LayoutWithSearch/types';
import { Img } from './styled';

// TODO: not use ?
export const LoadedImage = ({ url, key }: ImageProps): JSX.Element => {
  return <Img src={url} key={key} alt="" />;
};
