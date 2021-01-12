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
  <GroupThumbnailPhoto {...args} {...mock} />
);

export const Default = GroupThumbnailPhotoStory.bind({});
Default.args = {};
