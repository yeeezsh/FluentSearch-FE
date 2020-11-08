// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import CustomButton, { ButtonComponentProps } from '../components/Button/CustomButton';

export default {
  title: 'DeepFlow/Button',
  component: CustomButton,
} as Meta;

const Template: Story<ButtonComponentProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  typeButton: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  typeButton: 'secondary',
  children: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  typeButton: 'danger',
  children: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  typeButton: 'success',
  children: 'Button',
};

export const Disable = Template.bind({});
Disable.args = {
  typeButton: 'disable',
  children: 'Button',
};
