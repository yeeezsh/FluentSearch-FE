import { Meta } from '@storybook/react/types-6-0';
import RegisterPage from 'Modules/user/pages/register';

export default {
  title: 'FluentSearch/Pages/RegisterPage',
  component: RegisterPage,
} as Meta;

export const RegisterStories = (): JSX.Element => <RegisterPage />;
