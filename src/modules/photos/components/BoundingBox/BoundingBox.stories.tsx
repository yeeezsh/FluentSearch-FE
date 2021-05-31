import React from 'react';
import { Meta, Story } from '@storybook/react';
import BoundingBox from '.';

import { mock } from './constants';
import { BoundingBoxType } from './types';

export default {
  title: 'FluentSearch/BoundingBox',
  component: BoundingBox,
} as Meta;

const BoundingBoxStory: Story<BoundingBoxType> = (args) => (
  <BoundingBox {...mock} {...args} />
);

export const Default = BoundingBoxStory.bind({});
Default.args = {};
