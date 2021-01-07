import { Meta, Story } from '@storybook/react/types-6-0';
import Register from 'Pages/register';
import React from 'react';

export default {
  title: 'FluentSearch/Pages/RegisterPage',
  component: Register,
} as Meta;

const Template: Story = (args) => <Register {...args} />;

export const RegisterPage = Template.bind({});
