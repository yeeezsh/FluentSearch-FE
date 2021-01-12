import { Meta, Story } from '@storybook/react';
import React from 'react';
import ThumbnailPhoto from './index';
import { Props } from './types';

export default {
  title: 'FluentSearch/ThumbnailPhoto',
  component: ThumbnailPhoto,
} as Meta;

const baseArgs = {
  src: 'https://cdn.pixabay.com/photo/2015/07/31/14/59/beach-869195_1280.jpg',
} as Partial<Props>;

const ThumbnailStory: Story<Props> = (args) => <ThumbnailPhoto {...args} />;
export const Default = ThumbnailStory.bind({});
Default.args = {
  selected: false,
  ...baseArgs,
} as Props;

export const Selected = ThumbnailStory.bind({});
Selected.args = {
  selected: true,
  ...baseArgs,
} as Props;
