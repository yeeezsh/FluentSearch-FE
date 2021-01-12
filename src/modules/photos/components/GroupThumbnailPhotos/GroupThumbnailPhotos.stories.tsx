import React from 'react';
import { Meta, Story } from '@storybook/react';
import GroupThumbnailPhoto from '.';

import { mock } from './constants';
import { Props } from './types';

export default {
  title: 'FluentSearch/GroupThumbnailPhoto',
  component: GroupThumbnailPhoto,
} as Meta;

const GroupThumbnailPhotoStory: Story<Props> = (args) => (
  <GroupThumbnailPhoto {...mock} {...args} />
);

export const Default = GroupThumbnailPhotoStory.bind({});
Default.args = {};

export const OtherDate = GroupThumbnailPhotoStory.bind({});
const today = new Date();
const nextDay = new Date(today.setDate(today.getDate() + 1));
OtherDate.args = {
  dateRange: [nextDay, nextDay],
} as Props;
