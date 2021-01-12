import styled from 'styled-components';

export const GroupThumbnailPhotosWrapper = styled.div`
  max-width: 100%;
  display: grid;
  grid-gap: 8px 8px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-rows: 300px;
`;

export const PhotoThumbnailStyled = styled.div`
  display: flex;
  width: 200px;
`;
