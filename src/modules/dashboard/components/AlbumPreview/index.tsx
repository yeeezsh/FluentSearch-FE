import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AlbumWrapper, Label, Container, Text } from './styled';
import { AlbumPreviewProps } from './types';

const AlbumPreview: React.FC<AlbumPreviewProps> = (props) => {
  // TODO - destructing link from props when have a real props link
  const { src, albumName, albumLength, label } = props;
  const router = useRouter();
  const link = '/';
  return (
    <AlbumWrapper>
      <Container onClick={() => router.push(link)}>
        <Image src={src} width={300} height={300} />
        {/* TODO - change to 'view album' when have an album*/}
        <Text id="text">View Photo</Text>
      </Container>

      <span>
        <b>{albumName}</b>
      </span>
      <br />
      <span>{albumLength} items</span>
      <br />
      <div style={{ marginTop: '10px' }}>
        {label.map((e, i) => (
          <Label color="purple" key={i}>
            {e}
          </Label>
        ))}
      </div>
    </AlbumWrapper>
  );
};

export default AlbumPreview;
