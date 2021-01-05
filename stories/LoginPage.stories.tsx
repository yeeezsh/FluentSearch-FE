import { Meta, Story } from '@storybook/react/types-6-0';
import Login from 'Pages/login';
import React from 'react';

export default {
  title: 'FluentSearch/LoginPage',
  component: Login,
} as Meta;

const Template: Story = (args) => <Login {...args} />;

export const LoginPage = Template.bind({});
