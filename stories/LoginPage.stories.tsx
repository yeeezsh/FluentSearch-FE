import { Meta } from '@storybook/react';
import LoginPage from 'Modules/user/pages/login';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Pages/LoginPage',
  component: LoginPage,
} as Meta;

export const LoginStories = (): JSX.Element => {
  return (
    <>
      <GlobalStyle /> <LoginPage />
    </>
  );
};
