import { Meta, Story } from '@storybook/react/types-6-0';
import LoginPage from 'Modules/user/page/login';

export default {
  title: 'FluentSearch/LoginPage',
  component: LoginPage,
} as Meta;

const Template: Story = (args) => <LoginPage {...args} />;

export const LoginStories = Template.bind({});
