import { Meta, Story } from '@storybook/react';
import Button from 'Components/Button';
import { ButtonComponentProps } from 'Components/Button/types';
import React from 'react';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Button',
  component: Button,
} as Meta;

const ButtonStory: Story<ButtonComponentProps> = (args) => (
  <>
    <GlobalStyle />
    <Button {...args} />
  </>
);

// Color

export const Default = ButtonStory.bind({});
Default.args = {
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

export const Large = ButtonStory.bind({});
Large.args = {
  color: 'primary',
  size: 'large',
  children: 'Button',
};
