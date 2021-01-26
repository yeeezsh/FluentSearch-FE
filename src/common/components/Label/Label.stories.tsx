import { Meta, Story } from '@storybook/react';
import Label from 'Components/Label';
import React from 'react';
import { LabelProps } from './types';

export default {
  title: 'FluentSearch/Label',
  component: Label,
} as Meta;

const LabelStories: Story<LabelProps> = (args) => <Label {...args} />;

// Color

export const Default = LabelStories.bind({});
Default.args = {
  color: 'purple',
  children: 'Button',
};

export const Secondary = LabelStories.bind({});
Secondary.args = {
  color: 'orange',
  children: 'Button',
};
