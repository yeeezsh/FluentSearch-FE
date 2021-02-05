import { Meta } from '@storybook/react';
import AllPhotosPage from 'Modules/photos/pages/index';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Pages/AllPhotosPage',
  component: AllPhotosPage,
} as Meta;

export const AllPhotoStories = (): JSX.Element => (
  <>
    <GlobalStyle />
    <AllPhotosPage />
  </>
);
