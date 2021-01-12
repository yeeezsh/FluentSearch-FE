import { Meta, Story } from '@storybook/react';
import React from 'react';
import ThumbnailPhoto from './index';
import { Props } from './types';

export default {
  title: 'FluentSearch/ThumbnailPhoto',
  component: ThumbnailPhoto,
} as Meta;

const PhotoStory: Story<Props> = (args) => <ThumbnailPhoto {...args} />;
export const Default = PhotoStory.bind({});
Default.args = {
  selected: false,
} as Props;

export const Selected = PhotoStory.bind({});
Selected.args = {
  selected: true,
} as Props;
