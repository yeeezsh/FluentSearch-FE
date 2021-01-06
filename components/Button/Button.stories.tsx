// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import Button from 'Components/Button/Button';
import { ButtonComponentProps } from 'Components/Button/button.type';
import React from 'react';

export default {
  title: 'FluentSearch/Button',
  component: Button,
} as Meta;

const ButtonStory: Story<ButtonComponentProps> = (args) => <Button {...args} />;

// Color

export const Primary = ButtonStory.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button',
};

export const Secondary = ButtonStory.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Button',
};

export const Danger = ButtonStory.bind({});
Danger.args = {
  color: 'danger',
  children: 'Button',
};

export const Success = ButtonStory.bind({});
Success.args = {
  color: 'success',
  children: 'Button',
};

export const Disable = ButtonStory.bind({});
Disable.args = {
  color: 'disable',
  children: 'Button',
};

// Size

export const Small = ButtonStory.bind({});
Small.args = {
  color: 'primary',
  size: 'small',
  children: 'Button',
};

export const Medium = ButtonStory.bind({});
Medium.args = {
  color: 'primary',
  size: 'medium',
  children: 'Button',
};

export const Large = ButtonStory.bind({});
Large.args = {
  color: 'primary',
  size: 'large',
  children: 'Button',
};
