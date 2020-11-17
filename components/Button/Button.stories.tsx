// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import CustomButton from 'Components/Button/CustomButton';
import { ButtonComponentProps } from 'Components/Button/button.type';
import React from 'react';

export default {
  title: 'DeepFlow/Button',
  component: CustomButton,
} as Meta;

const Template: Story<ButtonComponentProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: 'primary',
  children: 'Button',
} as ButtonComponentProps;

export const Secondary = Template.bind({});
Secondary.args = {
  style: 'secondary',
  children: 'Button',
} as ButtonComponentProps;

export const Danger = Template.bind({});
Danger.args = {
  style: 'danger',
  children: 'Button',
} as ButtonComponentProps;

export const Success = Template.bind({});
Success.args = {
  style: 'success',
  children: 'Button',
} as ButtonComponentProps;

export const Disable = Template.bind({});
Disable.args = {
  style: 'disable',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  style: 'primary',
  size: 'small',
  children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  style: 'primary',
  size: 'medium',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  style: 'primary',
  size: 'large',
  children: 'Button',
};
