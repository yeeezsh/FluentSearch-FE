import { Meta } from '@storybook/react/types-6-0';
import LoginPage from 'Modules/user/pages/login';

export default {
  title: 'FluentSearch/Pages/LoginPage',
  component: LoginPage,
} as Meta;

export const LoginStories = (): JSX.Element => <LoginPage />;
