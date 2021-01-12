import React from 'react';
import { Meta, Story } from '@storybook/react';
import GroupThumbnailPhoto from '.';

import { mock } from './constants';

export default {
  title: 'FluentSearch/GroupThumbnailPhoto',
  component: GroupThumbnailPhoto,
} as Meta;

const GroupThumbnailPhotoStory: Story = (args) => (
  <GroupThumbnailPhoto {...args} {...mock} />
);

export const Default = GroupThumbnailPhotoStory.bind({});
Default.args = {};
