import React from 'react';
import Image from 'next/image';

import { AlbumWrapper, Label, Container, Text } from './styled';

type AlbumPreviewProps = {
  src: string;
  children?: React.ReactNode;
  albumName: string;
  albumLength: number;
  label: Array<string>;
};

const AlbumPreview: React.FC<AlbumPreviewProps> = (props) => {
  const { src, albumName, albumLength, label } = props;
  return (
    <AlbumWrapper>
      <Container>
        <Image src={src} width={300} height={300} />
        <Text id="text">Hello World</Text>
      </Container>

      <span>{albumName}</span>
      <br />
      <span>{albumLength} items</span>
      <br />
      {label.map((e, i) => (
        <Label color="purple" key={i}>
          {e}
        </Label>
      ))}
    </AlbumWrapper>
  );
};

export default AlbumPreview;
