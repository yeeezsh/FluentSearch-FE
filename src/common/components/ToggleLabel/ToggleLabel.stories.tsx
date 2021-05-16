import { Meta, Story } from '@storybook/react';
import React from 'react';
import ToggleLabel from '.';
import { ToggleLabelProps } from './types';

export default {
  title: 'FluentSearch/ToggleLabel',
  component: ToggleLabel,
} as Meta;

const ToggleLabelStories: Story<ToggleLabelProps> = (args) => <ToggleLabel {...args} />;

export const Default = ToggleLabelStories.bind({});
Default.args = {
  selected: false,
  children: 'Label',
};

export const Selected = ToggleLabelStories.bind({});
Selected.args = {
  selected: true,
  children: 'Label',
};
