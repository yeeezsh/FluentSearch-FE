import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { AlbumWrapper, Label, Container, Text } from './styled';

type AlbumPreviewProps = {
  src: string;
  children?: React.ReactNode;
  albumName: string;
  albumLength: number;
  label: Array<string>;
  // TODO - required link when have a real props link
  link?: string;
};

const AlbumPreview: React.FC<AlbumPreviewProps> = (props) => {
  // TODO - destructing link from props when have a real props link
  const { src, albumName, albumLength, label } = props;
  const router = useRouter();
  const link = '/';
  return (
    <AlbumWrapper>
      <Container onClick={() => router.push(link)}>
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
